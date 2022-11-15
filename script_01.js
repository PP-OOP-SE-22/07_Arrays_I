"use strict";

/* Die Satzbau-Maschine | Arrays */

/*** 02. Theorie: Array ****/ 


// let arr;
// arr = new Array(); // Konstruktor

// arr = []; // Literal
// arr = [2,7,11,4];  // 4 Elemente
// arr = [false,true,false];
// arr = ["ich","bin","Max","Mütze"];


// output(arr);
// output(arr.length)  // Anzahl der Elemente
// output(arr[0]);  // Index 0 (1. Pos. im Array)
// output(arr[3]); // konkret
// output(arr[arr.length-1]); // letzte Pos. / allgemein


/*************************************************/

            // () --> Parameter, Tests
            // {} --> Codeblöcke
            // [] --> Arrays, Index

/*************************************************/


/** 02a. Theorie: Schleifen (for-Schleife) ***/

/* for-Schleifen als allg. Wiederholungs-Struktur */

// for (let i = 0; i < 10; i++) // Inkrement
// {
//     output("index i:" + i);
// }

// Dekrement

// for (let i = 10; i < 0; i--)
// {
//     output("index i:" + i);
// }

/****** 02b. for-Schleife für Arry-Index (Iteration)***/
let arr = ["ich","bin","die","coole","Maxine","Mützerich"];
for (let i = 0; i < arr.length; i++)
{
    output(arr[i]);
}


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("ich","bin","der","coole","Max","Mütze"));
// output(getSentence("ich","bin","die","coole","Maxine","Mützerich"));
// more of the same
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

/******** 01a Funktionalität mit Arry 1 *****************/
// kritik | Überlegung
// word1,word2, .....wordN :: Semantische Struktur
// arr[0],arr[1], ... arr[N] :: Numrische Struktur (0,1,2,3,...N)


// output(getSentenceArr(["ich","bin","die","coole","Maxine","Mützerich"]));
function getSentenceArr(arr) {

    const gab = " ";
    const dot = ".";
      let str =  arr[0] + gab +
                 arr[1] + gab +
                 arr[2] + gab +
                 arr[3] + gab +
                 arr[4] + gab +
                 arr[5] + dot;
    
    return str;
}


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


