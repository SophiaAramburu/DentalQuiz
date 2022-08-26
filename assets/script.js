alert("Press OK to start this quiz! You'll have one minute to answer all of the questions");
var timeH = document.querySelector("h1");
var timeSecond = 60;

timeH.innerHTML = timeSecond;
timeH.innerHTML = `00:${timeSecond}`;

var countDown = setInterval (()=>{
timeSecond--;
timeH.innerHTML = `00:${timeSecond}`;
if(timeSecond <= 0 || timeSecond < 1){
    clearInterval(countDown);
}

},1000)

// Questions that will be asked
var Questions = [{
        id: 0,
        q: "What are the steps for a filling?",
        a: [{ text: "etch, fill, bond, cure", isCorrect: false },
            { text: "fill, bond, cure, etch", isCorrect: false },
            { text: "etch, bond, fill, cure", isCorrect: true },
            { text: "bond, cure, etch, fill", isCorrect: false }
        ]
  
    },
    {
        id: 1,
        q: "How many teeth do adults have?",
        a: [{ text: "2", isCorrect: false, isSelected: false },
            { text: "26", isCorrect: false },
            { text: "30", isCorrect: false },
            { text: "32", isCorrect: true }
        ]
  
    },
    {
        id: 2,
        q: "How many teeth do children have by age 3?",
        a: [{ text: "5", isCorrect: false },
            { text: "9", isCorrect: false },
            { text: "20", isCorrect: true },
            { text: "25", isCorrect: false }
        ]
    }
]
// Set start
var start = true;
  
// Iterate
function iterate(id) {
  
    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
  
    // Getting the question
    var question = document.getElementById("question");
  
  
    // Setting the question text
    question.innerText = Questions[id].q;
  
    // Getting the options
    var op1 = document.getElementById('op1');
    var op2 = document.getElementById('op2');
    var op3 = document.getElementById('op3');
    var op4 = document.getElementById('op4');
  
  
    // option text 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
  
    // true or false value to options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";
  
    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "#d9ead3";
        op2.style.backgroundColor = "#cfe2f3";
        op3.style.backgroundColor = "#cfe2f3";
        op4.style.backgroundColor = "#cfe2f3";
        selected = op1.value;
    })
  
    // selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "#cfe2f3"; //light blue
        op2.style.backgroundColor = "#d9ead3"; //light green
        op3.style.backgroundColor = "#cfe2f3"; //light blue
        op4.style.backgroundColor = "#cfe2f3"; //light blue
        selected = op2.value;
    })
  
    // selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "#cfe2f3"; //light blue
        op2.style.backgroundColor = "#cfe2f3"; //light blue
        op3.style.backgroundColor = "#d9ead3"; //light green
        op4.style.backgroundColor = "#cfe2f3"; //light blue
        selected = op3.value;
    })
  
    // selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "#cfe2f3"; //light blue
        op2.style.backgroundColor = "#cfe2f3"; //light blue
        op3.style.backgroundColor = "#cfe2f3"; //light blue
        op4.style.backgroundColor = "#d9ead3"; //light green
        selected = op4.value;
    })
  
    // getting the evaluate button
    var evaluate = document.getElementsByClassName("evaluate");
  
    // Evaluate 
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}
  
if (start) {
    iterate("0");
}
// Next button and method
var next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }
  
})