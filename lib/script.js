// scripts tare here

// FIZZBUZZ script

function myFunction() {
    for (i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
            document.getElementById("num1").innerHTML = "FizzBuzz";
        }
        else if (i % 3 == 0) {
            console.log("Buzz")
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }

    }
}


// Happy number ************

var i = "";
var j = "";

//split number to array
var arr = [];
var sum = 0;
for (i = 10; i <= 1000; i++) {
    var num1 = i;
    var arr = num1.toString().split('');
    // console.log("split : " + arr);
    // console.log(typeof (arr));
    // console.log(arr.length);
    j = arr.length;
    var arr1 = Object.values(arr);
    var sum = 0;

             for (var j = 0; j < arr.length; j++) {
                sum += arr1[j]**2;
                if (sum == 1) {
                    console.log("sum : " + num1 + " is happy number");
                    console.log("sum : " + sum);
                }
    }
}
    


// //copy from w3resource
// function happy_number(num) {
//     var m, n;
//     var c = [];

//     while (num != 1 && c[num] !== true) {
//         c[num] = true;
//         m = 0;
//         while (num > 0) {
//             n = num % 10;
//             m += n * n;
//             num = (num - n) / 10;
//         }
//         num = m;
//     }
//     return (num == 1);
// }

// var cnt = 5;
// var num = 1;
// var f5 = '';
// while (cnt-- > 0) {
//     while (!happy_number(num))
//         num++;
//     f5 = f5 + (num + ", ");

//     num++;
// }
// console.log('First 5 happy numbers are : ' + f5);


// // armstrongnumbers of 3 digits

// var i = "";
// var j = "";
var arr = [];

for (i = 100; i <= 1000; i++) {
    var num1 = i;
    var arr = num1.toString().split('');
    // console.log("split : " + arr);
    // console.log(typeof (arr));
    // console.log(arr.length);
    j = arr.length;
    var arr1 = Object.values(arr);
    var sum = 0;
    for (var j = 0; j < arr.length; j++) {
        sum += arr1[j]**3;
        if (sum == num1)
        console.log("sum : " + sum + " is armstrong");

    }
    // console.log(j);
    // console.log(arr);
    // console.log("sum : " + sum);

}


// //copy from w3resource
// function three_digit_armstrong_number() {
//     for (var i = 1; i < 10; ++i) {
//         for (var j = 0; j < 10; ++j) {
//             for (var k = 0; k < 10; ++k) {
//                 var pow = (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3));
//                 var plus = (i * 100 + j * 10 + k);
//                 if (pow == plus) {
//                     console.log(pow);
//                 }
//             }
//         }
//     }
// }
// three_digit_armstrong_number();