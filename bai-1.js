let student = {
    name: 'An',
    age: 20, 
    gender: 'male',
    scores: {
        math: 8,
        english: 7, 
        science: 9
    }
};

console.log(student.name);
console.log(student.age);

let dtb = (student.scores.math + student.scores.english + student.scores.science) / 3;
console.log("Điểm trung bình 3 môn = ",dtb);

student.address = 'Ha Noi';

delete student.gender;
console.log(student);