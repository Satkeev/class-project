function askName(){
    var userName = prompt('What is your name?')
        return document.write('<h3>' + 'Hello,' + userName + '<h3>');
    }
function askPreference(){
        var preference = prompt('Do you prefer Kyrgyz nature, Kyrgyz food, Kyrgyz tour or Everything?');
            return document.write('<h3>'  + preference + '</h3>');
        } 
function Greetings(){
        var greeting;
        var today = new Date();
    var hourNow = today.getHours();
        if (hourNow > 18) {
    greeting = 'Good evening!';
    } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
    greeting = 'Good morning!'; 
    } else {
    greeting = 'Welcome!';
}
        return document.write('<h3>' + greeting + '</h3>');

}