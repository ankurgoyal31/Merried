'use server'
import { MongoClient, ObjectId } from "mongodb";
let client;
let db;
async function connectMongo() {
  if (db) return db;
  client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  db = client.db("event");
  return db;
}
async function collect() {
  const db = await connectMongo();
  return {
    Um: db.collection("card"),
    pm: db.collection("ct"),
    nm: db.collection("response"),
  };
}
export const mg = async (email, data, org, id) => {
  const { Um } = await collect();
  if (id) {
    await Um.updateOne( { _id: new ObjectId(id) }, { $set: { ...data, email, org } } );
    return;
  }
  await Um.insertOne({...data, email, org,});
};
export const gt = async (email, org) => {
  const { Um } = await collect();
  return await Um.find({ email, org }).toArray();
};

export const py = async (email, userto, color, item, org, id) => {
  const { pm } = await collect();

  if (id) {
    await pm.updateOne({ _id: new ObjectId(id) },{ $set: { userto, color } });
    return;
  }

  await pm.insertOne({email, userto, color,item,org,});};

export const sd = async (item, email, org) => {
  const { pm } = await collect();
  return await pm.find({ item, email, org }).toArray();
};

 
export const dn = async (email, org, id) => {
  const { pm } = await collect();
  await pm.deleteOne({ _id: new ObjectId(id), email, org });
};

export const de = async (email, org, id, index) => {
  const { Um, pm } = await collect();

  const event = await Um.findOne({ _id: new ObjectId(id), email, org,});

  if (!event) return;

  await Um.deleteOne({ _id: new ObjectId(id) });
  await pm.deleteMany({ email, org, item: index });
  const remaining = await Um.find({ email, org }).toArray();
      for (let i = index + 1; i <= remaining.length; i++) {
    await pm.updateMany({ item: i }, { $set: { item: i - 1 } });}
};

export const km = async (userto, res, des, org, email, item) => {
  const { nm } = await collect();
  await nm.insertOne({ userto, res, des, org, email, item });
};

export const xc = async (email, org, item) => {
  const { nm } = await collect();
  return await nm.find({ email, org, item }).toArray();
};

export const chg = async (email, org, item) => {
  const { pm } = await collect();
  const data = await pm.find({ email,org, item}).toArray();

  return data;
};
