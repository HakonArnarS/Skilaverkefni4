console.log("virkar!")

var button = document.querySelector("#myBtn");
var myndInput = document.querySelector("#mynd");
var nafnInput = document.querySelector("#nafn");
var aldurInput = document.querySelector("#aldur");
var stadaInput = document.querySelector("#stada");
var stigInput = document.querySelector("#stig");
var myDiv = document.querySelector("div");
var removeButton = document.querySelector("#delete");



//hérna er lykkja sem sést alltaf. 

var photos = ["https://i.pinimg.com/236x/92/1d/fa/921dfaf8b9a295c35544cba8281e6ab0--beautiful-boys-beautiful-people.jpg",
"https://i.pinimg.com/236x/bf/ae/48/bfae48a70088d40da8f46e7ae94ac8e0--famous-guys-famous-people.jpg",
"https://i.pinimg.com/236x/6f/13/09/6f13091de299ebb5248d298c64e50bfa--beautiful-men-beautiful-people.jpg",
"https://i.pinimg.com/236x/32/1e/d1/321ed17afb10236a24dd703ccc894aa1.jpg",
]; 
var names = ["Gísli", "Eiríkur", "Helgi", "Pétur",];
var ages = [20, 17, 18, 22,];
var positions = ["Fyrsti","Annar", "Þriðji", "Fjórði",];
var scores = [7, 9, 13, 11,];


for(var i = 0; i<names.length; i++){
    myDiv.innerHTML += `
    <div id="card">
        <img src="${photos[i]}"/>
        <h2>Nafn: ${names[i]}</h1>
        <h3>Aldur: ${ages[i]}</h3>
        <h3>Staða: ${positions[i]}</h3>
        <h3>Stig: ${scores[i]}</h3>
        <Button id="delete">Eyða leikmanni</button>
    </div>
    `
}

var addCard = function(){
    myDiv.innerHTML += `
    <div id="card">
        <img src="${myndInput.value}"/>
        <h2>Nafn: ${nafnInput.value}</h1>
        <h3>Aldur: ${aldurInput.value}</h3>
        <h3>Staða: ${stadaInput.value}</h3>
        <h3>Stig: ${stigInput.value}</h3>
        <Button id="delete">Eyða leikmanni</button>
    </div>
    `
    myndInput.value="";
    nafnInput.value="";
    aldurInput.value="";
    stadaInput.value="";
    stigInput.value="";
}
var ifEnter = function(e){
    if (e.keyCode === 13){
        addCard()
    }

}
button.onclick = addCard; 
myndInput.onkeydown = ifEnter;
nafnInput.onkeydown = ifEnter;
aldurInput.onkeydown = ifEnter;
stadaInput.onkeydown = ifEnter;
stigInput.onkeydown = ifEnter;  

//Delete takki
//langaði að búa til takka til þess að eyða leikmanni. 
//það er bara hægt að eyða fyrsta leikmanni með þessum 
//og hann verður óvirkur eftir að það er búið að bæta við nýjum leikmanni.
var deleteBtn = document.getElementById('delete');
deleteBtn.onclick = function () {
    document.getElementById('card').remove();
};


