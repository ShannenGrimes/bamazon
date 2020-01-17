## ![bamazon Logo](logo.png)

**Created By**: `Shannen Grimes`
***Visit me on Gituhub to see my other projects***
![GitHub]https://shannengrimes.github.io/Portfolio/

## Introduction
### :small_orange_diamond:bamazon
This application is a command-prompt storefront, similar to a popular online retailer.  The commands begin with prompts.  However, it is recommended that you install the application technologies, outlined below.

## Setup

1. Clone the repository
2. Run npm install to install the following packages:

      ### `npm install`
      - 
      | Package       | Descr                        | Link                                                            |
      | ------------- |:-------------:               | -----:                                                          |
      | mySQL         | Open Source Database         | [MySQL](https://www.mysql.com/downloads/)                       |
      | Inquirer      | Node.js Cmd Line Interface   | [Inquirer](https://www.npmjs.com/package/inquirer)              |
      | CLI Table     | Utilty for creating tables   | [CLI TABLE](https://www.npmjs.com/package/cli-table)            |

3. Open the `bamazon.js` file in the terminal.
4. In the command line, type `node bamazon.js` and hit enter
5. The *Customer* will be provided a table of available inventory for sale.
6. The *Customer* is then prompted: `What would you like to purchase? Enter the Item ID.`
7. The *Customer* is prompted again: `Input the number of items you wish to purchase.` The result must be numeric.
8. After a purchase is made, the qty and the total of the order are confirmed in the command line.
9. The *Customer* is then prompted with `Would you like to purchase another item?`. 
10. Type *N*, to end the program.  Type *Y*, to make another purchase from the current *Inventory*. **BUG: The answer defaults to `Null`.


## Command Line - Output Examples

`What would you like to purchase? Enter the Item ID.`


