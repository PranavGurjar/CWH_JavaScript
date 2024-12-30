// practice_set_q4

const student = {
    name : "pranav",
    rollno : 20,
    gender : 'M',
    isPrinciple : false
}

console.log(student);

student.name = "Ram";
student.rollno = 25;
student.gender = 'M';
student.isPrinciple = true;

console.log(student);

student['name'] = "Rajesh";
student['rollno'] = 26;
console.log(student);

console.log(student['name']);
console.log(student['rollno']);
console.log(student['gender']);
console.log(student['isPrinciple']);