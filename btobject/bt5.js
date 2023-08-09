function computer(){

    let Read = {
        numb1: +prompt("Nhập số thứ 1"),
        numb2: +prompt("Nhập số thứ 1"),
        savenumb: function(n1, n2){
            this.numb1 = n1;
            this.numb2 = n2;
        },
        Sum: function(){
            return this.numb1 + this.numb2;
        },
        Mul: function(){
            return this.numb1 * this.numb2;
        }
    };
    return Read;
}
let maytinh = computer();
maytinh.Read;

let SumResult = maytinh.Sum();
let MulResult = maytinh.Mul();

console.log("2 giá trị nhận vào" ,maytinh);
console.log("Tổng giá trị", SumResult);
console.log("Tích giá trị", MulResult);