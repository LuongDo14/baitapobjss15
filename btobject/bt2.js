function checkEmpty(checkept,per){
    return per in checkept;
}
let someone = {
    name: "KAY",
    age: 20
};
console.log(checkEmpty(someone, "name"));
console.log(checkEmpty(someone, "email"));