const uprCase = document.querySelector('.up-lett')
const lowrCase = document.querySelector('.low-lett')
const numb = document.querySelector('.numbre')
const symbl = document.querySelector('.symb')
const btnGen = document.querySelector('.btn-gen')
const password = document.querySelector('#copyIn')
const lona = document.querySelector('.Length')
const btnCopy = document.querySelector('.butt')
console.log(btnCopy);
  
// function random



    const randomFunc = {
      low :genRandomlow, 
      upp :genRandomupr , 
      nom:  genRandomnum ,
      sym :  genRandomsym

    }
  
    btnCopy.addEventListener('click', function (){
        navigator.clipboard.writeText(password.value)
        if (password.value != ''){
            alert('password copied')
            password.value = ''  
        }
    })


      
btnGen.addEventListener("click", function(){
     
    const length = lona.value;
const hasuprcase = uprCase.checked;
const haslowcase = lowrCase.checked;
const hasnumber = numb.checked;
const hassymb = symbl.checked;

 const  genpass = generatePassword(haslowcase , hasuprcase,hasnumber,hassymb,length)

 password.value = genpass

})
    
    function generatePassword(low, upp, nom, sym, length) {
        let generatedPassword = ''
        const typesCount = low + upp + nom + sym
        const typesArr = [{low}, {upp}, {nom}, {sym}].filter(item => Object.values(item)[0])
        if(typesCount === 0) {
            return ''
        }
        console.log(length);
    
        for(let i = 0; i < length; i += typesCount) {
            typesArr.forEach(type => {
                console.log(i);
                const funcName = Object.keys(type)[0]
                generatedPassword += randomFunc [funcName]()     
            })
        }
      const finalPassword = generatedPassword.slice(0, length)
    
        return finalPassword
    }

function genRandomupr() {
    const uprcaseLetters = 'abcdefghijklmnopqrstvwxyz'
    return uprcaseLetters[Math.floor(Math.random()* uprcaseLetters.length)]
 }

 function genRandomlow() {
    const lowerLetters = 'ABCDEFGHIJKLMNOPQRSTVWXYZ'
    return lowerLetters[Math.floor(Math.random()* lowerLetters.length)]
 }
 
 function genRandomsym() {
    const symbole = '&(-_)=+°*$!:§/;%<>'
    return symbole[Math.floor(Math.random()* symbole.length)]
 }
 
 function genRandomnum() {
    const  numbre = '0123456789'
    return numbre[Math.floor(Math.random()* numbre.length)]
 }



