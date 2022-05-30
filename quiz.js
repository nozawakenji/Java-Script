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
