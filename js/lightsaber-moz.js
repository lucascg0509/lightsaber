$('document').ready(function(){
	$('#laser').hide();
	var disp = true;

	var audioLigado = new Audio('audio/lightsaberpulse.wav');
	audioLigado.loop = true;
	audioLigado.volume = 1;

	$('#punho').click(function(){
		if (disp) {
			disp = false;
			if (!$('#laser').is(':visible')) {
				ligarLightSaber();
			}
			else{
				desligarLightSaber();
			}
		}
	});

	function ligarLightSaber() {
		$('#laser').show();
		audio = new Audio();
		audio.src = "audio/ltsaberon01.wav";
		audio.volume = 0.6;
		audio.play();
		$('#laser').animate({
			width: '800px'
		}, 500, function(){ audioLigado.play() });
		setTimeout(function(){disp = true}, 800);
	}

	function desligarLightSaber() {
		audio = new Audio();
		audioLigado.pause();
		audio.src = "audio/ltsaberoff01.wav";
		audio.volume = 0.6;			
		audio.play();
		$('#laser').animate({
			width: '0px'
		}, 1200, function(){
			$('#laser').hide();
		});
		setTimeout(function(){disp = true}, 2000);
	}

});