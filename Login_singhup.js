

const fs=require("fs");
const readline=require("readline-sync");
function strongpassword(password){
    if ((password.length)>=6 && (password.length)<16){
        length=/^[/S/s]{6,16}$/ , upper=/[A-Z]/,lower=/[a-z]/,num=/[0-9]/ ,special=/[@#$&.*]/
        if (length.test(password),upper.test(password),lower.test(password),num.test(password),special.test(password)){
            console.log("it's a strong password")
        }
        else{
            console.log("it's not a strong password:)")
        }
    }
    else{
        console.log("password must be greater than characters,try to make it strong?")
    }

}function cheackpassword(password,password2){
    if(password==password2){
        console.log("your password is created:)")
    }
    else{
        console.log("both passwords are not matched..try again please")        
    }

}console.log("Welcome to Login & Signup page");
var  loginSignup=readline.question("do you want login/signup:");
var file=fs.existsSync("top.json");
if (file==false){
    if (loginSignup=="signup"){
        let userName=readline.question("please enter user name:");
        let password=readline.question("enter your password please:");
        strongpassword(password);
        let password2=readline.question("confirm your passwords:");
        cheackpassword(password,password2);
        console.log("congrats",userName,"you are Signed  up Successful.");
        let description=readline.question("Information about you :") ;
        let date_of_birth=readline.question("enter your date of birth : ");
        let hobbies=readline.question("enter your hobies : ");
        let gender=readline.question("enter your gender (male or female) :");
        let mylist=[];
        let dic={};
        let your_data={};
        let list1=["username","password","description","dob","hobbies","gender"];
        let list2=[userName,password2,description,date_of_birth,hobbies,gender];
        for (let i=0; i<list1.length;i++){
            your_data[list1[i]]=list2[i]
        }
        dic[password2]=your_data
        mylist.push(dic)
        fs.writeFileSync("sanjana.json",JSON.stringify(mylist,null,5))}
}else if (file==true){
    if (loginSignup=="signup"){
        let userName=readline.question("enter your user name :");
        let password=readline.question("enter your password:");
        strongpassword(password);
        let password2=readline.question("confirm your password:");
        cheackpassword(password,password2);
        m=fs.readFileSync("sanjana.json","utf8")
        data=JSON.parse(m)
        if(m.includes(userName && password)){
            console.log("this account is already exits")
        }else{
            console.log("congrats",userName,"you are signed successfully");
            let description=readline.question("information about you:");
            let date_of_birth=readline.question("enter your date of birthday:");
            let hobbies=readline.question("enter your hobbies:");
            let gender=readline.question("enter your gender (male/female):");
            let user_data={};
            let dict={};
            list1=["username","password","description","dob","hobbies","gender"];
            list2=[userName,password2,description,date_of_birth,hobbies,gender];
            for (let i=0; i<list1.length;i++){
                user_data[list1[i]]=list2[i]
            }
            f=fs.readFileSync("top.json","utf8")
            data=JSON.parse(f);
            dict[password2]=user_data;
            data.push(user_data);
            fs.writeFileSync("top.json",JSON.stringify(data,null,5));
        }
    }else if (loginSignup="login"){
        let loginName=readline.question("enter your login name/user name :");
        let loginPassword=readline.question("enter your login password/user password :");
        b=fs.readFileSync("top.json","utf8");
        data1=JSON.parse(k);
        if (b.includes(loginPassword,loginName)){
            console.log("your account login succesfully"); 
        }else if(!b.includes(loginPassword && loginName)) {
            console.log("your user name & password is wrong");
        }else if(!b.includes(loginName)) {
            console.log("your user name is wrong");
        }else if(!b.includes(loginPassword)) {
            console.log("your password is wrong");
        }else{
            console.log("account is not exists.");
        }   
    }
}