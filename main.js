$(document).ready(function(){
    $("#questions").submit(function(event){
        event.preventDefault()
        $("#results").text(results)
        var question1 =parseInt($("input:radio[name=question-1]:checked").val());

    })
})