function func1(value) {
    return ">> " + value;
}
console.log(func1('func1'));

const func2 = (value) => {
    return ">> " + value;
}
console.log(func2('func2'));

//인수가 1개일 때 소괄호 생략 가능
const func3 = value => ">> " + value;
console.log(func3('func3'));

// 인수가 2개 이상일 때 소괄호 생략 불가능
const func4 = (value1, value2) => value1 + value2;
console.log('func4(1, 2) = ' + func4(1, 2));

// 한 행으로 반환할 때 {}, return 생략
const func5 = (value1, value2) => {value1 + value2}; // -> undefined
console.log('func5(1, 2) = ' + func5(1, 2));

// 객체 반환
const func61 = (v1, v2) => {
    const obj = {
        name: v1,
        age: v2
    };
    return obj;
}
console.log(func61('제임스', 50));

const func62 = (v1, v2) => {
    return {
        name: v1,
        age: v2
    };
}
console.log(func62('제임스', 50));

const func63 = (v1, v2) => ({name: v1, age: v2});
console.log(func63('제임스', 50));