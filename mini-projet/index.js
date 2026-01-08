/*
Codes couleurs

jaune: #efec4f;
orange: #eca45c;
rouge: #e85b69;
violet: #956caf;
bleu: #427cf5;
vert: #4cee7e;
noir: #020e13;

*/

function grid1() {
    
    let section1 = document.querySelectorAll("main section")[0];

    
    let divs = section1.querySelectorAll("div");

    
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "#020e13";
    }
}

function grid2() {
   
    let section2 = document.querySelectorAll("main section")[1];

    
    let divs = section2.querySelectorAll("div");

    
    for (let i = 0; i < divs.length; i++) {
        if (i % 2 === 0) {
            
            divs[i].style.backgroundColor = "#4cee7e";
        } else {
            
            divs[i].style.backgroundColor = "#ffee4c";
        }
    }
}


function grid3()
{
     let section3 = document.querySelectorAll("main section")[2];

    
     let divs = section3.querySelectorAll("div");
     
     divs[0].style.backgroundColor = "#e85b69";
     divs[1].style.backgroundColor = "#eca45c";
     divs[2].style.backgroundColor = "#efec4f";
     divs[3].style.backgroundColor = "#4cee7e";
     divs[4].style.backgroundColor = "#427cf5";
     divs[5].style.backgroundColor = "#956caf";
}

function grid4()
{
    let section4 = document.querySelectorAll("main section")[3];

    
    let divs = section4.querySelectorAll("div");

    
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "#020e13";
    }
    
    divs[4].style.backgroundColor = "#4cee7e";
}

function grid5()
{
    let section5 = document.querySelectorAll("main section")[4];

    
    let divs = section5.querySelectorAll("div");

    
    for (let i = 0; i <= 2; i++) {
        divs[i].style.backgroundColor = "#427cf5";
        
    }
        
    for (let i = 3; i <= 5; i++){
        divs[i].style.backgroundColor = "#956caf";
    }
    
    for (let i = 6; i <= 8; i++) {
        divs[i].style.backgroundColor = "#eca45c";
    }
    
    divs[4].style.backgroundColor = "#e85b69";
    divs[7].style.backgroundColor = "#efec4f";
}

function grid6() {
    let section6 = document.querySelectorAll("main section")[5];
    let divs = section6.querySelectorAll("div");

    for (let i = 0; i <= 2; i++) {
        divs[i].style.background = "linear-gradient(to bottom, #956caf, #427cf5)";
    }
    
    for (let i = 3; i <= 5; i++){
        divs[i].style.background = "linear-gradient(to bottom, #4cee7e, #efec4f)";
    }
    
    for (let i = 6; i <= 8; i++) {
        divs[i].style.background = "linear-gradient(to bottom, #eca45c, #e85b69)";
    }
}

grid1();
grid2();
grid3();
grid4();
grid5();
grid6();