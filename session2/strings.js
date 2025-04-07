let s = "Hello World" ;
const sp = s.trim().split(" ");
const last = sp[sp.length -1];
console.log(last.length);

let str = "   fly me   to   the moon  ";
const split = str.trim().split(" ");
const len = split[split.length -1 ]
console.log(len.length);


function isAnagrams(str1,str2) {

    const word1 = str1.toLowerCase().split('').sort().join();
    const word2 = str2.toLowerCase().split('').sort().join();

    console.log(word1==word2 ? "Its is Anagram" : "Its is not nagram");
     
}isAnagrams("listen","silent")

function isAnagram(st1,st2) {

    const result1 = st1.toLowerCase().split('').sort().join();
    const result2 = st2.toLowerCase().split('').sort().join();

    if (result1==result2) {
        console.log("Its and Anagram");

    }else{
        console.log("Its not an Anagram");
        
    }

} 
isAnagram("hello","world")
