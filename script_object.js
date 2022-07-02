let patient = {
  //키값 : 값
  name : "Jimin",
  age : 17,
  disease : "cold"
}
//객체 전체정보
console.log(patient)
//객체의 나이정보
console.log(patient.age)
//객체의 이름정보
console.log(patient["name"])
//객체의 이름정보 바꾸기
patient.name = "jk"
//객체의 나이정보 바꾸기
patient["age"] = 25
console.log(patient)

//객체(오브젝트) 타입 배열
let patientList = [{name:"jimin",age : 13},{name:"jk",age:25},{name:"jhope",age:40}]

console.log(patientList)
console.log("첫번째 환자는:",patientList[0])
console.log("첫번째 환자의 나이는?",patientList[0].age)
console.log("두번째 환자의 이름은:",patientList[1].name)