//Retrieve information from Local Storage and write to list on page load.
document.addEventListener("DOMContentLoaded", function() {

        document.getElementById("highscores").style.display = 'block';
        
        highScoreInitial = JSON.parse(localStorage.getItem("initial"));
        highScoreValue = JSON.parse(localStorage.getItem("score"));
        console.log(localStorage)
        console.log(typeof(highScoreInitial))

        if(highScoreInitial){
          for (var i = 0; i<highScoreInitial.length; i++){
            NameScore = String(highScoreInitial[i]+ " - " +highScoreValue[i]);
            highScoreLineList = document.createElement('li');
            highScoreLineList.appendChild(document.createTextNode(NameScore));
            document.getElementById("highscores").appendChild(highScoreLineList);
          };
        }

  });

  //Clear local storage and Highscore list
  function clearStorage(){
    localStorage.clear();
    document.getElementById("highscores").style.display = 'none';
  }
