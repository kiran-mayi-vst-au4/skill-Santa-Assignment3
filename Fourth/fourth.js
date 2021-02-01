// 4. Write a JavaScript program to find the Armstrong numbers of 3 digits.
// Go to the editor
// Note: An Armstrong number of three digits is an integer such that the
// sum of the cubes of its digits is equal to the number itself. For
// example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 =
// 371.
function armstr(num)
{
var arm=0,a,b,c,d,num;


temp=num;
while(temp>0)
{
a=temp%10;
temp=parseInt(temp/10); // convert float into Integer
arm=arm+a*a*a;
}
if(arm==num)
{
return "Armstrong Number"
}
else
{
return "Not Armstrong number";
}
}
console.log(armstr(371))