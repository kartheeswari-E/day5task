//1.find odd numbers in an array
(function(arr){
    for(var i=0;i<arr.length;i++){
      if(arr[i]%2!=0)
     {
         console.log(arr[i]);
   }
 }
    })([1,2,3,4,5,6,7,8,9]);

     //2.convert all the strings to title caps in a string array
    
(function (str) {
  str = str.toLowerCase().split(' ');
  //str=str.split(' ')
   for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(' '));
  
  
}
("i aDD a little tea pot"));

//3.sum of all numbers in the array
var sum=0;
(function(arr1){
    for(var i=0;i<arr1.length;i++){
    sum=sum+arr1[i];
    }
    console.log(sum);
})([1,2,2,5]);
//4.return all the prime numbers in array
(function(arr){
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
})([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,37]);
//6.return median of two sorted  array of the same size in javascript

  (function(arr1,arr2){
    var concat=arr1.concat(arr2);
    concat=concat.sort(function(a,b){return a-b});
    console.log(concat);
  if(concat.length%2==0){
    console.log((concat[concat.length/2]+(concat[concat.length/2-1]))/2);
  }})([1,4,7,9,16],[2,5,8,10,37])
  
 //5. return all the palindromes in  an array 
  (function(str){
    for(i=0;i<str.length;i++){
    var strReverse = str[i].split("").reverse().join(""); 
    if(str[i]==strReverse)
       {
        console.log(str[i])
      }
   }
  
  })(["karthiga","dad","mam","morning","lil"])

  
    
//8.rotate an array by k times
(function(nums, k) {

  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

  console.log(nums);
})([1,2,3,4,5],4);

//7.remove the duplicate values from the array
(function(array){
  const uniqueArray = [...new Set(array)];

console.log(uniqueArray);
})([1, 1, 2, 3, 5, 5, 1]);

