function tampilkanSemuaMenu(){
	$.getJSON('data/pizza.json', function(data){
		let menu = data.menu;
		// console.log(menu);
		$.each(menu, function(i, data) {
			 /* iterate through array or object */
			 // console.log(data);
			 $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img class="card-img-top" src="img/menu/'+ data.gambar +'"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +',-</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
		});
	});
}

tampilkanSemuaMenu();

$('.nav-link').on('click', function () {
	$('.nav-link').removeClass('active');
	$(this).addClass('active');

	let kategori = $(this).html();
	// console.log(kategori);
	$('h1').html(kategori);

	$.getJSON('data/pizza.json', function(data) {
			/*optional stuff to do after success */
			let menu = data.menu;
			let content = '';

			if (kategori == 'All Menu') {
				tampilkanSemuaMenu();
				return;
			}

			$.each(menu, function(i, data) {
				 /* iterate through array or object */
				 if (data.kategori == kategori.toLowerCase()) {
				 	content += '<div class="col-md-4"><div class="card mb-3"><img class="card-img-top" src="img/menu/'+ data.gambar +'"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +',-</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
				 }
			});

			$('#daftar-menu').html(content);
	});
});