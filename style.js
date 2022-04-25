//Exercises: Level 1
//1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Miskiat";
let lastName = "Badmus";
let country = "Nigeria";
let city = "Ilorin";
let age = 10;
let isMarried = false;
let year = 2022;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//2.Check if type of '10' is equal to 10
console.log(typeof "10" == 10);

//3.Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") == 10);

//4.Boolean value is either true or false.
//i.Write three JavaScript statement which provide truthy value.

//ii.Write three JavaScript statement which provide falsy value.

//5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
//ix.Find the length of python and jargon and make a falsy comparison statement.
// console.log(length.python != length.jargon);

//6.Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));
//xi.There is no 'on' in both dragon and python
console.log;
//7.Use the Date object to do the following activities
//i.What is the year today?
const now = new Date();
console.log(now.getFullYear());
//ii.What is the month today as a number?
console.log(now.getMonth());
//iii.What is the date today?
console.log(now.getDate());
//iv.What is the day today as a number?
console.log(now.getDay());
//v.What is the hours now?
console.log(now.getHours());
//vi.What is the minutes now?
console.log(now.getMinutes());
//vii.Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getSeconds());

//Exercises: Level 2
//1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).;
const b = prompt("enter base");
const h = prompt("enter height");
const areaOfTriangle = 0.5 * b * h;
console.log(areaOfTriangle);
//2,Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
const a = prompt("enter side a");
const bb = prompt("enter side bb");
const c = prompt("enter side c");
const perimeterOfTriangle = a + bb + c;
console.log(perimeterOfTriangle);
//3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
const length = prompt("enter your length");
const width = prompt("enter your width");
const areaOfRectangle = length * width;
console.log(areaOfRectangle);
const perimeterOfRectangle = 2 * (length + width);
console.log(perimeterOfRectangle);
//4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const pi = 3.14;
const radius = prompt("enter the radius");
const areaOfCircle = pi * radius * radius;
console.log(areaOfCircle);
const circumferenceOfCircle = 2 * pi * radius;
console.log(circumferenceOfCircle);
//5.Calculate the slope, x-intercept and y-intercept of y = 2x -2
//6.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
//const m = (y2 - y1) / (x2 - x1);
m = (2 - 2) / (10 - 6);
console.log(m);

//7.Compare the slope of above two questions.
//8.Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
//9.Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hour = 40;
let rate = 28;
const payOfPerson = hour * rate;
console.log(payOfPerson);
//10.If the length of your name is greater than 7 say, your name is long else say your name is short.
//let name = "Miskiat"
//console.long(name.length)

//11.Compare your first name length and your family name length and you should get this output.
//let firstName = "Miskiat";
//let lastName = "Badmus";
