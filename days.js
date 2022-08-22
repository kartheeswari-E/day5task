//1.find odd numbers in an array
const odd=(arr)=>
{
    for(var i=0;i<arr.length;i++){
      if(arr[i]%2!=0)
     {
         console.log(arr[i]);
   }
 }
    };
(odd([1,2,3,4,5,6,7,8,9]));

     //2.convert all the strings to title caps in a string array
    
const titlecaps=(str)=> {
 str = str.toLowerCase().split(' ');
  //str=str.split(' ')
   for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(' '));
  
  
};(titlecaps("i aDD a little tea pot"));

//3.sum of all numbers in the array
var sum=0;
const total=(arr1)=>{
    for(var i=0;i<arr1.length;i++){
    sum=sum+arr1[i];
    }
    console.log(sum);
};(total([1,2,2,5]));

//4.return all the prime numbers in array
const primenumber=(arr)=>{
  for(var i=0;i<arr.length;i++){
    pn=true;
    for(var j=2;j<=arr[i];j++){
      if(arr[i]%j==0 && j!=arr[i]){
        pn=false;
      }
    }
    if(pn==true){
      console.log(arr[i]);
    }
  }
};primenumber([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,37]);

  
 //5. return all the palindromes in  an array 
  const palindromes=(str)=>{
    for(i=0;i<str.length;i++){
    var strReverse = str[i].split("").reverse().join(""); 
    if(str[i]==strReverse)
       {
        console.log(str[i])
      }
   }
  
  };palindromes(["karthiga","dad","mam","morning","lil"])

  
