const mongoose = require("mongoose");
const app = require("./app")
const { DB_USER, 
        DB_PASSWORD,
        DB_HOST,
        IP_SERVER,
        API_VERSION
    } = require ("./constants");

    const PORT = process.env.POST || 3000

mongoose.set('strictQuery', false);

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority&appName=Cluster0`,
    (error) => {
        if (error) throw error;
        
        app.listen(PORT, () =>{
            console.log("#########")
            console.log("#### MERN API RES ###")
            console.log("####")
            console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`)
        })
    }
);
