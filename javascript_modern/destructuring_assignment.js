/* 객체 분할 대입 또는 비구조화 할당 */
const myProfileObject = {
    name: '김경호', age: 50, address: '서울'
};

let message = `내 이름은 ${myProfileObject.name}이고 
나이는 ${myProfileObject.age}세이며 
주소는 ${myProfileObject.address}입니다.`;
console.log(message);

/* 객체 분할 대입 */
const {name, age, address} = myProfileObject;

message = `내 이름은 ${name}이고 
나이는 ${age}세이며 
주소는 ${address}입니다.`;
console.log(message);

const print = ({name, age, address}) => {
    message = `내 이름은 ${name}이고
나이는 ${age}세이며
주소는 ${address}입니다.`
    console.log(message);
}
print({
    name: '제임스', age: 48, address: '부산'
});

/* 객체 분할 대입 시 변수명 변경 */
const {name: 이름, age: 나이, address: 주소} = myProfileObject;
message = `내 이름은 ${이름}이고
나이는 ${나이}세이며
주소는 ${주소}입니다.`;

/* 배열 분할 대입 */
const myProfileArray = ['김경호', 25, '대구'];
message = `내 이름은 ${myProfileArray[0]}이고
나이는 ${myProfileArray[1]}세이며
주소는 ${myProfileArray[2]}입니다.`;
console.log(message);

const [a1, a2, a3] = myProfileArray;
message = `내 이름은 ${a1}이고 
나이는 ${a2}세이며 
주소는 ${a3}입니다.`;
console.log(message);

function useState(initState) {
    let state = initState;
    let returnObject = [
        state, function (newState) {
            state = newState;
        }
    ];
    return returnObject;
};

let returnArray = useState(10);
const state = returnArray[0];
const setState = returnArray[1];
console.log("state: ", state);

const [count, setCount] = useState(10);
console.log(count);
const [user, setUser] = useState({});
setUser({userId: 'guard', name: 'kim'});
console.log(user);