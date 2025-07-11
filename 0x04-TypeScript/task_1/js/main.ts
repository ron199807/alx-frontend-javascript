interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentclassInterface;
}

interface StudentclassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
} 

// student class
class StudentClass implements StudentclassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}


const student = new StudentClass('John', 'Doe');
console.log(student.displayName());
console.log(student.workOnHomework());

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};
