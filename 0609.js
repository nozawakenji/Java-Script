
// 最初から動作する部分

// 選択肢の配列
const answers = ['富士山', '剣岳', '北岳', '高山'];

// 選択肢のIDの配列
const answerIDs = ['answerA', 'answerB', 'answerC', 'answerD'];

for (let i = 0; i < 4; i++) {
    document.getElementById(answerIDs[i]).textContent = answers[i]
}


const seikai = "〇正解"
const fuseikai = "×不正解"
const zannen = "残念"

// 関数名は動詞＋名詞でつけることが多い。 
const makeFuseikai = function (idName) {
const DGEBIi = document.getElementById(idName)

    document.getElementById(idName).addEventListener('click', function () {
        // this.textContent = "不正解"
        DGEBIi.textContent = fuseikai;
        DGEBIi.setAttribute('class', 'fuseikai');
    })
}

const makeSeikai = function (idName) {
    const answerEL = document.getElementById(idName)

    function answerChange =() =>{
        answerEL.textContent =
    }
    answerEL.addEventListener('click', function () {

        // this.textContent = "正解"
        DGEBIi.textContent = seikai
    })
}

makeFuseikai('answerA');
makeFuseikai('answerB');
makeSeikai('answerC')
makeFuseikai('answerD');

// a 5秒が来たら動くプログラム
setTimeout(function (){
    console.log('5秒経ちました')
}, 5000);

// b 問題文のテキストを終了に変える。指定した要素(element).textcontentでも字を変更できる
// document.getElementById('mondai').textContent='終了';

// abを組み合わせる
setTimeout(function(){
    document.getElementById('mondai').textContent=zannen;
    },5000);

// // 
// // クリックイベントが起こったときに動作する部分
// document.getElementById('answerA').addEventListener('click',function(){
//     // this.textContent = "不正解"
//     this.textContent = fuseikai;
//     this.setAttribute('class','fuseikai');
// })

// document.getElementById('answerB').addEventListener('click',function(){
//     // this.textContent = "不正解"
//     this.textContent = fuseikai
//     this.setAttribute('class','fuseikai')
// })

document.getElementById('answerC').addEventListener('click', function () {
    // this.textContent = "正解"
    this.textContent = seikai
})

// document.getElementById('answerD').addEventListener('click',function(){
//     // this.textContent = "不正解"
//     this.textContent = fuseikai
//     this.setAttribute('class','fuseikai')
// })



// p176無名関数とアロー関数
// 無名関数（function)の後に関数の名前がない
setTimeout(function () {
    console.log("こんにちわ");
}, 1000)
// アロー関数
setTimeout(() => console.log("こんにちわ"), 2000);



