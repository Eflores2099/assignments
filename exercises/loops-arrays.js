//#1
//Loop through the following array and count how many "computers" there are. Log the final count:

//var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
//var counter = 0;
//for(i = 0; i < officeItems.length; i ++){
    // console.log(counter)
  //  if(officeItems[i]==="computer"){
        // counter = counter + 1
    //    counter++;
        // console.log(counter)
  //  }
//}
//console.log(counter)

//#2
//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
  counter = 0
  for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i ++){
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough.")
        
        }else{
             console.log("not old enough")
      }
  }