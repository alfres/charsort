function leercaja(){
var txt = "";
$(".cap").each(function(){ txt = txt + this.textContent;})
 return txt
}
function cambiarcolorcaja(uno,otro) {
uno.style.backgroundColor =  "#DC143C"
otro.style.backgroundColor = "#00FFFF" 	
}
function restaurarcolorcaja() {
	$(".cap").each(function(){this.style.backgroundColor = "#CC99CC"})
}

function printword(arraytarget2) {
 Layer7.style.display = 'none'; $(".canvas").empty()
var c , c2 = arraytarget2.length;
for (c = 0; c < c2; c++){
var idcapa = document.createElement("div");

	idcapa.setAttribute("class","cap");
	idcapa.setAttribute("id", c );
	var cual =alea(arraytarget2.length) 
	idcapa.textContent = arraytarget2.charAt(cual);
	arraytarget2 = arraytarget2.replace(idcapa.textContent, '')
	idcapa.contentEditable = false
	idcapa.addEventListener('click',function(){ palante(this.id) },false)
Layer1.appendChild(idcapa);
}	
}
function palante(ind) {
	var inde = parseInt(ind)
for (i = 0; i < cuanto; i++) {
	if (inde == (Layer1.childNodes.length - 1) && sen > 0) { setTimeout(restaurarcolorcaja,300); break;} 
if (inde < 1 && sen < 0) { setTimeout(restaurarcolorcaja,300); break;}
yo = Layer1.childNodes[inde]
elotro = Layer1.childNodes[inde + sen]
myletra = yo.textContent
otraletra = elotro.textContent
yo.textContent = otraletra
elotro.textContent = myletra
cambiarcolorcaja(yo,elotro)
if(sen > 0){inde = inde + 1} else {inde = inde - 1}
}
if ((leercaja().localeCompare(tar.ans) == 0)){ isok() }
setTimeout(restaurarcolorcaja,300);	
}

function isok() {
Layer7.textContent = leercaja();
Layer7.style.display = 'block';
punt = punt + 1
if (punt > 9) {levelup(); return}
Layer4.textContent = "PUNTOS " + punt;
setTimeout(newtarget,1500);	
	}
function levelup() {
punt = 0 ; niv = niv + 1	
Layer4.textContent = "PUNTOS " + punt;	
Layer3.textContent = "NIVEL " + niv;
sen = lsen[niv - 1]
cuanto = lcuan[niv - 1]
setTimeout(printarrows,1500);
setTimeout(newtarget,1500);
}
function alea(resto){return Math.floor((Math.random() * resto) )}
function newtarget() {
tar = (lista[alea(lista.length)]) ;
arraytarget = tar.ans; 
Layer2.textContent = tar.que
printword(tar.ans)	
if ((leercaja().localeCompare(tar.ans) == 0)){newtarget()}
}

function printarrows(){
	$(".arrows").empty()
var ico = document.createElement("I");
ico.setAttribute("class","fa");
ico.style.fontSize = "1000%"
ico.innerHTML = directio[niv - 1]
ico.style.color = colores[niv - 1]
Layer6.appendChild(ico);
}
