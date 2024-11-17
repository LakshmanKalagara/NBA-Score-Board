let count1 = 0
let count2 = 0
let resh =document.getElementById("home-score")
let resg =document.getElementById("guest-score")
let child1 =document.getElementById("FC1")
let child2 =document.getElementById("FC2")

function onePlush(){
    count1 += 1
    resh.textContent = count1
}

function twoPlush(){
    count1 += 2
    resh.textContent = count1
}

function threePlush(){
    count1 += 3
    resh.textContent = count1
}

function onePlusg(){
    count2 += 1
    resg.textContent = count2
}

function twoPlusg(){
    count2 += 2
    resg.textContent = count2
}

function threePlusg(){
    count2 += 3
    resg.textContent = count2
}

function newGame(){
    count1=0
    count2=0
    resh.textContent=count1
    resg.textContent=count2
    child1.style.backgroundColor = "midnightblue"
    child2.style.backgroundColor = "midnightblue"
}

function endGame(){
    if (count1 > count2){
        child1.style.backgroundColor = "green"
        child2.style.backgroundColor = "red"

    }else if (count2 > count1){
        child2.style.backgroundColor = "green"
        child1.style.backgroundColor = "red"
    }else{
        child1.style.backgroundColor = "gray"
        child2.style.backgroundColor = "gray"
    }

}