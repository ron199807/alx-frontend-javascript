interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Creating two student objects and an array to hold them
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

// render a table using vanilla JavaScript
const renderTable = (students: Student[]) => {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    // the header row
    const headerRow = document.createElement("tr");
    const firstNameHeader = document.createElement("th");
    const locationHeader = document.createElement("th");

    firstNameHeader.textContent = "First Name";
    locationHeader.textContent = "Location";

    headerRow.appendChild(firstNameHeader);
    locationHeader.appendChild(locationHeader);
    tbody.appendChild(headerRow);

    // rows for each student
    students.forEach(student => {
        const row = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        const locationCell = document.createElement("td");

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
   
}

// Call the function to render the table
renderTable(studentsList);