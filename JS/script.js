const output= document.querySelector('.output');

const zucchine=[

  
  {

    varietà: 'nera',
    peso: 100,
    lunghezza: 15,



  },
  {

    varietà: 'romanesca',
    peso: 107,
    lunghezza: 18,



  },
  {

    varietà: 'fiorentina',
    peso: 93,
    lunghezza: 16,



  },
  {

    varietà: 'siciliana',
    peso: 89,
    lunghezza: 12,



  },
  {

    varietà: 'napoletana',
    peso: 115,
    lunghezza: 22,



  },
  {

    varietà: 'triestina',
    peso: 78,
    lunghezza: 11,



  },
  {

    varietà: 'piacentina',
    peso: 70,
    lunghezza: 10,



  },
  {

    varietà: 'pugliese',
    peso: 123,
    lunghezza: 26,



  },
  {

    varietà: 'gialla',
    peso: 136,
    lunghezza: 28,



  },
  {

    varietà: 'croockneck',
    peso: 70,
    lunghezza: 11,



  }


];

let cont=0;

zucchine.forEach(element => {

  cont+=element.peso;

});

console.log(cont);


//snack 2



const long =[];
const short =[];

zucchine.filter(zucchina=>{

  if (zucchina.lunghezza<=15) {

    short.push(zucchina)
        
  } else {
    
    long.push(zucchina)
  }
})


console.log(short);
console.log(long);

//snack3

const word = 'ciao';

function opposite(string) {

  return string.split('').reverse().join('');


}

console.log(opposite(word));


//snack4


const letters =['a','b','c'];
const numbers =[1,2,3];
const mix=[];

function combine(arrayLenght,arrayFirstName,arraySecondName,newArrayName) {

  for (let i = 0; i < arrayLenght; i++) {

    newArrayName.push(arrayFirstName[i]);
    newArrayName.push(arraySecondName[i]);

  }
  
}

combine(letters.length,letters,numbers,mix);

console.log(mix);


//snack5


const arraySnack= [1,2,3,4,5,6,7,8,9,10];
const includedArray=[];

function included(myArray,firstNumber,secondNumber,newArray) {

  myArray.splice(0,firstNumber);

  myArray.splice(secondNumber-firstNumber-1);

  myArray.forEach(element => {

    newArray.push(element)

  });

  return newArray;
 
}

console.log(included(arraySnack,5,8,includedArray));    

