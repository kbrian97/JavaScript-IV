// CODE here for your Lambda Classes

class Person{
    constructor(value) {
        this.name = value.name;
        this.age = value.age;
        this.location = value.location;
    }

    speak() {
        `Hello my name is ${this.name}, I am form ${this.location}`
    }
}

class Instructor extends Person{
    constructor(value){
        super(value);
        this.specialty = value.specialty;
        this.favLanguage = value.favLanguage;
        this.catchPharse = value.catchPharse;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(subject, student) {
        return `${student} recieves a perfect score on ${subject}`
    }
}


