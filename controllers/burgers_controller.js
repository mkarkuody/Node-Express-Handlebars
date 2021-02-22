const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its db functions.
const burgers = require("../models/burger.js");

// READ (CRUD) --> SELECT via GET request, repeated display on window
router.get("/", (req, res) =>
{
  burgers.selectAll((data) =>
  {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//Create (CRUD)-> INSERT via POST request
router.post("/api/burgers", (req, res) =>
{
  burgers.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) =>
  {
    // Send back the ID of the new item
    res.json({ id: result.insertId });
  });
});

    

//UPDATE (CRUD) --> UPDATE via PUT request
router.put("/api/burgers/:id", (req, res) =>
{
  const condition = "id = " + req.params.id;

  console.log("condition", condition);
  console.log("received: " + req.body.devoured);
  burgers.updateOne(
    {
      devoured: req.body.devoured
    },
    condition, 
    function (result) {
    res.json({ id: result.updateId});
  }
  );
});


// Export routes for server.js to use.
module.exports = router;