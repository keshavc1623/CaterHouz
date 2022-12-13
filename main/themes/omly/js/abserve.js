
$(document).ready(function() {var sections = $('.property_list'), nav = $('#navmenu'), nav_height = nav.outerHeight(), filter_header = $('.navbartwo');$(window).on('scroll', function () {var cur_pos = $(this).scrollTop();sections.each(function() { var top = $(this).offset().top - nav_height,bottom = top + $(this).outerHeight();if (cur_pos >= top && cur_pos <= bottom) {$('.spy-menu').find('a').removeClass('active');sections.removeClass('active');$(this).addClass('active');$('.spy-menu').find('a[href="#'+$(this).attr('id')+'"]').addClass('active');}});var filter_top = $('.search-left-menu').outerHeight() + $('.slider').outerHeight() + $('header').outerHeight() + $('.filter_header').outerHeight();if (cur_pos >= filter_top) {filter_header.addClass('fixedtop');nav.addClass('topfixedhide');}else{filter_header.removeClass('fixedtop');nav.removeClass('topfixedhide');}$('.cart_menulink').each(function() {if($("a[href^='#']").hasClass("cart_menulink")){var cart_menuposition_top = ($($(this).attr("href")).offset().top + 2) - $('.pro-head').outerHeight(),cart_menuposition = cart_menuposition_top + $($(this).attr("href")).outerHeight();if (cur_pos >= cart_menuposition_top && cur_pos <= cart_menuposition) {$('.cart_menulink').not(this).removeClass('active');$(this).addClass('active');$('.subcart_menulink').each(function() {var sub_menuposition_top = ($($(this).attr("href")).offset().top + 2) - $('.pro-head').outerHeight(),sub_menuposition = sub_menuposition_top + $($(this).attr("href")).outerHeight();if (cur_pos >= sub_menuposition_top && cur_pos <= sub_menuposition) {$('.subcart_menulink').not(this).removeClass('active');$(this).addClass('active');}});}}});});$("a[href^='#']").click(function(e) { e.preventDefault();if($(this).hasClass("cart_menulink")) {var position = ($($(this).attr("href")).offset().top + 2) - $('.pro-head').outerHeight();$("body, html").animate({ scrollTop: position}); }else{var position = $($(this).attr("href")).offset().top;$("body, html").animate({scrollTop: position});}});$('.right_search').on('click', function() {$(".left-menu").toggleClass('left-active');$(".overlay").toggle();});$('.rigt_search').on('click', function() {$(".right-menu").addClass('rightsign-filter-active');$(".overlay").show();$("body").addClass("select-filter-short");});$('.overlay, .closefilter').on('click', function() {$(".left-menu").removeClass('left-active');$(".right-menu").removeClass('right-active');$("div").removeClass('rightsign-active');$("div").removeClass('rightsign-filter-active');$("div").removeClass('rightsignup-active');$(".overlay").hide();$("body").removeClass("select-short");$("body").removeClass("select-filter-short");});$(" .signup-show").on('click', function() {$(".rightsignup").addClass('rightsignup-active');$(".overlay").show();});$(".clicksignin, .loginhomeslide").on('click', function() {$(".rightsignin").addClass('rightsign-active');$(".rightsignup").removeClass('rightsignup-active');$(".overlay").show();});$(".clickshow, .signup-show").on('click',function() {$(".rightsignup").addClass('rightsignup-active');$(".rightsignin").removeClass('rightsign-active');$(".overlay").show(); });$(".clickimg").on('click', function() {$('.hidesearch').css('display', 'block');});$(window).scrollTop(function() {$(".filter-div").addClass("shadowbox");});$('.rigt_search, .signup-show, .loginhomeslide').click(function() {$("body").addClass("select-short");});$('.closebtn').click(function() {$("body").removeClass("select-short");});});$('#check').change(function() {if ($('#check:checked').length > 0) {$(".showbottmpopup").animate({ bottom: '90px' });$('.showbottmpopup').delay(4600).animate({bottom: '-90px'});} else {$('.showbottmpopup').animate({bottom: '-100px'});}});var counter = 0;$('#pluss,#plusss').click(function() {$('#display,#display1').html(++counter)}); $('#minuss,#minusss').click(function() {$('#display,#display1').html((counter - 1 < 0) ? counter : --counter)});


 $(document).ready(function(){
//    var myTag = $('.menu-form-title').text();
// if (myTag.length > 42) {
//  var truncated = myTag.trim().substring(0, 42).split(" ").slice(0, -1).join(" ") + "…";
//  $('.menu-form-title').text(truncated);
// }
// $(window).on("resize", function(event){

if (jQuery(window).width() > 768){
$('.menu-form-title').each(function(i){
	var text = $(this).text();
	var dd = text.length;
	// console.log(dd);

	if (text.length > 30) {

		var truncated = text.trim().substring(0, 42).split(" ").slice(0, -1).join(" ") + "…";
		 // console.log(truncated);
		$(this).text(truncated);
	}
})

}
// });
$(".search_list").click(function(){
	 $(".search_list_page .close_btn img").show();
	 $(".search_list_page .close_btn .esc").css("display", "block");
	});

$(".btn_apply.btn_j").click(function(){
  $(".message_applay").show();
});

});



