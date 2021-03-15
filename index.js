let all_button= document.getElementsByTagName('button') ;
console.log(all_button);

let Arr= [] ; // it will store all butoon attributes (classes,ids)

for (let i=0;i<all_button.length;i++) {
    Arr.push(all_button[i].classList[1]) ; // push all classlist colors into newly created array
}
 console.log(Arr);

buttonColorChange = (buttonthingy) =>{
    if (buttonthingy.value=='red') {
        buttonRed();
    }
    else if (buttonthingy.value=='green') {
        buttonGreen();
    }
    else if (buttonthingy.value=='reset') {
        buttonReset();
    }
    else if (buttonthingy.value=='random') {
        buttonRandom();
    }

}

buttonRed = () =>{
    for(let i=0;i<all_button.length;i++) {
        all_button[i].classList.remove(all_button[i].classList[1]) ;
        all_button[i].classList.add('red') ;
    }
}


buttonGreen = () =>{
    for(let i=0;i<all_button.length;i++) {
        all_button[i].classList.remove(all_button[i].classList[1]) ;
        all_button[i].classList.add('green') ;
    }
}

buttonReset = () =>{
    for(let i=0;i<all_button.length;i++) {
        all_button[i].classList.remove(all_button[i].classList[1]) ;
        all_button[i].classList.add(Arr[i]) ;
    }
}

buttonRandom = ()=> {
    let choices=['red','green','blue','yellow']

    for(let i=0;i<all_button.length;i++) {
        let randomNum = Math.floor(Math.random()*4);
        all_button[i].classList.remove(all_button[i].classList[1]) ;
        all_button[i].classList.add(choices[randomNum]) ;

    }
}


