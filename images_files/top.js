// slider
function topSliderInit() {
	var $slider = $("#topImage .slider"),
		pauseBtn = '<button type="button"  class="pause">Pause/Play</button>';
	
	//Pause/Play button
	$slider.on("init", function (event, slick, direction) {//slide初期化後
		$(".slick-slide").eq(0).addClass("is-active");
		$("#topImage .control").find("button:first-child").after(pauseBtn);
		$("#topImage .pause").on("click", function(){
			if ($(this).hasClass("paused")){
				$slider.slick("slickPlay").removeClass("paused");
				$(this).removeClass("paused");
			} else {
				$slider.slick("slickPause").addClass("paused");
				$(this).addClass("paused");
			}
		});
	});

	$slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
		$(".slick-slide").eq(nextSlide).addClass("is-active");
		setTimeout(function () {
			$(".slick-slide").eq(currentSlide).removeClass("is-active");
		}, 2500);

	});
	
	$slider.slick({
		arrows: true,
		dots: false,
		appendArrows: "#topImage .control",
		fade: true,
		autoplay: true,
		pauseOnHover: false,
		autoplaySpeed: 5000,
		speed: 2500,
	});
}

// tab
function tabInit() {

	if($('#information .tabBtn button[aria-selected="true"]').length==0){
		$('#information .tabBtn button:first').attr('aria-selected','true');
	}
	$('#'+$('#information .tabBtn button[aria-selected="true"]').attr('aria-controls')).attr('aria-hidden','false');
	
	var $panels=$('#information .tabPanel');
	var $tabs=$('#information .tabBtn button');
	$panels.find('[aria-hidden="true"]').hide();

	$tabs.on('click',function(){
		if($(this).prop('aria-selected')){ return false;}
		
		$panels.filter('[aria-hidden="false"]').hide().attr('aria-hidden','true');
		$tabs.attr('aria-selected','false');
		$('#'+$(this).attr('aria-controls')).fadeIn().attr('aria-hidden','false');
		$(this).attr('aria-selected','true');
		return false;
	});
	
	
}
//今日の情報
function topTodayInfo(){
	var $info=$('#lifeInfo .info');
	if ($info.length==0 && $info.data('csv')){return;}
	
	$.ajax({url: $info.data('csv'), cache: false,
        success: function(data,textStatus,jqXHR){
			var currentTime = new Date(jqXHR.getResponseHeader('Date'));
			var today =dateFmt(currentTime);
            //csv検索
            $.each( data.split(/\r?\n/), function(i, row) {
				var col =row.split(',');
				if(col[0]==today){
					DispTody(currentTime,$info,col[1]);
					return false;
				}
			});
		}
	});
	
	function DispTody(now,$info,gomi){
		var $today=$('<article id="lifeToday"><h3>今日（'+(now.getMonth() + 1)+'月'+now.getDate()+'日）の情報</h3></article>');
		
		var $garbage=$('<p class="garbage">の日</p>');
		if(gomi.length==0){
			$garbage.text('収集ありません').addClass('none');
		}else{
			$garbage.prepend(gomi.trim());
		}
		$today.append($garbage).prependTo($info);
		
	}
}

$(document).ready(function () {
	topTodayInfo();
	tabInit();
	topSliderInit();
});