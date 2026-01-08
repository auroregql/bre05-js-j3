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

function grid1()
{
    let section1 = document.querySelectorAll("main section")[0];
    
    let divs = document.querySelectorAll("div");

    for (let i = 0; i < divs.length; i++) 
    {
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
}

function grid4()
{

}

function grid5()
{

}

function grid6()
{

}

grid1();
grid2();
grid3();
grid4();
grid5();
grid6();