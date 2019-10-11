// CODE here for your Lambda Classes
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}







class Instructor {
    constructor(insAttrs) {
        this.name = insAttrs.name;
        this.age = insAttrs.age;
        this.location = insAttrs.location;
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

class Student {
    constructor(studentAttrs) {
        this.name = studentAttrs.name;
        this.age = studentAttrs.age;
        this.location = studentAttrs.location;
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects() {
        console.log(this.favSubjects)
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}