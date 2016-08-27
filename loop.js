//        exercise 1
for (var i = 120; i <= 140; i++){
 console.log(i);
}

//       exercise 2
var star = '';
    for(var i=0; i<5; i++){
        star += '*';
        console.log(star);
    }
    

//       exercise 3

var person= [
   yaron = {
    "name":"yaron",
     "eyecolor":"brown",
      "height": 187
    },
   eli =  {
    "name":"eli",
     "eyecolor":"black",
      "height": 185
    },
  miki =  {
    "name":"miki",
     "eyecolor":"green",
      "height": 183
    }
];

for (var i = 0;i < person.length; i++){
	var currentPerson=person[i];
	var name=currentPerson.name;
	var height=currentPerson.height;
	document.write(name+" "+"height is" +" "+ currentPerson.height+"<br>");
};
for (var i in person) {
  console.log("height" + " " + "is" + " " + person[i].height);
}

//       exercise  4

for (var i in person) {
  person[i].height=175;
}

for (var i in person) {
  console.log("height" + " " + "is" + " " + person[i].height);
}

