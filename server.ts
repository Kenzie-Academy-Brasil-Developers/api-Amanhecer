import { AppDataSource } from './data-source';
import express from 'express';
import "dotenv/config";

const app = express();

AppDataSource.initialize()
  .then(() =>{
    console.log("database is running")
    const PORT = process.env.PORT || 3001
    app.listen(PORT, () => {
      console.log(`server is running on $ {PORT}` )
      
    })
  })
  .catch((err) => console.log(err))
