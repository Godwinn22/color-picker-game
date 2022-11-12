let counter = 0;
        var btn = document.querySelector("button");
        var body = document.querySelector("body");
        var myText = document.querySelector(".text");
        var score = document.querySelector(".score");
        let myColors = ["green", "red","yellow","blue","steelblue"];
        function input() {
            return (Math.floor(Math.random()*myColors.length))
        }
        btn.addEventListener('click', function change(){
            if(myText.value === myColors[input()]){
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
