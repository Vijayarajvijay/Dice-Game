function rolldice2()
   {
    const diceImage = document.querySelector('.dice');
    const value = document.getElementById("score2");

    const result = Math.floor(Math.random() * 6)+1;
    diceImage.src = `./Images/point${result}.png`;

    value.textContent = +value.textContent + result;

    document.getElementById("myBtn2").disabled = true;
    document.getElementById("myBtn1").disabled = false;
    document.getElementById("player").innerHTML="Player1- to play"

    if( ( +value.textContent) ==30 ||  ( value.textContent)>30)
    {
       
        document.getElementById("myBtn1").disabled = true;
        document.getElementById("myBtn2").disabled = true;
        document.getElementById("resulmain").innerHTML= "🥇 Well Done! Player1 win 🎊✨🙌" 
    }

   }
   function rolldice1()
   {
    
    const diceImage = document.querySelector('.dice');
    const value = document.getElementById("score1");

    const result = Math.floor(Math.random() * 6)+1;
    diceImage.src = `./Images/point${result}.png`;

    value.textContent = +value.textContent + result;

    document.getElementById("myBtn1").disabled = true;
    document.getElementById("myBtn2").disabled = false;

    document.getElementById("player").innerHTML="Player2- to play";

    if( ( +value.textContent) ===30 ||  ( value.textContent)>30)
    {
       
        document.getElementById("myBtn1").disabled = true;
        document.getElementById("myBtn2").disabled = true;
        document.getElementById("resulmain").innerText= "🥇 Well Done! Player1 win 🎊✨🙌"    
    }


   }

   function reset(){
    document.getElementById("myBtn1").disabled = false;
    document.getElementById("myBtn2").disabled = false;
    document.getElementById("score1").innerHTML =0;
    document.getElementById("score2").innerHTML =0;
    document.getElementById("topick").innerHTML="Let's Play Dice";

   }