// JSnack1
let num = prompt('inserisci un numero');
if(num %2 ==0){
    alert(num);
}
else{
    num= num + 1;
    alert(num);
}
// JSnack2
const nomi=['marco','giovanni','franco','piero'];
const cognomi=['marco','giovanni','franco','piero'];
let invitato;
let invitati=[];
for(let i=0;i<nomi.length;i++){
    invitato= nomi[i] +" "+cognomi[(nomi.length-1)-i];
    invitati.push(invitato);
    console.log('INVITATO'+i+'^:'+ invitati[i]);
    }
// JSnack3
const intNum=[1,2,3,4,5,6,7,8,9,10]
let somma;
for(let i=0;i<intNum.length;i++){
    if(i%2!=0){
        console.log('posizione:'+i);
        somma=somma+intNum[i];
        console.log('somma:'+somma);
    }
}
