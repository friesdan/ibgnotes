//I am one month into coding, please don't take this as gospel. This is a homework assignment for a course I'm doing online. 
//Perhaps you can guess the name of the teacher :)

// OOP in JavScript, examples:

//Polymorphism: Here are 2 arrays, containing strings:

const strictTeachings = ["You should be able to rattle this off at a cocktail party", "You should ALREADY know this stuff", "I'm not kidding!"];
const laxTeachings = ["I don't expect you to know this yet", "You'll get there at your own pace.", ]

//Polymorphism 2: We can apply the same method ".length" to both the arrays (to return the number of elements in the array),
// ...as well as to the strings (to return the length of the sting):

console.log(laxTeachings.length)
//2  
//(2 strings)

console.log(laxTeachings[0].length);
//35  
//(35 characters in the string "I don't expect you to know this yet")

//Inheritance 1: Here is an object class, "Teacher". Further below, we will create an instance of it which will inherit its features. 

class Teacher {
 constructor(name, school, attentionSpan) {

  //Encapsulation 1: by convention in JavaScript, if we prepend an object's name with an underscore (_), it is meant to stay private from outside the scope of the object. 
  //This is a convention, not a formality, but approaches other stricter OOP languages' concepts of privacy. 
  //The underscore dissuades tampering. In order to access the values, "getters" are set, below.
  this._name = name;
  this._school = school;
  this._attentionSpan = attentionSpan;

 }
 //getters here:
 get name() {
  return this._name
 };
 get attentionSpan() {
  return this._attentionSpan
 };
 get school() {
  return this._school
 }
 //Abstraction 1: Here is a method which returns a random teaching from the 2 arrays above. 
 //It is a multi-faceted function whose complexity is abstracted into the single command teachUs():
 teachUs() {
  const styleSelector = Math.floor(Math.random() * 2);
  const teachingSelector = Math.floor(Math.random() * 2);
  const style = ((styleSelector < 1) ? strictTeachings : laxTeachings);
  const teaching = ((teachingSelector > 1) ? style[0] : style[1]);
  return teaching;

 }
}


//Inheritance: here we instantiate an instance of the class "Teacher," and the object dLewis inherits "Teacher"'s properties and methods.
let dLewis = new Teacher('Diondre Lewis', 'IBG', 'Multitasker');


//Encapsulation 2: we can use a getter to indirectly access the value of an object's property:
console.log(dLewis.school);
//IBG


//Abstraction 2: We have wrapped the complexity of the "teachUs()" method, 
//and we call on it's set of operations by appending it to the object:
console.log(dLewis.teachUs());
//You should ALREADY know this stuff
console.log(dLewis.teachUs());
//You'll get there at your own pace.