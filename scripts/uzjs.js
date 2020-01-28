$(document).ready(function(){
		$('div [id=buttons]').hide();
		
		var braker = $(".bt");
		
		
	
		
		function screenResize(){
				var screenWidth = $("body").width();
				if (screenWidth>1200) {$(".content").width("1200px"); $(".be").remove(); $("div #td").css("width","33.333%"); $("* div[id='menuitem']").height("300px"); $('#mobv').hide(); $('#fullv').show(); $('#societies').css('margin-top','10%'); }
				else if (screenWidth<=1200 && screenWidth>=768) {$(".content").width(screenWidth+"px");  $("div #td").css("width","33.333%"); $(".be").remove();  $('#mobv').hide();  $('#fullv').show(); $('#societies').css('margin-top','10%');}
				else if (screenWidth<768 && screenWidth>=514) {$(".content").width(screenWidth+"px"); if($("br").attr('class')!=="be"){braker.after("<br class='be'>");}  $("div #td").css("width","50%");  $('#mobv').show(); $('#fullv').hide(); $('#societies').css('margin-top','25%');}
				else if (screenWidth<514 && screenWidth>=320) {$(".content").width(screenWidth+"px"); if($("br").attr('class')!=="be"){braker.after("<br class='be'>");}  $("div #td").css("width","50%");  $('#mobv').show(); $('#fullv').hide(); $('#societies').css('margin-top','35%');}
				else {if($("br").attr('class')!=="be"){braker.after("<br class='be'>");} $(".content").width("320px"); $("div #td").css("width","50%"); $('#mobv').show(); $('#fullv').hide(); $('#societies').css('margin-top','35%'); }
				var sWidth = $('.content').width();
				var newH=((sWidth+80)*0.0681)-11.8181;
				$("nav").css('top',newH);
				var newbot=(sWidth*(0.0681))-93.8181;
				$('.flag2').css('bottom', newbot);
				var newtop = (sWidth*(-0.15))+96;
				var newleft = (sWidth*0.5227)-377.2727;
				$('.mainlogo').css('margin-left', newleft);
				var starSize = (sWidth*0.0185)-0.2222;
				$('* #star').css('font-size', starSize);
				var starTop = ((sWidth+500)*0.0069)+6.6666;
				$('* #star').css('top', starTop*-1);
				var logoHeight = (sWidth*0.321212)+159.5454;
				$('#top').width(logoHeight)
				$('#mainTable').height(sWidth*0.17+'px')
				var newSecBlocktop = (sWidth*0.2544)+105;
				$('.secondBlock').css('top',newSecBlocktop);
				var newMob2Top = (sWidth*0.1781)-38.7938;
				$('.mobi').css('top', newH - (newH*0.18));
				$('#mobi2').css('top', newMob2Top);
				var starTop2 = (sWidth*-0.03816)+4.3129;
				$('* .mobi span').css('top', starTop2)
				$('* .mobi span').css('font-size', starSize+6);
				var socieiesWidth = (sWidth*0.08242)+150;
				$('#societies').width(socieiesWidth)
				var socWidth = $('#societies').innerWidth()/5-10+'px'
				$('.soc').width(socWidth)
				
				$('#mini').css('width', logoHeight)
				$('* .miniStar').css('font-size', starSize)
				var newTop2Height = (sWidth*0.19136)+49.87;
				$('#top2').height(newTop2Height);
				var newFlag2 = (sWidth*0.01931)-67.1818;
				
				$('.flag2').css('top', '-7px');
				var newtop2 = (sWidth*-0.06704)-6.5;
				$('.minilogo2').css('top', newtop2);
				var newtop3 = (sWidth*-0.08068)-8.18181;
				$('* .miniStar').css('top',newtop3)
			}
			screenResize()
		
		//Setting sceern size
		window.onresize = resize;
		
		function resize()
		{	
			screenResize()
		}
		
		$("div [id = 'menuitem']").each(function() {
            $(this).hover(
				function(){
					$(this).css('opacity','0.5')},
				function(){
					$(this).css('opacity','1')})	
        });
		
		$('#td img').each(function() {
			$(this).click(function(){
				if ($("+ *", this).is(":hidden")){$('#td img').css('opacity','1');$('div [id=buttons]').hide();$(this).css('opacity','0.5');$("+ *", this).fadeIn(500);}
				else {$('#td img').css('opacity','1');$('div [id=buttons]').hide();}
			});
			
		});
});
