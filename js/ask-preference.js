var responce = prompt('Do you prefer Kyrgyz nature, Kyrgyz food, Kyrgyz tour or Everything?');
var message;

if (responce ==='Kyrgyz nature'){
    message = 'I love Kyrgyz nature';
} else if (responce === 'Kyrgyz food'){
    message = 'Kyrgyz food the best!';
} else if (responce === 'Kyrgyz tour'){
    message = 'Fantastic tours';
} else if (responce === 'Everything'){
    message = 'Welcome to Kyrgyzstan!';
} else {
    message = 'Ok, Kyrgyzstan wait you';
    }

document.write('<h3>' + message + '<h3>');


