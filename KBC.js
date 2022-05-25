question_list=[
    "(1.q)how many continents are there",
    "(2.q)what is the capital of india",
    "(3.q)NG mai kon se course padhaya jata hai",
   
   
]
option_list=[
    ["four","nine","seven","eight"],
    ["chandigarh","bhopal","chennai","delhi"],
    ["software engineering","counseling","tourism","agriculture"],

  
]
solution_list=[3,4,1,3,1]
answer_list=[
    ["1.four","3.seven"],
    ["2.bhopal","4.delhi"],
    ["1.software engineering","4.agriculture"]

]
function kbc_game(){
    console.log("*welcome to kbc game* ")
    var i=0;
    var s=0;
    var count=0;
    while (i<question_list.length){
        console.log(question_list[i])
        var j=0;
        var k=1;
        while (j<option_list[i].length){
            console.log(k,option_list[i][j])
            k=k+1
            j=j+1
        }var num=require("readline-sync");
        var num1=num.question("do you want 50 50 lifeline ? ")
        if (num1=="yes"){
             console.log("....50 50 lifeline....")
            if (count<1){
                console.log(answer_list[i][0])
                console.log(answer_list[i][1])
                var num2=num.questionInt("enter the answer");
                if (num2==solution_list[i]){
                    s=s+10000
                    console.log("your answer is creacet:")
                    console.log("*...you are win RS/",s)
                }
                else{
                     console.log("your answr are increat")
                     break 
                }
                count=count+1               
            }
            else{
                console.log("allready you use 50 50 lifeline")
                var m=num.questionInt("enter the your answer:  ")
                if (m==solution_list[i]){
                    console.log("your answer are right")
                    s=s+1000
                    console.log("u win",s)
                }
                else{
                    console.log("ur answer is wrong")
                    console.log("u can play again")
                    console.log("u win",s)
                    break
                }
            }
        }
        else{
            var num3=num.questionInt("enter the your answer");
            if (num3==solution_list[i]){
                console.log("right answer")
                s=s+100000
                console.log("you are win Rs/",s)
                console.log("congre")
            }
            else{
                console.log("no chance")
                console.log("ur answer is wrong")
            }
        }
        i++
    }
}
kbc_game()
