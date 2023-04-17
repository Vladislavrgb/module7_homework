const str = "name";
const obj = {
  name: "Vlad",
  age: 22,
  city: "Omsk"
}

function createObj (str,obj) {
  for (let key in obj)
    if (str == key) return true;
  return false;
}

console.log(createObj (str,obj));