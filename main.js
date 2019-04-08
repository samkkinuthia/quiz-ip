$(document).ready(function(){
    $("#questions").submit 
        $("#results").text(answer)
        var question1 =parseInt($("input:radio[name=question1]:checked").val());
        var question2 =parseInt($("input:radio[name=question2]:checked").val());
        var question3 =parseInt($("input:radio[name=question3]:checked").val());
        var question4 =parseInt($("input:radio[name=question4]:checked").val());
        var question5 =parseInt($("input:radio[name=question5]:checked").val());



        var answer = question1 + question2 + question3 + question4 + question5

        if(answer>80){
        $("#results").text ("GREAT JOB!"+answer)
        }
        else if (answer>=60){
            $("#results").text("Above average. Good try" + answer)

        }
        else{
            $("#results").text("Below average. please try again" + answer)
        }
    



    })
