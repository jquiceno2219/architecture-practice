class LogicLayer {
    constructor() {
        this.students = [];
    }

    addStudent(student){
        this.students.push(student);
    }

    getStudents(){
        this.students.forEach(student => {
            console.log(`${student.name}, grade: ${student.grade}`)
        })
    }
}

module.exports = LogicLayer;