var database = [
    {
        username: "Israel",
        password: "123456789",
    },
    {
        username: "Emmanuel",
        password: "123456789"
    },
    {
        username: "Jacob",
        password: "123456789"
    },
    {
        username: "Miles",
        password: "123456789"
    },
    {
        username: "Gloria",
        password: "123456789"
    },
    {
        username: "A124",
        password: "1234567890"
    },
    {
        username: "Emmanuel",
        password: "1234567890"
    }
];
var newsfeed = [
    {
        username : "Ijeoma" ,
        newsfed :  "Today is the best day ever!!!"
    },
    {
        username : "Maxim" ,
        newsfed :  "Mining cryptocurrencies rewards in a whole lot of cash"
    }
];
var userNameInput = document.getElementById('input1');
var passwordInput = document.getElementById('input2');
// var clickMe = document.getElementById('submit');
function isUserValid(){
    for (var i = 0; i < database.length; i++){
        if (database[i].username === userNameInput.value && database[i].password === passwordInput.value)
        {
            return true};
        }
        return false;
    };
    function signIn(username, password){
        for (let i = 0; i < newsfeed.length; i++) {
        if(isUserValid(username, password) === true){
        alert('Welcome ' + username.value + "\n"+'Your Timeline reads: \n'+newsfeed[i].username + ' : ' +newsfeed[i].newsfed);
    
    }else{
        alert("Sorry, Incorrect username or password")
    break;}
        }
    };
                   

// var usernamePrompt = prompt("What is your username?");
// var passwordPrompt = prompt("What is your password?");
// var checksign = [
//     timeline = "",
//     wronginfo = ""
// ];
// for (i = 0; i < database.length; i++ )
//      {
//         if(usernamePrompt === database[i].username && 
//             passwordPrompt === database[i].password)
//             {
//                checksign.timeline =newsfeed[0,1].newsfed 
//             break;}
//             else{
//                 wronginfo ="Invalid username or password!"
//             }
// };
// console.log( checksign.timeline, checksign.wronginfo);