import { ObjectId } from "mongodb"
import { db } from "../../database/db.js"



export default async function DatabaseData({params}){
   const id = params.id
   const collection = await db.collection('Horror')
   const query = {_id: new ObjectId(id)}
   // const query = {_id: new ObjectId(params.id)}
   const result = await collection.findOne(query).toArray()

   const res = await result.json()
   console.log(res);
   return (
      console.log(res)
   )
}