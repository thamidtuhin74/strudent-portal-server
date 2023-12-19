const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
var cors = require('cors');//first line
const app = express()
const port = process.env.port || 5000;

// middle war
app.use(cors());//2nd line
app.use(express.json());


// usename: student-portal-admin
// password: IcYZuXYGKFDeAU2V
const uri = "mongodb+srv://student-portal-admin:IcYZuXYGKFDeAU2V@cluster0.vqsktco.mongodb.net/?retryWrites=true&w=majority";
//set the password in the <password>
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    const database = client.db("student-portal");
    const allCourses = database.collection("allCourses");

    app.get('/all-courses',async(req, res) => {
        const cursor = allCourses.find();
        const result = await cursor.toArray();
        res.send(result);
      })

    app.get('/all-courses/:id',async(req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const singleCourse = await allCourses.findOne(query);
        res.send(singleCourse);
        console.log('singleToy: ',singleCourse);
    })
    
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/',(req,res)=>{
    res.send('👋 Student Server is RUNNING');
})


app.listen(port ,()=>{
    console.log(`simple CRUD server is running on port: ${port}`);
})