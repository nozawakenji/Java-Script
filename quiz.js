let count = 0

document.getElementById('ans1').addEventListener('click', function () {
    // this.style.color = "blue"
    // this.style.fontSize = "100px"
    this.textContent = "✖"
    this.setAttribute('class','fuseikai')
    console.log(count)
    count = count + 1
    if (count % 2 === 0) {
      this.style.fontSize = "50px"
        this.textContent = "違うよ"
        
    }
})
let count1 = 0

document.getElementById('ans2').addEventListener('click', function () {
    this.style.color = "green"
    this.style.fontSize = "100px"
    this.textContent = "〇"
    console.log(count)
    count1 = count1 + 1
    if (count1 % 2 === 0) {
        this.style.fontSize = "150px"
        this.textContent = "正解"
    }
})

let count2 = 0
document.getElementById('ans3').addEventListener('click', function () {
    this.style.color = "red"
    this.style.fontSize = "100px"
    this.textContent = "✖"
    count2 = count2 + 1
    if (count2 % 2 === 0) {
        this.style.fontSize = "150px"
        this.textContent = "🐓"
    }
})

let count3 = 0
document.getElementById('ans4').addEventListener('click', function () {
    this.style.color = "yellow"
    this.style.fontSize = "100px"
    this.textContent = "✖"
    count3 = count3 + 1
    if (count3 % 2 === 0) {
        this.style.fontSize = "150px"
        this.textContent = "🐸"
    }
})

// 最初から動作する部分

// 選択肢の配列
const answers = ['富士山','剣岳','北岳','高山'];

// 選択肢のIDの配列
const answerIDs = ['answerA','answerB','answerC','answerD'];

for (let i=0; i<4; i++){
    document.getElementById(answerIDs[i]).textContent = answers[i]
}




const seikai = "〇正解"
const fuseikai = "×不正解"

// クリックイベントが起こったときに動作する部分
document.getElementById('answerA').addEventListener('click',function(){
    // this.textContent = "不正解"
    this.textContent = fuseikai;
    this.setAttribute('class','fuseikai');
})

document.getElementById('answerB').addEventListener('click',function(){
    // this.textContent = "不正解"
    this.textContent = fuseikai
    this.setAttribute('class','fuseikai')
})

document.getElementById('answerC').addEventListener('click',function(){
    // this.textContent = "正解"
    this.textContent = seikai
})

document.getElementById('answerD').addEventListener('click',function(){
    // this.textContent = "不正解"
    this.textContent = fuseikai
    this.setAttribute('class','fuseikai')
})


        
    </script>
    
</body>
</html>