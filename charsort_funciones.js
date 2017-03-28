function check(){
leer = leercaja()
leer2 = targ[0]
var c = leer.localeCompare(leer2)

if ((c == 0)){
//alert("true " + leercaja() + " " + targ[0])
return true
} else {

return false
}
}

function clearbox(){
var myNode = document.getElementById("Layer1");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
}
function cleararrows(){
var myNode = document.getElementById("Layer6");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
}
function leercaja(){
    var c = document.getElementById("Layer1").childNodes;
    var txt = "";
    var i;
    for (i = 0; i < (c.length ); i++) {
        txt = txt + c[i].textContent;
         var2=txt.replace("\n","");
         txt=var2.replace(" ","");
		 }
 return txt
}
function cambiarcolorcaja(uno,otro) {
uno.style.backgroundColor =  "#DC143C"
otro.style.backgroundColor = "#00FFFF" 	

}
function restaurarcolorcaja(uno,otro) {
	 var c = document.getElementById("Layer1").childNodes;
	    var i;
    for (i = 0; i < (c.length ); i++) {
       c[i].style.backgroundColor = "#CC99CC"
		 }

}
function mover(letra){
divid1 = this.id

divid2 = divid1.replace(targ[0], "");

//alert("mover " + divid2 )
var avanza = document.getElementById("Layer1");
switch (niv) {
case 1:
palante(this,divid2,1)
break;
case 2:
palante(this,divid2,2)
break;
}


}
function printword(quedan2,arraytarget2,targ2,lef2) {
clearbox()
document.getElementById("Layer7").style.display = 'none';
for (var i = 0; i < quedan2; i++) {
var idcap = targ2[0] + i
    var idcapa = document.createElement("div");
	idcapa.id = idcap
	idcapa.setAttribute("class","cap");
	cual =alea(arraytarget2.length) 
	idcapa.textContent = arraytarget2.splice((cual-1), 1);
	idcapa.contentEditable = false
	//alert("quedan2 " + arraytarget2.length)
	idcapa.addEventListener('click',mover,false)
	//idcapa.onClick= mover;
	
	//lef2 = (lef2 + 100);
	//alert(lef)
	var element = document.getElementById("Layer1");
element.appendChild(idcapa);
//idcapa.style.width = '1000px';	
}	
}
function palante(yo,pos,cuanto) {
for (i = 0; i < cuanto; i++) { 
//alert("for " + pos)
myletra = yo.textContent
idotra = divid1.replace(pos, (parseInt(pos)+1));
elotro = document.getElementById(idotra)
otraletra = elotro.textContent


yo.textContent = otraletra
elotro.textContent = myletra
cambiarcolorcaja(yo,elotro)

yo = document.getElementById(idotra)
divid1 = yo.id
pos = (parseInt(pos )+ 1)
}

if (check() == true){
cap =document.getElementById("Layer7")
cap.textContent = leercaja();
cap.style.display = 'block';
punt = punt + 1
Layer4.textContent = "PUNTOS " + punt;
setTimeout(newtarget,1900);
//newtarget()
}
setTimeout(restaurarcolorcaja,300,yo,elotro);	
}


function alea(resto){
x = Math.floor((Math.random() * resto) );

return x;
}
function newtarget() {

tar = (lista[alea(lista.length)]) ;
//tar = "sopa:SE COME CON CUCHARA"
targ = tar.split(":"); 
Layer2.textContent = targ[1]

arraytarget = targ[0].split(""); 

lef = 100
quedan = arraytarget.length
printword(quedan,arraytarget,targ,lef)	
if (check() == true){
newtarget()
}

}

function printarrows(){


//Layer6.innerHTML = '<i style="font-size:24px" class="fa">&#xf178;</i>'
}