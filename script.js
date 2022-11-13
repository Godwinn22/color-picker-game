let counter = 0;
        var btn = document.querySelector("button");
        var body = document.querySelector("body");
        var myText = document.querySelector(".text");
        var score = document.querySelector(".score");
        // body.style.backgroundColor = "Green";
        let myColors = ["Green","Red","Yellow","Purple","Blue"];
        function input() {
            return (Math.floor(Math.random()*myColors.length))
        }
        btn.addEventListener('click', function change(){
            myText1 = myText.value;
            myText2 = myText1.charAt(0).toUpperCase() + myText1.slice(1);
            if(myText2 === myColors[input()]){
                alert("You guessed right!!!😍👍✔ \nThanks for Playing😊👏");
                body.style.backgroundColor = myText.value;
                myText.value = "";
                counter++;
                score.innerHTML = counter;
            } else {
                alert ("Your guess was Wrong!😥✖ ");
                body.style.backgroundColor = "white";
                myText.value = "";
                score.innerHTML = counter;
            }
           
        });
