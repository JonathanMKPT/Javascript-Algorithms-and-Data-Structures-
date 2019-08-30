class Student {
	constructor(firstName,lastName, year){
		this.firstName = firstName
		this.lastName  = lastName
		this.grade	   = year
		this.abscences = 0
		this.scores    = []
	}
	fullName(){
		return `Your full name is ${this.firstName} ${this.lastName}`;
	}
	markLate(){
		this.abscences += 1
		if(this.abscences >= 3){
			retrun "You've been expelled....sorry mate"
		}
		
		return `${this.firstName ${this.lastName} has been late ${this.abscences} times!`;
	}
	addScore(score){
		this.scores.push(score);
		return this.scores
	}
	calculateAverage(){
		let sum =this.scores.reduce(function(a,b){return a+b;})
		return sum/this.scores.length;
	}
	static enrollStudents(){
		return "Enrolling students"
	}
	
}