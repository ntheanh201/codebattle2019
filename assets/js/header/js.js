$(document).ready(function(){
	// kich thuoc banner 
	banner = $('.banner').width();
	$('.banner').css({'height':banner*3000/7325});
	reset = $('.tmc a').css('fontSize');
	size = reset.replace('px', '');
	$('.tmc a').css({'fontSize':(banner+size*200)/275});
	// resize
	$(window).resize(function(){
		banner = $('.banner').width();
		reset = $('.tmc a').css('fontSize');
		size = reset.replace('px', '');
		$('.banner').css({'height':banner*3000/7325});
		$('.tmc a').css({'fontSize':(banner+size*200)/275});
		// console.log((banner+size*200)/275);
	});
	TweenMax.to(".nuoc1", 1.5, {ease: Linear.easeOut,x: "-=150", yoyo: true,modifiers: { x: function(x) {return x % 500; } },repeat: -1});
	TweenMax.to(".nuoc2", 1.5, { ease: Linear.easeOut, x: "+=150",yoyo: true,modifiers: {x: function(x) {return x % 500;}},repeat: -1});
	TweenMax.to(".nuoc3", 1.5, {ease: Linear.easeOut,x: "-=150",yoyo: true,modifiers: {x: function(x) { return x % 500;},y:function(y){return y % 500;}}, repeat: -1});
	TweenMax.to(".nuoc4", 1.5, {ease: Linear.easeOut,x: "+=150",yoyo: true,modifiers: {x: function(x) {return x % 500;},y:function(y){var height = $('._img1a').top();console.log(height);if(y < height){y = height;}return y;}}, repeat: -1});
	TweenMax.to(".may", 10, {ease: Linear.easeOut,x: "-=1000",yoyo: true,modifiers: {x: function(x) {return x % 500;},},repeat: -1});
	TweenMax.to(".may1", 15, {ease: Linear.easeOut,x: "+=1000",yoyo: true,modifiers: {x: function(x) {return x % 500;},},repeat: -1});
	TweenMax.to(".may2",20, {ease: Linear.easeOut,x: "-=1000",yoyo: true,modifiers: {x: function(x) {return x % 500;},},repeat: -1});
    var haidang =  new TimelineMax({});
    haidang.from($('._lt1'),3,{y:+800,ease:Circ.easeOut},'-=2')
   		  .from($('._lt2'),0.2,{opacity:0,ease:Circ.easeOut})
  	var thuyen =  new TimelineMax({});
    thuyen.from($('._imgt1'),5.5,{x:-800,ease:Circ.easeOut},'-=2')
    	  .from($('._imgt2'),6,{x:-800,ease: Sine.easeOut},'-=3')	
    	  .from($('._imgt3'),8,{x:-900,ease: Back.easeOut.config(1.7)},'-=1')
    var hq = new TimelineMax({repeat:-1,delay: 3})
    hq.from($('._lt3'),3,{opacity:0,ease:Circ.easeOut})
    var tl = new TimelineLite({});
    tl.from("._it1", 2, {scale:0.5, autoAlpha:0})
    // TweenMax.to("._it2", 10, {opacity:0,ease: Linear.easeOut});
 //    var tl1 = new TimelineMax({});
	// tl1.from("._it2",2,{opacity:0,ease:Circ.easeOut,autoAlpha:0})
	// var tl2 = new TimelineMax({});
 //   	tl2.from("._it3",2,{opacity:0,ease:Circ.easeOut,autoAlpha:0})
 	var it2 = new TimelineLite({});
    it2.from("._it2", 2, {scale:0.5, autoAlpha:0})
    var it3 = new TimelineLite({});
    it3.from("._it3", 2, {scale:0.5, autoAlpha:0})
   	var tmc =  new TimelineMax({});
   	tmc.to(".tmc", 3, {scale:1,rotate:180, opacity:1, ease:Back.easeOut},"+=1")
    TweenMax.to("._lt4", 5, { ease: Linear.easeOut,yoyo: true, x: "+=20",transformOrigin:"50% 50%",modifiers: {x: function(x) {return x % 500;}},repeat: -1});
});