// window.alert("警告だよ");
let val1 = "hello";
console.log(val1);
val = "こんにちは"
console.log(val);
const val2 = "constはあとから変更できない";
console.log(val2)
let breakfast = "breakは予約後のためエラー"

function sum(a,b,c) {
    return a + b+c;
}

let result = sum(10, 20,10);
console.log(result);

function multiply(a,b) {
    return a*b;
}
console.log(multiply(7,9)) 
console.log(multiply(-11,9)) 
console.log(multiply(8,9)) 
console.log(multiply(17,2)) 

function test (){
    console.log('ここは関数の内部')
    return 'テスト'
}
// 関数から文字が返ってくる引数がなくても（）は必要。

// 関数の単純な実行のやり方
test()
// console.log(test())

// document.getElementById('sikaku').addEventListener('click',function(){
// this.style.backgroundColor = "blue"
// })
// this.style.color = "blue"

document.getElementById('sikaku').addEventListener('click',function(){
    this.style.backgroundColor = "yellow"
    this.style.color = "blue"
    this.style.fontSize = "100px"
    this.style.height = "400px"
    this.style.width = "400px"
    console.log('クリック')
    })



    document.getElementById('sikaku').addEventListener('wheel',function(){
        this.style.backgroundColor = "blue"
        this.style.color = "white"
        this.style.fontSize = "100px"
        this.style.height = "300px"
        this.style.width = "300px"
        console.log('クリック')
        })

        document.getElementById('sikaku').addEventListener('mouseenter',function(){
            this.style.backgroundColor = "white"
            this.style.color = "red"
            this.style.fontSize = "50px"
            this.style.height = "250px"
            this.style.width = "250px"
            console.log('クリック')
            })

            
        document.getElementById('sikaku').addEventListener('mouseleave',function(){
            this.style.backgroundColor = "red"
            this.style.color = "white"
            this.style.fontSize = "50px"
            this.style.height = "250px"
            this.style.width = "250px"
            console.log('クリック')
            })
