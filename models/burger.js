// Import the ORM to create functions that will interact with db.
const orm = require("../config/orm.js");

const burgers = {
  selectAll:(callback)=> {
    orm.selectAll("burgers", (res)=> {
      callback(res);
    });
  },
  // Erin- Don't forget:  variables columns and values are arrays!
  insertOne:(columns, values, callback)=>{
    orm.insertOne("burgers", columns, values,(res)=> {
      callback(res);
    });
  },
  updateOne: (columnData, condition, callback)=> {
    orm.updateOne("burgers", columnData, condition,(res)=> {
      callback(res);
    }
    )}
  };

// Export the db functions for burgers_controller.js
module.exports = burgers;