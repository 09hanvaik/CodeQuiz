//Retrieve information from Local Storage and write to list on page load.
document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("highscores").style.display = 'block';
        highScoreInitial = localStorage.getItem("initial");
        highScoreValue = localStorage.getItem("score");
        NameScore = String(highScoreInitial+ " - " +highScoreValue);
        highScoreLineList = document.createElement('li');
        highScoreLineList.appendChild(document.createTextNode(NameScore));
        document.getElementById("highscores").appendChild(highScoreLineList)

  });

  //Clear local storage and Highscore list
  function clearStorage(){
    localStorage.clear();
    document.getElementById("highscores").style.display = 'none';
  }
