let str= 'hello';
count={};
for (char of str){
    count[char]=(count[char]||0)+1;
}
console.log(count);
