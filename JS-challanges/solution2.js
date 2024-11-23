/*
Problem 02 : Notification Generator
⚠️ Function Name Must be sendNotification(email)
তোমরা জানো, একটি ইমেল ২টি অংশ নিয়ে গঠিত হয়, একটি হল `username` অন্যটি `domain name`। 
যেমন zihad.ph@gmail.com এখানে zihad.ph হলো ইউজার নেইম,  gmail.com হলো ডোমেইন নেইম।  
তোমাকে এমন একটি ফাংশন বানাতে হবে যা input হিসেবে একটা email নিবে।  ফাংশনের কাজ হবে, ইমেইলে 
থাকা `username` ও `domain  name` আংশ গুলো ব্যবহার করে, একটি notification message তৈরি করা।  
ফাংশনটি একটি নতুন string রিটার্ন করবে যেখানে ইমেলে থাকা `username` ও `domain name` অংশ ২টি ব্যবহার 
করে notification  এর জন্য মেসেজ তৈরি করতে হবে ।  Output কি হবে সেটা নিচে  ভাল করে দেখো।  
Input :  ইনপুট হবে একটি string, যা হবে একটি ইমেইল (যেমন, zihad@gmail.com) 
@ ক্যারেক্টার টি স্ট্রিং এ একবার ই থাকবে। এটা  userName  এবং DomainName  এর মাঝখানে ই থাকবে।  

Output: zihad.ph@gmail.com এই ইমেইলের জন্যে আউটপুট টি হবে ঠিক এরকম। 
zihad.ph sent you an email from gmail.com

Challenge 📢 : যদি ইনপুটটি একটি valid email না হয় অর্থাৎ ইমেইলে @ না থাকে তাহলে একটি এরোর মেসেজ 
"Invalid Email" রিটার্ন করবে।  
  
Hints 💡:  split() , indexOf() মেথড ব্যবহার করতে পারো। 

SAMPLE INPUT:  zihad@gmail.com              OUTPUT: zihad sent you an email from gmail.com
SAMPLE INPUT:  farhan34@yahoo.com           OUTPUT: farhan34 sent you an email from yahoo.com
SAMPLE INPUT:  nadim.naem5@outlook.com      OUTPUT: nadim.naem5 sent you an email from outlook.com
SAMPLE INPUT:  fahim234.hotmail.com         OUTPUT: Invalid Email
SAMPLE INPUT:  sadia8icloud.com             OUTPUT: Invalid Email

*/ 

function sendNotification(email) {
    const atRed = email.indexOf('@');
    if(atRed === -1 || atRed === 0 || atRed === email.length - 1 || !email.includes('@')){
        return 'Invalid Email';
    }else{
        const [username, domain] = email.split('@');
        return `${username} sent you an email from ${domain}`;
    }
}