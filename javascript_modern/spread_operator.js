/* spread 연산자 */

// 배열 병합, 복사
let fruitOne = ['apple', 'banana'];
let fruitTwo = ['grape', 'peach'];

let fruitsAll = fruitOne.concat(fruitTwo);
console.log(fruitsAll);

/* spread 연산자 */
// 배열 병합
fruitsAll = [...fruitOne, ...fruitTwo];

// 배열 복사
fruitOne = ['blueberry', 'strawberry'];
fruitTwo = fruitOne.slice();
fruitTwo.push('mango');
console.log(fruitTwo);

fruitOne = ['pineapple', 'melon'];
fruitTwo = fruitOne.map(item => item);
console.log(fruitTwo);
fruitTwo.push('orange');
console.log(fruitTwo);

fruitOne = ['watermelon', 'kiwi'];
fruitTwo = [...fruitOne, 'shine muscat'];
console.log(fruitTwo);

let user1 = {
    userId: 'guard1',
    name: 'kim',
    email: 'kim@gmail.com'
};
console.log(user1);

let user2 = {
    ...user1,
    userId: 'guard2' // userId만 변경, 나머지 데이터는 그대로 복사
}
console.log(user2);

let user3 = {
    ...user2,
    age: 40, // age 추가
    address: "대전" // address 추가
}
console.log(user3);
