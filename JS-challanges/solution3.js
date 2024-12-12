/*
Problem-03: Checking Digits Inside a Name
⚠️ Function Name Must be checkDigitsInName(name)
রাজু পাসপোর্ট রেজিস্ট্রেশনের জন্যে নতুন একটা ওয়েবসাইট বানিয়েছে।  সেখানে অনেকেই নাম ইনপুট দেয়ার সময়  
নামের পাশাপাশি  বিভিন্ন নাম্বার ভুল করে দিয়ে ফেলছে। যেটা রাজু একদম ই চায়না।  তাই রাজুকে তোমার হেল্প করতে হবে। 
তুমি checkDigitsInName() নামে একটি ফাংশন লিখবে যা একটি স্ট্রিং ইনপুট নেবে এবং নামের মধ্যে কোনো সংখ্যা আছে 
কিনা তা চেক করবে। যদি নামের ভিতরে কোনো সংখ্যা থাকে, তাহলে true রিটার্ন করবে। যদি কোনো সংখ্যা না থাকে, তবে 
false  রিটার্ন করবে। ইনপুট যদি স্ট্রিং না হয়, তবে Invalid Input রিটার্ন করবে।

Input :  একটি স্ট্রিং ইনপুট হিসেবে নেবে। 

Output :  এটা  রিটার্ন করবে একটা বুলিয়ান ভ্যালু  : true / false
যদি নামের ভিতরে কোনো সংখ্যা থাকে, তাহলে true রিটার্ন করবে। যদি কোনো সংখ্যা না থাকে, তবে false  রিটার্ন করবে। 

Challenge 📢 : ইনপুট যদি স্ট্রিং বাদে অন্য কিছু হয়, তবে Invalid Input রিটার্ন করবে।
SAMPLE: 
INPUT:   Raj123          OUTPUT: true
INPUT:   n9ayeem         OUTPUT: true
INPUT:   e1mu3           OUTPUT: true
INPUT:   Sumon           OUTPUT: false
INPUT:   Name2024        OUTPUT: true
INPUT:   !@#             OUTPUT: false
INPUT:   ["Raj"]         OUTPUT: Invalid Input

*/

function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return 'Invalid Input';
    }
    for(let nm of name){
        if(!isNaN(nm)){
            return true;
        }     
    }
    return false;
}

/***
   let nameArr = name.split('');
   for(let char of nameArr){
    if(!isNaN(char)){
        return true;
    }
        
    } 
    return false;
*/
