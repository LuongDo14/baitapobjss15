let nhanviens = [
    {ten: "Thầy ba" , luong:5000},
    {ten: "Khắc việt" , luong:8000},
    {ten: "Thầy ông cụ" , luong:500000},
    {ten: "Cô Trang" , luong:340000},
    {ten: "Anh dọi" , luong:8500}
];
let tong = 0

for(let nhanvien of nhanviens) {
    tong += nhanvien.luong;
}

console.log(nhanviens);
console.log("Tổng lương của các nhân viên trong phòng", tong);