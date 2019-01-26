var shopper = {
    name : "Jack",
    age: 25,
    groceryList: [" apples", " steak" , " milk", " and bread"],

    jacksGroceryList: function(){
        return shopper.name + " is " + shopper.age  + " and buys " + shopper.groceryList + " at the grocery store."
    }

}
console.log(shopper.jacksGroceryList())