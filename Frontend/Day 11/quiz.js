const qna = document.querySelector(".QnA");
const result_box = document.querySelector(".result_box");
const options = document.querySelector(".options");
const restart_quiz = result_box.querySelector(".buttons .restart");
const bottom_ques_counter = document.querySelector(".question_no");
const result = document.querySelector(".result_box");


let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

// console.log(questions);
function showQuetions(index) {
    const que_text = document.querySelector(".question");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    options.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = options.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

showQuetions(0);
queCounter(1);

const next = document.querySelector(".next");
const submit = document.querySelector(".submit");
submit.classList.add("hide"); //hide the submit button


function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span>'+ index +' of '+ questions.length +' Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

restart_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}



next.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        if(que_numb==questions.length) {
            submit.classList.remove("hide");
            next.classList.add("hide"); //hide the next button
        }
    }
}

submit.onclick = ()=>{
    showResult(); //calling showResult function
}


let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = options.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(options.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                options.children[i].classList.add("correct"); //adding green color to matched option
                options.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        options.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
}

function showResult(){
    qna.classList.add("hide"); //hide quiz box
    result.style.visibility = "visible";  //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 0.8*questions.length){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! 😎,<p>You got '+ userScore +' out of '+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 0.3*questions.length){ // if user scored more than 1
        let scoreTag = '<span>and nice 🥳,<p>You got '+ userScore +' out of '+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry 😐,<p>You got only '+ userScore +' out of '+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}