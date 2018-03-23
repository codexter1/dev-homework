//Concatenation is an operation that attaches string's characters end-to-end, whereas, interpolation makes use of placeholders to inject values into a statement.
//Dry = Don't Repeat Yourself. This practice not only makes our code easier for a computer to process, but also allows human collaborators to more easily digest and work with our code. Functions and Loops help us to maintain DRY code. 

console.log(a < b)
console.log(c > d)
console.log('name' === 'name')
console.log(a + b = c)
console.log(a * a = d)
console.log(e === 'kevin')
console.log(48 != '48')

// while (true) loop is infinite because the value of a loop is always true. 
// loop II reassigns the value of the variable to false and ends the loop. 
// the terminal will log: "AAAAAAAAAAAAAAAAAAAA" ( a is repeated 20 times). 

// a while loop and a for loop, are essentially the same, however, the latter is generally more suibtable for inducing specific amounts of repitition. 
for (let i = 0; i <= 999; i++) {
	console.log(i);
}
// the first: assigns the value of i 
// the second: the condition that limits the loop
// the third: the origin of incrementation
for (let i = 999; i >= 0; i--) {
	console.log(i);
}
for (let i = 0; i < 10; i++) {
	console.log('the value of i is ${i} of 10');
}
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i = 0; i <= StarWars.length-1; i++) {
	console.log(StarWars[i]);
}
for (let i = 0; i <= StarWars.length-1; i++) {
	console.log(StarWars[i], i); 
}
for (let i = 0; i <= StarWars.length-1; i++) {
	console.log(StarWars[i++]);
}

// It is often said that humans grow from trying times. People learn ehats realy important during times of struggle. Adversity grounds us to reality. And reality is the only thing we can truly learn and be objectively 'right' or 'wrong' in doing so. 

// I can add shrugs to my messages!
// I can switch through channels quickly with CMD + K(mac)






