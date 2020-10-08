window.onload=function(){
  
   document.getElementById("btn").addEventListener("click",Upiši);

}
function Upiši()
{
    var ime=document.getElementById("name").value;
    var prezime=document.getElementById("lastname").value;
    var studij=document.getElementById("study").value;
    var rod=document.getElementById("date").value;
    var br = document.getElementById("number").value = Math.floor(Math.random() * 100000) + 100000;

    document.getElementById('name_').innerHTML = "<b>Ime: </b>" + ime;
    document.getElementById('lastname_').innerHTML = "<b>Prezime: </b>" + prezime;
    document.getElementById('study_').innerHTML = "<b>Studij: </b>" + studij;
    document.getElementById('birth_').innerHTML = "<b>Rođenje: </b>" + rod;
    document.getElementById("number_").innerHTML = "<b>Br. iskaznice: </b>" +br;
}
