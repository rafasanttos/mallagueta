let count =1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},2000)

function nextImage(){
    count++;
    if(count>10){
        count =1;
    }

    document.getElementById("radio"+count).checked = true;
};


let countPg =1;
document.getElementById("pag1").checked = true;

setInterval(function(){
    proximoPg();
},1000)

function proximoPg(){
    countPg++;
    if(countPg>3){
        countPg =1;
    }

    document.getElementById("pag"+countPg).checked = true;
};