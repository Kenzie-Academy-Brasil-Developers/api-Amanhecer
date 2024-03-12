import "dotenv/config";
import {app} from "./app"
import { AppDataSource } from './data-source';


AppDataSource.initialize()
  .then(() => {
    console.log("database is running")
    const PORT = process.env.PORT || 3001
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`)

    })
  })
  .catch((err) => console.log(err))
