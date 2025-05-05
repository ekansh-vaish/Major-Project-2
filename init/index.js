const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initdata = require("../init/data");
const { object } = require("joi");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>
{
console.log("connected to DB");
})
.catch((err)=>
{
console.log(err);
});

async function main() {
await mongoose.connect(MONGO_URL);    
}  

const initDB = async () =>
{
await Listing.deleteMany({});
initdata.data = initdata.data.map((obj) => ({...obj, owner : "680a5aa94303dbca50a20c68"}));
await Listing.insertMany(initdata.data);  
console.log("data was initialized");
};

initDB();