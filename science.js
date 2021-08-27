$(document).ready(function(){
 var allQuestions = [{
    question: "What is the study of mycology?",
    options: ["The study of human development", "The study of cells", "The study of fungi"],
    answer: 2
  }, {
    question: "Which of the following nitrogen base is not found in DNA?",
    options: ["Cytosine", "Uracil", "Adenine"],
    answer: 1
  }, {
    question: "The four basic needs of living things are____?",
    options: ["Food, Water, Habitat, Space", "Food, Clothing, Shelter, Love", "Air, Water, Food, Habitat"],
    answer: 2
  },{
    question: "The place where the animal naturally lives in is known as ____?",
    options: ["Habitat", "Niche", "Ecosystem"],
    answer: 0
  }, {
    question: "What is the basic requirement of an organism to stay alive?",
    options: ["Love", "Habitat", "Energy"],
    answer: 1
  },{
    question: "What do you call the reduction of activity by animals during summer?",
    options: ["Hibernation", "Estivation", "Mutation"],
    answer: 1
  },{
    question: "Which of the following is a food chain?",
    options: ["Snake > Rat > Grass", "Eagle > Snake > Frog", "Plant > Rat > Hawk"],
    answer: 2
  },{
    question: "Which level of biological organization includes all the others listed?",
    options: ["Ecosystem", "Community", "Biome"],
    answer: 2
  },{
    question: "A chicken ate a worm that ate the leaves of a plant. A snake ate the chicken. What is the chicken called?",
    options: ["Primary consumer", "Secondary consumer", "Tertiary consumer"],
    answer: 1
  },{
    question: "Organism keep their internal conditions relatively stable through _____?",
    options: ["Homeostatis", "Metabolism", "Reproduction"],
    answer: 0
    },
    // {
    // question: "What is the most common blood type?",
    // options: ["O-Negative", "A-Positive", "O-Positive"],
    // answer: 3
    // },{
    // question: "How many chromosomes are found in human somatic cells?",
    // options: ["33", "46", "48"],
    // answer: 2
    // },{
    // question: "How many muscles are in the human body?",
    // options: ["530", "640", "760"],
    // answer: 2
    // },{
    // question: "What is the strongest muscle in the human body?",
    // options: ["The masseter", "The tounge", "The quadriceps"],
    // answer: 1
    // },{
    // question: "Approximately, how much does the human heart weight?",
    // options: ["200 grams", "300 grams", "400 grams"],
    // answer: 2
    // },{
    // question: "What part of the body is affected by orchitis?",
    // options: ["The breasts", "The ovaries", "The testicles"],
    // answer: 3
    // },{
    // question: "What cells are responsible for protecting us from infections?",
    // options: ["Leukocytes", "Red blood cells", "Lysosomes"],
    // answer: 1
    // },{
    // question: "What ocular abnormality is commonly known as “Visual fatigue”?",
    // options: ["Cataracts", "Glaucoma", "Presbyopia"],
    // answer: 3
    // },{
    // question: "How many vertebrae does an adult body have?",
    // options: ["24", "33", "37"],
    // answer: 2
    // },{
    // question: "What illness can Vitamin D deficiency cause?",
    // options: ["Anemia", "Scurvy", "Rickets"],
    // answer: 3
    // }
  ];

var shuffleQuestion = allQuestions.sort(()=> Math.random()-.5); 
console.log(shuffleQuestion);



var currentQuestion = 0;
var score = 0;
var timer = 21;
$("#b").hide();
$(".correctAnswerdiv").hide();
$(".chooseACagory").hide();
$(".youChooseContainer").hide();

setInterval(function(){
  
  timer--;
  $("#timer").text(timer)
  if(timer == 0){ 
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
      currentQuestion++;
    
    timer = 21;
    $("#count").text(currentQuestion+1);
    $("#score").text(score);
    loadQuestion(currentQuestion);
  
    }
    var answer = selectedOption.value;
    if(shuffleQuestion[currentQuestion].answer == answer){
      score += 1;
      
    }
    
    selectedOption.checked = false;
    currentQuestion++;
    
    $("#score").text(score);
    timer = 21;
    $("#count").text(currentQuestion+1);
    if(currentQuestion == 9){
      $("#nextbtn").text("finish");
      
    }
    if(currentQuestion == 10){
      $("#questionRow").hide();
      $("#a").hide();
      $("#b").show()
      
    }
    loadQuestion(currentQuestion);

    
    

  }
}, 1000);

function loadCorrectAnswer(questionIndex){
  var q = shuffleQuestion[questionIndex];
  $("#correctQuestion").text(q.question);
  $("#correctAnswer").text(q.options[q.answer]);
}

function loadQuestion(questionIndex){
  var q = shuffleQuestion[questionIndex];
  $("#question").text(q.question);
  $("#opt1").text(q.options[0]);
  $("#opt2").text(q.options[1]);
  $("#opt3").text(q.options[2]);

}
$("#nextbtn").click(function(){
  console.log(currentQuestion);
  var selectedOption = document.querySelector('input[type=radio]:checked');
  if(!selectedOption){
    alert("please select your answer!");

  }
  var answer = selectedOption.value;
  if(shuffleQuestion[currentQuestion].answer == answer){
    score += 1;
    
  }
  
  selectedOption.checked = false;
  currentQuestion++;
  
  $("#score").text(score);
  timer = 21;
  $("#count").text(currentQuestion+1);
  if(currentQuestion == 9){
    $("#nextbtn").text("finish");
    
  }
  if(currentQuestion == 10){
    $("#questionRow").hide();
    $("#a").hide();
    $("#b").show()
    
  }
  loadQuestion(currentQuestion);

});



$("#retry").click(function(){
  currentQuestion = 0;
  score = 0;
  timer = 21;
  shuffleQuestion = allQuestions.sort(()=> Math.random()-.5); 
  $("#b").hide();
  $("#nextbtn").text("Next question");
  $("#count").text(1);
  $("#questionRow").show();
  $("#a").show();



});

$("#seeCorrectAnswer").click(function(){
  currentQuestion = 0;
  $("#b").hide();
  $(".correctAnswerdiv").show();
   
  
});
$("#chooseAnotherCategory").click(function(){
  $("#b").hide();
  $(".chooseACagory").show();

});

$("#next").click(function(){
  console.log(currentQuestion)
  
  loadCorrectAnswer(currentQuestion);
  currentQuestion++;
  
  if(currentQuestion == 9){
    $("#next").text("finish");
    
  }
  if(currentQuestion == 10){  
    $(".correctAnswerdiv").hide();
    $("#b").show();
    
  }
  loadCorrectAnswer(currentQuestion);
  

});

  $("#ready").click(function(){
        window.location = "literature.html";
    });
    $("#ready1").click(function(){
        window.location = "science.html";
    });

    $("#ready2").click(function(){
        window.location = "history.html";
    });


$("#literature").click(function(){
  $(this).hide();
  $("#cat").hide();
  $("#science").hide();
  $("#history").hide();
  $(".youChooseContainer").show();
  $("#scienceCon").hide();
  $("#historyCon").hide();
  

});
$("#science").click(function(){
  $(this).hide();
  $("#cat").hide();
  $("#literature").hide();
  $("#history").hide();
  $(".youChooseContainer").show();
  $("#literatureCon").hide();
  $("#historyCon").hide();
  

  
});
$("#history").click(function(){
  $(this).hide();
  $("#cat").hide();
  $("#literature").hide();
  $("#science").hide();
  $(".youChooseContainer").show();
  $("#literatureCon").hide();
  $("#scienceCon").hide();
  
});


loadCorrectAnswer(currentQuestion);
loadQuestion(currentQuestion);



});



