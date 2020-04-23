// CODE here for your Lambda Classes
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }

    speak() {
        console.log (`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}




class Instructor extends Person {
    constructor(insAttrs) {
        super(insAttrs);
        // this.name = insAttrs.name;
        // this.age = insAttrs.age;
        // this.location = insAttrs.location;
        this.specialty = insAttrs.specialty;
        this.favLanguage = insAttrs.favLanguage;
        this.catchPhrase = insAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student,subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)

    }

}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        // this.name = studentAttrs.name;
        // this.age = studentAttrs.age;
        // this.location = studentAttrs.location;
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.map(item => console.log(item));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManagers extends Instructor {
    constructor(managersAttrs) {
        super(managersAttrs);
        this.gradClassName = managersAttrs.gradClassName;
        this.favInstructor = managersAttrs.favInstructor;
    }
    standUp(channel) {
        console.log (`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject) {
        console.log (`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const fred = new Instructor ({
    name: 'Fred',
    age: '25',
    location: 'New York City',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Yo Yo Yo',
});
