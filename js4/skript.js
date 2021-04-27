quizlet = {
    question_arr: ["1) Сколько героев в доте имеют нестандартное сопротивление к магии?:","2) В честь кого или чего назван герой Lina?","3) Какое время перезарядки у Manta Style?","4) Видно ли Riki вражеской команде под эффектом Smoke of Deceit, если он стоит рядом с Sentry Ward?","5) На место какого панды перемещается Brewmaster в конце действия ульты Primal Split?","6) Сколько во второй доте героев, имена которых начинаются на  W ?","7)Можно ли сбросить перезарядку Black King Bar при помощи Refresher Orb?","8)Сколько процентов eHP дает 10 армора?","9) У какого героя в умениях есть механика магического вампиризма (spell vamp)?","10) Как повлияет попытка покупки нового Black King Bar взамен использованного?"],
    a1_arr: ["1","Lina Inverse - персонаж аниме Slayers","35 секунд","Видно","Случайного","3","Можно","60%","Techies","Предмет купится и его время перезарядки и длительность сбросится"],
    a2_arr: ["2","Lina - одноименный персонаж игры Riviera: The Promised Land","50 секунд"," Не видно"," Earth, Storm, Fire","4","Нельзя","80%","Riki"," Предмет купится, но его время перезарядки и длительность не сбросится"],
    a3_arr: ["3","Lina Mayfleet — главный персонаж романа «Город Эмбер: Побег»","35 секунд для героев ближнего боя, и 50 - дальнего","На экране видно, на миникарте иконка будет отсутствовать"," Earth, Fire, Storm","5","В первой доте нельзя, во второй - можно","100%","N'aix"," Предмет не получится купить"],
    a4_arr: ["4","Взято из китайского 丽娜, что означает «прелестный» и «элегантный» соответственно"," 25 секунд для героев ближнего боя, и 45 - дальнего","ННа экране не видно, на миникарте иконка будет присутствовать"," Storm, Earth, Fire","6","Во второй доте нельзя, в первой - можно","90%"," Invoker","Ничего не произойдет"],
    answer_arr:["2","Lina Inverse - персонаж аниме Slayers","35 секунд для героев ближнего боя, и 50 - дальнего","Не видно"," Earth, Fire, Storm","6","В первой доте нельзя, во второй - можно","60%","N'aix"," Предмет купится, но его время перезарядки и длительность не сбросится"],
    n_right_answer_arr:[2, 1, 3, 2, 3, 4, 3, 1, 3, 2]
}
let n_answer = 9;
let right_answers = 0;
console.log(quizlet);
answers (n_question.value);
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
function f_out (){
    console.log(y1.checked);
    console.log(y2.checked);
    console.log(y3.checked);
    if (y1.checked){ n_a = 1;}
    if (y2.checked){ n_a = 2;}
    if (y3.checked){ n_a = 3;}
    if (y4.checked){ n_a = 4;}
    console.log(n_a);
    if (n_a == n_right_answer){
        right_answers += 1;
        answer.classList.add("hidden");
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = "+n_question.value);
        console.log("n_answer = "+n_answer);
        console.log("right_answ = "+right_answers);
        if (n_question.value == n_answer){
            btn.classList.add("hidden");
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b> Количество правильных ответов:  " +right_answers+"</b>";
            right_div.appendChild(el1);
            resa.classList.remove("hidden");
        }
    }else{
        right_answers-=1;
        right_div.classList.add("hidden");
        wrong_div.classList.remove("hidden");
    }
}
function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
}
function f_out2 (){
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k+=1;
    answers(k);
}
function answers(k) {
    n_question.value = k;
    question.innerHTML=quizlet.question_arr[n_question.value];
    a1.innerHTML = quizlet.a1_arr[n_question.value];
    a2.innerHTML = quizlet.a2_arr[n_question.value];
    a3.innerHTML = quizlet.a3_arr[n_question.value];
    a4.innerHTML = quizlet.a4_arr[n_question.value];
    answer.innerHTML = quizlet.answer_arr[n_question.value];
    n_right_answer = quizlet.n_right_answer_arr[n_question.value];
}
