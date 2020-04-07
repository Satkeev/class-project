var responce = prompt('Do you prefer Kyrgyz nature, Kyrgyz food, Kyrgyz tour or Everything?');
var item;
  if (responce ==='Kyrgyz nature'){
    item = '<img src=love Kyrgyz nature';
} else if (responce === 'Kyrgyz food'){
    item = 'Kyrgyz food the best!';
} else if (responce === 'Kyrgyz tour'){
    item = 'Fantastic tours';
} else if (responce === 'Everything'){
    item = 'Welcome to Kyrgyzstan!';
} else {
    item = 'Ok, Kyrgyzstan wait you';
    }

document.write('<p>' + item + '</p>');
 

