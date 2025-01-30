const express = require("express");
const app = express();
const port = 3000;
//inbuilt middleware
app.use(express.json());


const route = require('./routes/route')
//mounting routes
app.use('/api', route)

  //->  /api/student
  //--> /api/admin



app.get("/", (req, res) => {
  console.log("main route handler hu");
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
