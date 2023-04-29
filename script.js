
// const checkBtn = document.querySelector("button")
const input = document.querySelector("input")
let text = document.querySelector("div")
text = text.innerText


//////gtnum e barn u replace anum
// checkBtn.onclick = () => {
//     text = text.replace(/\d+-\d+-\d+\s/gi, (word) => {
//         return input.value
//     })
//     document.write(text)
// }


// checkBtn.onclick = () => {
//     let val = input.value
//     let splitedText = text.split(" ")
//     splitedText.forEach((word) => {
//         if (word.includes(val)) {
//         alert(word)

//         }


//     })
//     // console.log(splitedText);
// }



addEventListener("input", (event) => {
    let val = input.value
    let splited = text.split(" ")
    splited.forEach((word) => {

        let matched = word.match(/\w+/)
        input.value.trim()
        if (val === word) {
           alert("Match!")
           let span = document.createElement("span")
           input.value = ""
        //else-ov kaxum a
        }
        //  if(val !== word) {
        //     alert("Does not match!")
        // }

    })
})