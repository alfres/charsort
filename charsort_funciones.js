function check(){
leer = leercaja()
leer2 = tar.ans
var c = leer.localeCompare(leer2)
if ((c == 0)){ return true
} else { return false }
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

function printword(arraytarget2) {
clearbox()
document.getElementById("Layer7").style.display = 'none';
var c
var c2 = arraytarget2.length;
for (c = 0; c < c2; c++){
var idcapa = document.createElement("div");

	idcapa.setAttribute("class","cap");
	idcapa.setAttribute("id", c );
	var cual =alea(arraytarget2.length) 
	idcapa.textContent = arraytarget2.charAt(cual);
	arraytarget2 = arraytarget2.replace(idcapa.textContent, '')
	idcapa.contentEditable = false
	idcapa.addEventListener('click',function(){
		switch(niv) {
case 1: palante(this.id,1) ; break
case 2: patras(this.id,1) ; break
case 3: palante(this.id,2) ; break
case 4: patras(this.id,2) ; break
}
   
	},false)
	var element = document.getElementById("Layer1");
element.appendChild(idcapa);

}	
}
function palante(ind,cuanto) {
	var element = document.getElementById("Layer1");
	var inde = parseInt(ind)
for (i = 0; i < cuanto; i++) {
	if (inde == (element.childNodes.length - 1)) { setTimeout(restaurarcolorcaja,300); break;} 
yo = element.childNodes[inde]
elotro = element.childNodes[inde + 1]
myletra = yo.textContent
otraletra = elotro.textContent

yo.textContent = otraletra
elotro.textContent = myletra
cambiarcolorcaja(yo,elotro)
inde = inde + 1
}

if (check() == true){
isok()
}
setTimeout(restaurarcolorcaja,300,yo,elotro);	
}

function patras(ind,cuanto) {
	var element = document.getElementById("Layer1"); 
	var inde = parseInt(ind)
for (i = 0; i < cuanto; i++) { 
if (inde < 1) { setTimeout(restaurarcolorcaja,300); break;}
yo = element.childNodes[inde]
elotro = element.childNodes[inde - 1]
myletra = yo.textContent
otraletra = elotro.textContent

yo.textContent = otraletra
elotro.textContent = myletra
cambiarcolorcaja(yo,elotro)
inde = inde - 1

}

if (check() == true){
isok()
}
setTimeout(restaurarcolorcaja,300,yo,elotro);	
}
function isok() {
cap =document.getElementById("Layer7")
cap.textContent = leercaja();
cap.style.display = 'block';
punt = punt + 1
Layer4.textContent = "PUNTOS " + punt;
setTimeout(newtarget,1900);	
	
}
function alea(resto){
return Math.floor((Math.random() * resto) )
}
function newtarget() {
tar = (lista[alea(lista.length)]) ;
arraytarget = tar.ans; 
Layer2.textContent = tar.que
printword(tar.ans)	
if (check() == true){
newtarget()
}

}

function printarrows(){
var ico = document.createElement("I");
ico.setAttribute("class","fa");
ico.style.fontSize = "1000%"
ico.innerHTML = directio[niv - 1]
ico.style.color = colores[niv - 1]
	var element = document.getElementById("Layer6");
element.appendChild(ico);

}
