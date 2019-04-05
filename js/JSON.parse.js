let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if (xhr.readyState == 4 && xhr.status == 200) {
		let mhs = JSON.parse(this.responseText);
		console.log(mhs);
	}
}

xhr.open('GET','../json/coba.json',true);
xhr.send();
// json > object