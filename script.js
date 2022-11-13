        let counter = 0;
        var btn = document.querySelector("button");
        var list = document.querySelector(".list");
        var body = document.querySelector("body");
        var myText = document.querySelector(".text");
        var score = document.querySelector(".score");
        // body.style.backgroundColor = "Green";
        const myColors = ["green","red","yellow","purple","blue"];
        function input() {
            return (Math.floor(Math.random()*myColors.length))
        }
        btn.addEventListener('click', function okay(){
            if(myText.value === myColors[input()] ){
                alert("You guessed right!!!😍👍✔ \nThanks for Playing😊👏");
                body.style.backgroundColor = myText.value;
                myText.value = "";
                counter++;
                score.innerHTML = counter;
            } else {
                alert ("Your guess was Wrong!😥✖");
                body.style.backgroundColor = "red";
                myText.value = "";
                score.innerHTML = counter;
            }
        });
