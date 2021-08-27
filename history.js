$(document).ready(function(){
var allQuestions = [{
    question: "Which of Edgar Allen Poe�s short stories occurs in a torture chamber during the Spanish inquisition?",
    options: ["The Pit and Pendulum", "The Mask of the Red Death", 
    "The Gold-Bug"],
    answer: 0
  }, {
    question: "Who wrote Pulitzer prize-winning novel �The God Earth�, a novel about the fortunes of a Chinese man and his family?",
    options: ["Margaret Ayer Barnes", "Oliver Lafarge", "Pearl S. Buck"],
    answer: 2
  }, {
    question: "What pseudonym did popular children�s author Enid Blyton use?",
    options: ["Mary Pollock", "Richard Bachman", "Mary Westmacott"],
    answer: 0
  },{
    question: "What is the name of Hercule Poirot�s righthand man?",
    options: ["Watson", "Hastings", "Lam"],
    answer: 1
  }, {
    question: "Which of the following was not written by Robert Louis Stevenson?",
    options: [" A Child Garden of Verses", "Catriona", "Robinson Crusoe"],
    answer: 2
  },{
    question: "Aside from �The 4-Hour Work Week� and �The 4-Hour Body�, what other book did Tim Ferris pen?",
    options: ["�The 4-Hour Man�", "�The 4-Hour Chef�", "�The 4-Hour Traveler�"],
    answer: 1
  },{
    question: "Which was Shakespeare�s shortest play?",
    options: ["Midsummer Night�s Dream", "As You Like It", "Comedy of Errors"],
    answer: 2
  },{
    question: "Best-selling book �The Secret� was written by Rhonda Byrne who hails from which Country?",
    options: ["Canada", "Australia", "Ireland"],
    answer: 1
  },{
    question: "Who wrote the novel �The Running Man�?",
    options: ["Richard Bachman", "Peter Straub", "Nancy A. Collins"],
    answer: 0
  },{
    question: "Ian Fleming wrote about which charismatic charmer?",
    options: ["Fitzwilliam Darcy", "Rhett Butler", "James Bond"],
    answer: 2
     },
    //  {
    // question: "Who is the protagonist in George Orwell�s disturbing dystopian novel �1984�?",
    // options: ["Winston Smith", "Julia", "Emmanuel Goldstein"],
    // answer: 0
    // },{
    // question: "Which children�s author created the character of Jemima Puddle-Duck?",
    // options: ["Beatrix Potter", "Judy Blume", "Margaret Mahy"],
    // answer: 0
    // },{
    // question: "Who wrote �The Hunger Games� series?",
    // options: ["Stephenie Meyer", "Suzanne Collins", "E. L. James"],
    // answer: 1
    // },{
    // question: "In the Harry Potter books, which school house is represented by a badger?",
    // options: ["Ravenclaw", "Gryffindor", "Hufflepuff"],
    // answer: 2
    // },{
    // question: "Which was Stephen Fry�s first autobiography?",
    // options: ["The Fry Choronicles", "Moab Is My Washpot", "More Fool Me"],
    // answer: 1
    // },{
    // question: "Which of Dr. Seuss� characters is known for being environmentally-minded?",
    // options: ["The Grinch", "The Lorax", "The Cat in the Hat"],
    // answer: 1
    // },{
    // question: "Which of the following is an annual award given for best science fiction or fantasy word?",
    // options: [" The Edgar Allen Poe Award", "The Hugo Award", "The Agatha Award"],
    // answer: 1
    // },{
    // question: "In the poem �The Walrus and the Carpenter� what did the two of them eat the Oysters with?",
    // options: ["Crackers and Cheese", "Bread and Butter", "French Bread and Champagne"],
    // answer: 1
    // },{
    // question: "In the novel �Duma Key�, what is Reba?",
    // options: ["A boat", "A doll", "A dog"],
    // answer: 1
    // },{
    // question: "Which author wrote these words: �Not all those who wander are lost�?",
    // options: ["Mark Twain", "Oscar Wilde", "J. R. R Tolkein"],
    // answer: 2
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



