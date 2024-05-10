/*
===== Step 1: =====
  Look at the code below and make a prediction of what the output will be.
*/

const birthYear = 1947;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";

const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

console.log(greeting); // Prints "Hello! my name is Carlos Stevenson and I am 18 years old."

/*
  ===== Step 2: =====
  Once you understand the code snippet above, delete it. Then, using the following instructions, recreate the snippet on your own under "Your code goes here".
	
  ---------------------------------------------------------------
	
  1. Create 4 variables: firstName, lastName, thisYear, and birthYear

  2. Create a 5th variable, greeting, that is constructed from the previous 4
  (it should contain a greeting with the person's full name and their age)

  3. Print greeting with console.log
	
  ---------------------------------------------------------------

//===== Your code goes here =================
*/

const myBirthYear = 2004;
const actualYear = 2024;
const myFirstName = "Hugo";
const myLastName = "Samuel";

const myGreeting = "Hello! My name is " + myFirstName + " " + myLastName + " and I am " + (actualYear - myBirthYear) + " years old." 


/*

  ===== Step 3: =====
  Now that you have the code working again, let's go back over it and, using the instructions below, edit it to make it easier to read.

  ---------------------------------------------------------------

  1. Go back to your code and create 2 new variables: "fullName" and "age"

  Do NOT simply type the full name and age into the new variables. Set them using the pre-existing variables, with the calculations that are currently inside of greeting.

  2. Edit the greeting string to use fullName and age instead of the other 4 variables. (the greeting should then look something like: "Hello! My name is " + fullName)

  ---------------------------------------------------------------
//===== Your code goes here =================
*/

const fullName = myFirstName + " " + myLastName;
const myAge = actualYear - myBirthYear;

const newGreeting = "Hello! My name is " + fullName + " and i am " + myAge + " years old."