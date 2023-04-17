const person = {
  name: "Vlad",
  age: 22
}

const student = Object.create(person);
student.nextJob = "Frontend-developer";
student.ownSity = "Omsk";

function func (obj) {
  for(let key in student){
    if (student.hasOwnProperty(key))
      console.log(`Ключ: ${key}, его значение: ${student[key]}`); 
  }
}

func(student);