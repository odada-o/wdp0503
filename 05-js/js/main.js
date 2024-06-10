// js구문
// 함수란 특정 작업을 수행하는 코드 블록
function myF() {
    const demo = document.querySelector('.demo')

    // document.getElementById('demo').innerHTML = 'Hello javascript!!'
    demo.innerHTML = 'Hello javascript!!'
    demo.style.color = 'red'
    demo.style.fontSize = '30px'
    demo.style.backgroundColor = 'yellow'
    demo.style.transform = 'translate(100px, 210px) rotate(45deg) scale(1.5)'
}

// 변수
// 변수란 데이터를 저장하는 공간
// 변수 선언 (let, const, var)

let a = 20
a = 10
console.log(a)

const b = 30
// b = 40
console.log(b)

// 데이터 타입
// 숫자(number)
let num1 = 1
let num2 = 2
console.log(num1 + num2) // 3

// 문자열(string)
let str1 = '1d'
let str2 = '2d'
console.log(str1 + str2) // 12

// 불린(boolean)
const isTrue = true
const isFalse = false
console.log(isTrue, isFalse)

// 객체(object)
const post = {
    img: 'https://s.pstatic.net/shopping.phinf/20240402_6/60af39c7-fad0-42a8-b672-55813cfcbf04.jpg?type=f294_378',
    title: '독보적인 예쁨 인생원피스 45%',
}
console.log(post)
console.log(post.img)
console.log(post.title)

// 배열(array)
// 순서가 있는 리스트
const arr = [1, 2, 3, 4, 5]
console.log(arr)
console.log(arr[0]) // 1

const users = [
    { name: '홍길동', age: 20 },
    { name: '김철수', age: 30 },
    { name: '이영희', age: 40 },
]

console.log(users[1]) // { name: '김철수', age: 30 }
console.log(`${users[1].name} 님 안녕하세요.`) // 김철수

// 함수
// 기명 함수
function 함수이름() {}
함수이름()

// 익명 함수
const fun1 = function () {
    console.log('fun1')
}
fun1()

// 화살표 함수
const fun2 = () => {
    console.log('fun2')
}
fun2()

// 조건문

// if문
const aa = 2

// if (조건) {조건이 참일 때 실행되는 코드}
if (aa === 1) {
    // 조건이 참일 때 실행되는 코드
    console.log('aa는 1입니다.')
} else if (aa === 2) {
    console.log('aa는 2입니다.')
} else {
    // 조건이 거짓일 때 실행되는 코드
    console.log('aa는 1이 아닙니다.')
}

// slide
let current = 0
const lstSlide = document.querySelector('.slide ul')

// 3초마다 슬라이드가 넘어가도록
// setInterval(함수, 시간)
setInterval(function () {
    slide() // 슬라이드 함수 호출
}, 3000)

// 슬라이드 함수 정의
function slide() {}
