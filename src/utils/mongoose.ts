import {connect,connection} from "mongoose";

const conn = {
    isConnected: false
  }
  

export async function dbConect(){
    if(conn.isConnected) return;
   
    const db: any = await connect(`${process.env.DB_URI}`);

    conn.isConnected = db.connections[0].readyState;

}

connection.on("connected", ()=>{
    console.log("Mongodb is connected")
})

connection.on("error", (err)=>{
    console.log(err)
})

/*
connect(`${process.env.DB_URI}`)
.then(()=> {
    console.log("connected to Mongodb")
}).catch(error =>{
    console.error("error mongod")
})
*/
