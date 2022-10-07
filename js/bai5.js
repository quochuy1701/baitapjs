/**
 * Khối 1 : Input
 * số nguyên dương có 2 chữ số (12,44,83)
 * num
 * Khối 2 : các bước xử lý 
 * b1: khai báo biến và gán giá trị
 * b2: lập công thức
 * bóc tách từng số : hàng chục , hàng đơn vị
 *
 * +lấy hàng chục
 * - lấy phần Nguyên trong phép chia 10
 *
 * +lấy hàng đơn vị
   lấy phần dư trong phép chia 10
 * b3:thông báo kết quả
 * Khối 3 :output
 * tổng của 2chữ số (12=>1 + 2)
 */
var num=12;
var ten=Math.floor(num / 10);
var unit=num % 10;
var total= ten + unit;
console.log("Tổng bằng :"+total)