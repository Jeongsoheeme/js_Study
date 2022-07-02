// let fruit = "banana"
// let fruit2 = "apple"
// let fruit3 = "grape"
// let fruit4 = "mango"

let fruit = ["banana", "apple", "grape", "mango"]

console.log(fruit)
console.log(fruit[3])

fruit[0] = "cherry"
console.log(fruit)
fruit[2] = "tomato"
console.log(fruit)

//pop():마지막에 있는 아이템을 뺌
fruit.pop()
console.log(fruit)

//push():마지막에 아이템을 추가함
fruit.push("pineapple")
console.log(fruit)

//아이템이 있는지 없는지 확인
console.log(fruit.includes("pear"))

//아이템이 몇번째인지 확인하고 싶을때
console.log(fruit.indexOf("apple"))

//선택 인덱스 뒤부터 자르기
console.log(fruit.slice(1))

//배열 아이템을 잘라내는 역할 (시작점,끝점-끝점 미포함),기존의 배열을 자르지 않음
console.log(fruit.slice(1, 3))
//let extrafruit = fruit.slice(1,3)
//console.log(extrafruit)
//console.log("original fruit",fruit)

//배열 아이템 잘라내는 역할 (시작점,개수),기존의 배열을 자름
fruit.splice(0, 2)
console.log(fruit)