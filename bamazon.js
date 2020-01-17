var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Trumpsucks#3",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Welcome to Bamazon");
});
// This will be used to display the available inventory for sale
var inventory = function() {
  connection.query('SELECT * FROM products', function(err, res) {
    // This will be my first cli-table.  This is being used to format the list of inventory in the command line.
    var table = new Table({
      head: ["Item ID", "Product Name", "Department", "Price", "Stock Quantity"]
    });

    console.log("===========================");
    console.log("Bamazon Inventory for Sale");
    
    for (var i = 0; i < res.length; i++) {
      table.push([
        res[i].itemid,
        res[i].productname,
        res[i].departmentname,
        res[i].price.toFixed(2),
        res[i].stockquantity + "\n"
      ]);
    }
    console.log("===========================");
    // This is the customer prompt that will be using the cli format.
    console.log(table.toString());
    inquirer
      .prompt([
        {
          name: "id",
          type: "input",
          message: "What would you like to purchase? Enter the Item ID.",
          validate: function(value) {
            if (isNaN(value) == false) {
              return true;
            } else {
              return false;
            }
          }
        },
        {
          name: "Quantity",
          type: "input",
          message: "Input the number of items you wish to purchase.",
          validate: function(value) {
            if (isNaN(value) == false) {
              return true;
            } else {
              return false;
            }
          }
        }
      ])
      .then(function(answer) {
        var item = answer.id - 1;
        var products = res[item];
        var qty = parseInt(answer.Quantity);
        if (qty < res[item].stockquantity) {
          console.log(
            "You have purchased " +
              "(" +
              answer.Quantity +
              ")" +
              " - " +
              res[item].productname +
              " for the total amount of $" +
              parseFloat(res[item].price.toFixed() * qty)
          );
          connection.query( 
            'UPDATE products SET ? WHERE ?',
            [
              {
                stockquantity: res[item].stockquantity - qty
              },
              {
                itemid: res[item].itemid
              }
            ],
            function(err, res) {
              console.log(err);
            }
          );
        } else {
          console.log(
            "Sorry, that is an invalid selection.  Please check your order and try again."
          );
        }
        prompt();
        function prompt(){
          inquirer.prompt([{
            type: "confirm",
            name: "reply",
            message: "Would you like to purchase another item?"
          }]).then(function(answer){
            if(answer.reply){
              inventory(answer.Y);
            } else{
              console.log("See you soon!");
              connection.end();
            }
          });
        }
      });
  });
};

inventory();
