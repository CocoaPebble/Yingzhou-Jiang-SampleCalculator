// const obj = {
//     [Symbol.iterator]: function () {
//         return {
//             next:function () {
//                 return {
//                     value: null,
//                     done: true
//                 }
//             }
//         }
//     }
// }

// let arr = [1,2,3]
// let iter = [Symbol.iterator]()



// let s1 = Symbol().for("1");
// let s2 = Symbol().for("1");

// let f1 = Symbol().for("foo")
// Symbol.keyFor(f1)


// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];
        
//     }
// }


// let arr = [1,2,1,2,3]
// var  testObj  = new Set(arr);

// for(let prop of testObj) {

// }


// function Hoist() {
//     var a
//     var b;

//     a = 5
//     b = 10
// }


// let type = ['string', 'Array', 'Number', 'string', 'Array', 'Number']
// for (_type of type) {
//     (function (_type) {
//         if (!(('is' + Type) in Type)) {
//             Type['is' + _type] = obj => 
//         }
//     })(_type)
// }

function showMessage(from, text) {
    from = '*' + from + '*';
}

let from = "Ann"

showMessage(from, "Hello");


function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function() { alert("yes"); },
    function() { alert("NO"); }
);



function sum(a, b) {
    return a + b;
}

let sum = function(a, b) {
    return a + b;
};


