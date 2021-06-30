const qna = document.querySelector(".QnA");
const result_box = document.querySelector(".result_box");
const options = document.querySelector(".options");
const restart_quiz = result_box.querySelector(".buttons .restart");
const bottom_ques_counter = document.querySelector(".question_no");
const result = document.querySelector(".result_box");


let que_count = 0;
let que_numb = 1;
let userScore = 0;

class showQuetions {
    constructor(index) {
        this.que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
        function create(i){
        let div = document.createElement("div");
        div.classList.add('option');
        let span = document.createElement("span");
        span.innerHTML=questions[index].options[i];
        div.appendChild(span);
        return div;
        }
        let option_tag1 = create(0);
        let option_tag2 = create(1);
        let option_tag3 = create(2);
        let option_tag4 = create(3);
        this.option_tag = [option_tag1,option_tag2,option_tag3,option_tag4];
    }
}


function insertquestion(index) {
    que_text = document.querySelector(".question");
    que_text.innerHTML = obj[index].que_tag;
    if(options.hasChildNodes()){
        for(let i=0;i<4;i++)
            options.removeChild(options.childNodes[0]);
    }
    for(let i=0;i<4;i++)
        options.appendChild(obj[index].option_tag[i]);
    const option = options.querySelectorAll(".option");


    for(let i=0; i < option.length; i++){
        option[i].setAttribute('onclick','optionSelected(this,obj['+index+'].option_tag['+i+'])');
    }
}

let obj=[];
for(let i=0;i<questions.length;i++) {
    obj[i] = new showQuetions(i);
}

insertquestion(0);
queCounter(1);

const next = document.querySelector(".next");
const back = document.querySelector(".back");
const submit = document.querySelector(".submit");
submit.classList.add("hide");
back.classList.add("hide");


function queCounter(index){
    let totalQueCounTag = '<span>'+ index +' of '+ questions.length +' Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}

restart_quiz.onclick = ()=>{
    window.location.reload();
}

next.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        insertquestion(que_count);
        queCounter(que_numb);
        if(que_numb==questions.length) {
            submit.classList.remove("hide");
            next.classList.add("hide");
        }
        if(que_numb==2)
            back.classList.remove("hide");
    }
}

submit.onclick = ()=>{
    showResult();
}

back.onclick = ()=>{
    if(que_count > 0){
        que_count--;
        que_numb--;
        insertquestion(que_count);
        queCounter(que_numb);
        if(que_numb < questions.length) {
            submit.classList.add("hide");
            next.classList.remove("hide");
        }
    }
    if(que_numb==1)
        back.classList.add("hide");
}

// let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
// let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer,div){
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer;
    const allOptions = options.children.length;
    
    if(userAns == correcAns){
        div.classList.add("correct");
        userScore += 1;
        answer.classList.add("correct");
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        div.classList.add("incorrect");
        answer.classList.add("incorrect");
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(options.children[i].textContent == correcAns){
                div.classList.add("correct");
                options.children[i].classList.add("correct");
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        options.children[i].classList.add("disabled");
    }
}

function showResult(){
    qna.classList.add("hide");
    result.style.visibility = "visible";
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 0.8*questions.length){
        let scoreTag = '<span>and congrats! 😎,<p>You got '+ userScore +' out of '+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 0.3*questions.length){
        let scoreTag = '<span>and nice 🥳,<p>You got '+ userScore +' out of '+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry 😐,<p>You got only '+ userScore +' out of '+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}