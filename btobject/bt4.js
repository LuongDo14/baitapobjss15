let menu = {
    width : +prompt("Nhập số"),
    height : +prompt("Nhập số"),
    title : prompt("Nhập tên loại"),
};

function nhanhai(nhan) {
    for (let key in nhan) {
        if (typeof nhan[key] === "number")
            nhan[key] *= 2;
    }
}
console.log(menu);
nhanhai(menu);
console.log(menu);
