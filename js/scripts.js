//js easing
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});
/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}document.all&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);

function debug(msg){
	console.log(msg);
}

$(document).ready(function(){

	var gmap_latitude = -25.005973;
	var gmap_longitude = 133.198242;
	var gmap_zoom = 4;

	$(window).load(function(){

		$(".loading_screen").fadeOut(150, function(){
			$("#wrapper").animate({
				opacity : 1
			}, 150);
		});

		if ($(window).width() > 991){
			$(".menu_inner").removeClass("col-md-12").addClass("col-md-8");
		}else{
			$(".menu_inner").removeClass("col-md-8").addClass("col-md-12");
		}

		$(".theme_configs").addClass("visible");

	});

	$("#portfolio_grid").mixitup();

	// portfolio image popup
	$(".image_popup").magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$(".home_slider").owlCarousel({
      	singleItem:true,
		navigation : true,
		pagination : false,
	    transitionStyle : "fade",
		navigationText : ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});

	$(".post_slideshow").owlCarousel({
      	singleItem:true,
		navigation : true,
		pagination : false,
		navigationText : ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});

	$(".clients_list").owlCarousel({
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
	});
	
	// Tweets feed
	$('.tweets_feed').twittie({
	    dateFormat: '%b. %d, %Y',
	    template: 
	    '<div class="tweet_user">'+
			'<span class="icon-twitter"><i class="fa fa-twitter"></i></span>'+
			'<span class="username">{{screen_name}}</span>'+
	    '</div>'+
	    '<div class="tweet_text">'+
	    	'{{tweet}}'+
	    '</div>'+
	    '<div class="tweet_time">'+
	    	'<a href="{{url}}">{{date}}</a>'+
	    '</div>'
	    ,
	    count: 4
	}, function(){
		$(".tweets_feed").owlCarousel({
			pagination : true,
			singleItem:true
		});
	});

	//main menu
	$(".menu ul li a").click(function(){

		//hide current page
		var current_page = $(".menu ul li a.active").attr("href");
		current_page = current_page.substring(1);

		//remove active class from menu items
		$(".menu ul li a").removeClass("active");

		//add active class to new page
		$(this).addClass("active");

		//show new page
		var page = $(this).attr("href");
		page = page.substring(1);

		if (current_page == page)
			return false;

		var me = $(this);

		//fade out current page
		$("#"+current_page+"_page").fadeOut("fast", function(){

			//show-hide header
			if (page != "home"){
				$("#header").slideUp("medium", function(){
					if (!$(".menu .left").hasClass("animate")){
						$(".menu .left").addClass("animate");
					}
					if (!$(".menu .right").hasClass("animate")){
						$(".menu .right").addClass("animate");
					}
					$(".menu").addClass("other_page");

				});
				if ($(".menu_inner").hasClass("col-md-12")){
					$(".menu_inner").removeClass("col-md-12").addClass("col-md-8");
				}
			}else{
				$("#header").slideDown("medium", function(){
					$(".menu .left").removeClass("animate");
					$(".menu .right").removeClass("animate");
					$(".menu").removeClass("other_page");
				});
			}

			//delete active menu icon
			$(".menu ul li a i").removeClass("active");

			//fade in new page
			$("#"+page+"_page").fadeIn("fast", function(){

				if ($("#"+page+"_page").find("#gmap").is(":visible")){
					new Maplace({
					map_options: {
						mapTypeId: google.maps.MapTypeId.HYBRID,
						set_center: [gmap_latitude, gmap_longitude],
						zoom: gmap_zoom,
							scrollwheel: false
					}
					}).Load();
				}

				if ($("#"+page+"_page").find(".skills").is(":visible")){
					if (!$(".skills").hasClass("animated")){
						
						$(".skills").addClass("animated");

						//animate skills
						$('.skills .skill .color').each(function(){
							var val = $(this).attr("data-width");
							$(this).animate({
								'width':val
							}, 1000, 'easeInQuint');
						});
					}
				}

			});

			//add active menu icon
			me.find("i").addClass("active");

		});

		return false;

	});

	$(".m_menu_toggle").click(function(){
		if ($(".menu ul").is(":visible")){
			$(".menu ul").slideUp("fast");
		}else{
			$(".menu ul").slideDown("fast");;
		}
	});

	$(window).resize(function(){
		if ($(window).width() > 991){
			$(".menu ul").show();
			$(".menu_inner").removeClass("col-md-12").addClass("col-md-8");
		}else{
			$(".menu_inner").removeClass("col-md-8").addClass("col-md-12");
		}
	});

	$(".clients_list .client").click(function(){

		var details = $(this).find(".details");

		$(".clients .details_box").html(details.html());
		$(".clients .details_box").slideDown();

	});

	$("body").on("click", ".close_clients_box", function(){
		$(this).parents(".details_box").slideUp();
		$(this).parents(".details_box").html("");
	});

	$("body").on("click", "#portfolio_grid .img_outer", function(){
		var box = $(this).parents(".mix").find(".portfolio_info");
		if (box.is(":visible")){
			box.slideUp();
		}else{

			$("#portfolio_grid .mix").removeClass("active");
			$("#portfolio_grid .mix .portfolio_info").hide();

			box.slideDown();

			$(this).parents(".mix").addClass("active");

			$('html,body').animate({
	        scrollTop: $(box).offset().top},
	        'slow');
		}
		
	});

	$("body").on("click", ".close_portfolio_info", function(){
		$(this).parents(".portfolio_info").slideUp();
		$("#portfolio_grid .mix").removeClass("active");
	});

	$(".tab_select li").click(function(){
		var current = $(".tabs .tab.active");

		$(".tab_select li.active").removeClass("active");
		$(this).addClass("active");

		var id = $(this).attr("data-id");

		if (current.hasClass("tab_"+id))
			return false;

		$(".tabs .tab.active").slideUp("medium");
		$(".tabs .tab.active").removeClass("active");

		$(".tabs .tab.tab_"+id).slideDown("medium");
		$(".tabs .tab.tab_"+id).addClass("active");

	});

	$("body").on("click touchstart", ".blog_view_btn", function(e){
		e.preventDefault();

		var post = $(this).parents(".post");

		$(".posts > .post").fadeOut("fast", function(){

			$(".pagination").fadeOut("fast");

			post.fadeIn();
			post.find('.hidden_post_content').show();

			$('.return_to_blog').css("display", "block");

		});
		
		return false;

	});

	$(".return_to_blog").click(function(){

		$('.return_to_blog').fadeOut("fast");

		$(".posts > .post").fadeIn("fast");

		$(".posts > .post .hidden_post_content").hide();

		$(".pagination").fadeIn("fast");

		return false;

	});

	//contact form
	$(".send_message_btn").click(function(){
		var name = $(this).parents(".contact_form").find(".name");
		var email = $(this).parents(".contact_form").find(".email");
		var message = $(this).parents(".contact_form").find(".message");

		$(this).attr("value", "Loading...");

		$.ajax({
			type: 'POST',
			url: 'ajax/ajax.php',
			data: {
				'name' : name.val(),
				'email' : email.val(),
				'message' : message.val()
			},
			dataType: 'json',
			success: $.proxy(function(data) {
				
				if (data.error == false){
					$(this).next().removeClass("error").addClass("success").html(data.response);
					name.val('');
					email.val('');
					message.val('');
				}else{
					$(this).next().removeClass("success").addClass("error").html(data.response);
				}

				$(this).attr("value", "Send Message");

			}, this)
		});


	});

	
	$(".tabs_box .tabs_menu li").click(function(){
		$(".tabs_box .tabs_menu li").removeClass("active");
		$(this).addClass("active");

		$(".tabs_box .pages > div.active").hide();
		$(".tabs_box .pages > div.active").removeClass("active");

		var id = $(this).attr("data-tab");

		$(".tabs_box .pages > div.page_"+id).show();
		$(".tabs_box .pages > div.page_"+id).addClass("active");

	});

	$(".goto_page").click(function(){
		var page = $(this).attr("data-page");

		window.location.hash = page;

		return false;

	})

	// Bind an event handler.
	jQuery(window).hashchange( function(e) {
		var hash = location.hash;
		if (hash == "")
			return false;

		var split = hash.split("#");

		var page = split[1];

		//page exist
		if ($("#content").find("#"+page+"_page").length){

			//hide current page
			var current_page = $(".menu ul li a.active").attr("href");
			current_page = current_page.substring(1);

			//remove active class from menu items
			$(".menu ul li a").removeClass("active");

			//add active class to new page
			$('.menu ul li a[href="#'+page+'"]').addClass("active");
			
			//show new page

			if (current_page == page)
				return false;

			//fade out current page
			$("#"+current_page+"_page").fadeOut("fast", function(){

				//show-hide header
				if (page != "home"){
					$("#header").slideUp("medium", function(){
						if (!$(".menu .left").hasClass("animate")){
							$(".menu .left").addClass("animate");
						}
						if (!$(".menu .right").hasClass("animate")){
							$(".menu .right").addClass("animate");
						}
						$(".menu").addClass("other_page");

					});
					if ($(".menu_inner").hasClass("col-md-12")){
						$(".menu_inner").removeClass("col-md-12").addClass("col-md-8");
					}
				}else{
					$("#header").slideDown("medium", function(){
						$(".menu .left").removeClass("animate");
						$(".menu .right").removeClass("animate");
						$(".menu").removeClass("other_page");
					});
				}

				//delete active menu icon
				$(".menu ul li a i").removeClass("active");

				//fade in new page
				$("#"+page+"_page").fadeIn("fast", function(){

					if ($("#"+page+"_page").find("#gmap").is(":visible")){
						new Maplace({
						map_options: {
							mapTypeId: google.maps.MapTypeId.HYBRID,
							set_center: [gmap_latitude, gmap_longitude],
							zoom: gmap_zoom,
								scrollwheel: false
						}
						}).Load();
					}

					if ($("#"+page+"_page").find(".skills").is(":visible")){
						if (!$(".skills").hasClass("animated")){
							
							$(".skills").addClass("animated");

							//animate skills
							$('.skills .skill .color').each(function(){
								var val = $(this).attr("data-width");
								$(this).animate({
									'width':val
								}, 1000, 'easeInQuint');
							});
						}
					}

				});

				//add active menu icon
				$('.menu ul li a[href="#'+page+'"]').find("i").addClass("active");

			});

		}

		return false;

	});

	// Manually trigger the event handler.
	jQuery(window).hashchange();

	$(".anim_element").appear();
	$('body').on('appear', '.anim_element', function(event, $all_appeared_elements) {
		
		var anim_class = $(this).attr("data-animation");

		var elem = $(this);
		
		var animationDelay = elem.attr("data-animation-delay");
        if(animationDelay != undefined){

            setTimeout(function(){
                elem.addClass(anim_class + " animated fullOpacity");
            },animationDelay);

        }else{
            elem.addClass(anim_class + " animated fullOpacity");
        }

    });

});