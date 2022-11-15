"use strict";

/* Die Satzbau-Maschine | Arrays */



/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
output(getSentence("ich","bin","Max","Mütze"));
function getSentence(word1,word2,word3,word4) {

    const gab = " ";
    const dot = ".";
      let str =  word1 + gab +
                 word2 + gab +
                 word3 + gab +
                 word4 + dot;
    
    return str;
}


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


