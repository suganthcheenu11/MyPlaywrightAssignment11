/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

*/

let text = "   fly me   to   the moon  "

function getLastWordCount(t) {

    let stringArr = t.trim().split(" ");
    console.log(stringArr)
    let strArrlen = stringArr.length;
    console.log(strArrlen)
    return stringArr[strArrlen - 1].length;


}

console.log(getLastWordCount(text));
/*

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/



let str1 = "listen";
let str2 = "silent";




function isAnagram(s1, s2) {
    let count = 0;
    if (s1.length == s2.length) {
        for (let i = 0; i <= s1.length - 1; i++) {
            for (let j = 0; j <= s2.length - 1; j++) {
                //console.log(s1.charAt(i), s2.charAt(j))
                if (s1.charAt(i) == s2.charAt(j)) {
                    //console.log(s1.charAt(i), s2.charAt(j))
                    count += 1;
                    let a = s2.replace(s2.charAt(j), "").trim();
                    s2 = a
                    //console.log(count)
                    break;
                }
            }
            //console.log(`done with ${i}`)
        }
    } else {
        return "String length is not equal";
    }
    console.log(count)
    if (count == s1.length) {
        return true;
    } else {
        return false;
    }
}

console.log(isAnagram(str1, str2));