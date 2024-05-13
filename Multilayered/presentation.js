const LogicLayer = require('./logic-layer');
const Student = require('./Student');
const readline = require('readline');

const logicLayer = new LogicLayer();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addStudent() {
  rl.question('Enter student name: ', (name) => {
    rl.question('Enter student grade: ', (grade) => {
      const student = new Student(name, grade);
      logicLayer.addStudent(student);
      console.log('Student added successfully!');
      showMenu();
    });
  });
}

function listStudents() {
  console.log('List of students:');
  logicLayer.getStudents();
  showMenu();
}

function showMenu() {
  console.log('\n1. Add Student');
  console.log('2. List Students');
  console.log('3. Exit');
  rl.question('Select an option: ', (option) => {
    switch (option) {
      case '1':
        addStudent();
        break;
      case '2':
        listStudents();
        break;
      case '3':
        rl.close();
        break;
      default:
        console.log('Invalid option');
        showMenu();
        break;
    }
  });
}

console.log('Welcome to Student Management System\n');
showMenu();
