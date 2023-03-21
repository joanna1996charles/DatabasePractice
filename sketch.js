var database;

function setup(){
  database = firebase.database();
  
  createCanvas(500,500);

  // code to READ age,grade and num from database.

  // While reading age, value is the data we recieve and this is sent to fn1 function as a parameter.
  var ageRef = database.ref("age");
  ageRef.on("value",fn1,fn2);

  //While reading grade, the value is sent to a function defined right inside the call. 
  //pay attention to the syntax.
  var gradeRef = database.ref("grade");
  gradeRef.on("value", function(b){console.log(b.val())  });

  //While reading num, the function is defined at the call once again. 
  //pay attention to the alternate syntax.
  var numRef = database.ref("num");
  numRef.on("value", (b) => {console.log(b.val())  });

  //code to WRITE into the database.

  //when we write the below code, it enters a new data called newKey and assigns a value 3 in the database.
  database.ref("/").update({
    "newKey": 3
  })

  //The below code creates a data called parents and under parent it creates a data called child and under child
  //it creates a data called childA and assigns it a value 3. Thus creating a node or a branch.
  database.ref("parent/child").update({
    childA: 3
  })


  // The below code updates the already existing age data with a new value.
  database.ref("/").update({
    age: 3
  })
  
}

function draw(){
  background("white");


  
    
  
}

function fn1(b){
  console.log(b);
  console.log(b.val());
}

function fn2(){
  console.log("function 2 is working")
}