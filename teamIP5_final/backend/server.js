var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
const port = "8080";
const host = "localhost";

app.listen(port, () => {
  console.log("App listening at http://%s:%s", host, port);
});

const { MongoClient } = require("mongodb");
const { ObjectId } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const dbName = "secoms3190";
const client = new MongoClient(url);
const db = client.db(dbName);

app.get("/menu", async (req, res) => {
  await client.connect();
  console.log("Connected to the MongoDB collection for GET");
  const query = {};
  const results = await db.collection("menu").find(query).limit(100).toArray();
  console.log(results);
  res.status(200);
  res.send(results);
});

app.get("/explore", async (req, res) => {
  await client.connect();
  console.log("Connected to the MongoDB collection for GET");
  const query = {};
  const results = await db
    .collection("explore")
    .find(query)
    .limit(100)
    .toArray();
  console.log(results);
  res.status(200);
  res.send(results);
});

app.get("/author", async (req, res) => {
  await client.connect();
  console.log("Connected to the MongoDB collection for GET");
  const query = {};
  const results = await db
    .collection("author")
    .find(query)
    .limit(100)
    .toArray();
  console.log(results);
  res.status(200);
  res.send(results);
});

app.get("/reviews", async (req, res) => {
  await client.connect();
  console.log("Connected to the MongoDB collection for GET");
  const query = {};
  const results = await db
    .collection("reviews")
    .find(query)
    .limit(100)
    .toArray();
  console.log(results);
  res.status(200);
  res.send(results);
});

app.post("/addReviews", async (req, res) => {
  try {
    await client.connect();
    const newDocument = {
      name: req.body.name,
      rating: req.body.rating,
      reviewText: req.body.reviewText,
    };
    const result = await db.collection("reviews").insertOne(newDocument);
    res.status(200);
    res.send(result);
  } catch (error) {
    console.error("Could not add review" + error);
    res.status(500);
    res.send("Error adding new review");
  } finally {
    await client.close();
  }
});

app.post("/checkout", async (req, res) => {
  try {
    await client.connect();

    console.log("Received order:", req.body);  // <-- add this

    const {
      name,
      email,
      address,
      items,
      total,
    } = req.body;

    const simplifiedItems = items.map(item => ({
      name: item.product_name || item.name,
      quantity: item.quantity,
      price: item.price
    }));

    const newOrder = {
      name,
      email,
      address,
      items: simplifiedItems,
      total
    };

    const result = await db.collection("orders").insertOne(newOrder);
    res.status(200).send(result);
  } catch (err) {
    console.error("Error during checkout:", err);
    res.status(500).send("Checkout failed");
  }
});

app.post("/signup", async (req, res) => {
  try {
    await client.connect();
    const { email, password } = req.body;
    const existing = await db.collection("login").findOne({ email });
    if (existing) return res.status(400).send("User already exists");

    const result = await db.collection("login").insertOne({ email, password });
    res.status(201).send("Signup successful");
  } catch (err) {
    res.status(500).send("Signup failed");
  }
});

app.post("/login", async (req, res) => {
  try {
    await client.connect();
    const { email, password } = req.body;
    const user = await db.collection("login").findOne({ email, password });
    if (user) {
      res.status(200).send({ message: "Login successful", user });
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (err) {
    res.status(500).send("Login failed");
  }
});

app.post("/menu", async (req, res) => {
  try {
    await client.connect();
    const result = await db.collection("menu").insertOne(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send("Failed to add menu item");
  }
});

app.put("/menu/:id", async (req, res) => {
  try {
    await client.connect();
    const { id } = req.params;
    const update = {
      $set: {
        product_name: req.body.product_name,
        description: req.body.description,
        price: req.body.price
      }
    };
    const result = await db.collection("menu").updateOne({ _id: new ObjectId(id) }, update);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send("Failed to update menu item");
  }
});

app.delete("/menu/:id", async (req, res) => {
  try {
    await client.connect();
    const { id } = req.params;
    const result = await db.collection("menu").deleteOne({ _id: new ObjectId(id) });
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send("Failed to delete menu item");
  }
});
