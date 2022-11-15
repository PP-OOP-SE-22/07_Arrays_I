"use strict";

/* Die Satzbau-Maschine | Arrays */



/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
output(getSentence("ich","bin","der","coole","Max","Mütze"));
output(getSentence("ich","bin","die","coole","Maxine","Mützerich"));

function getSentence(word1,word2,word3,word4,word5,word6) {

    const gab = " ";
    const dot = ".";
      let str =  word1 + gab +
                 word2 + gab +
                 word3 + gab +
                 word4 + gab +
                 word5 + gab +
                 word6 + dot;
    
    return str;
}


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


