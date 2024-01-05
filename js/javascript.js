var show = true,
	visiblecont = document.getElementById('visible'),
	eks = ".png",
	profile = document.getElementById('profileimg'),
	scorKamu = document.getElementById("kamu"),
	scorKomputer = document.getElementById("komputer"),
	hasilCom,
	scorK = 0,
	scorU = 0,
	tanganCom = document.getElementById("tangan-com"),
	txt = document.getElementById("teks"),
	txtTgn = document.getElementById("txtTgn"),
	txtTgnBot = document.getElementById("txtTgnBot"),
	tangan,
	otakCom = ["Batu", "Gunting", "Kertas"];

function ChangeIMG(){
	if (show == true) {
		profile.src = "img/user" + eks;
		visiblecont.src = "img/view" + eks;
		show = false;
	}else{
		profile.src = "img/profile" + eks;
		visiblecont.src = "img/hide" + eks;
		show = true;
	}
}

function pilih(bentuk){
	tangan = bentuk;
	tanganCom.src = "img/hide" + eks;
	txtTgn.innerText = tangan;
	txtTgnBot.innerText = "(Rahasia)"
}
function suit(){
	if (tangan != "" && hasilCom != ""){
		hasilCom = otakCom[Math.floor(Math.random()*otakCom.length)];
		if (hasilCom == tangan){
		txt.innerText = "Seri";
		txtTgnBot.innerText = hasilCom;
		tanganCom.src = "img/" + hasilCom + eks;
	}else if (tangan == "batu") {
		if (hasilCom == "kertas") {
			txt.innerText = "Kalah";
			txtTgnBot.innerText = hasilCom;
			tanganCom.src = "img/" + hasilCom + eks;
			scorK++;
			scorKomputer.innerText = scorK;
		}else{
			txt.innerText = "Menang";
			txtTgnBot.innerText = hasilCom;
			tanganCom.src = "img/" + hasilCom + eks;
			scorU++;
			scorKamu.innerText = scorU;
		}
	}else if (tangan == "kertas") {
		if (hasilCom == "gunting") {
			txt.innerText = "Kalah";
			txtTgnBot.innerText = hasilCom;
			tanganCom.src = "img/" + hasilCom + eks;
			scorK++;
			scorKomputer.innerText = scorK;
		}else{
			txt.innerText = "Menang";
			txtTgnBot.innerText = hasilCom;
			tanganCom.src = "img/" + hasilCom + eks;
			scorU++;
			scorKamu.innerText = scorU;
		}
	}else if (tangan == "gunting") {
		if (hasilCom == "batu") {
			txt.innerText = "Kalah";
			txtTgnBot.innerText = hasilCom;
			tanganCom.src = "img/" + hasilCom + eks;
			scorK++;
			scorKomputer.innerText = scorK;
		}else{
			txt.innerText = "Menang";
			txtTgnBot.innerText = hasilCom;
			tanganCom.src = "img/" + hasilCom + eks;
			scorU++;
			scorKamu.innerText = scorU;
		}
	}
	}
}
