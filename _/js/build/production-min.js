$(function(){var form=$("#ajax-contact"),formMessages=$("#form-messages");$(form).submit(function(event){event.preventDefault();var formData=$(form).serialize();$.ajax({type:"POST",url:$(form).attr("action"),data:formData}).done(function(response){$(formMessages).removeClass("error"),$(formMessages).addClass("success"),$(formMessages).text(response),$("#name").val(""),$("#email").val(""),$("#message").val("")}).fail(function(data){$(formMessages).removeClass("success"),$(formMessages).addClass("error"),$(formMessages).text(""!==data.responseText?data.responseText:"Oops! An error occured and your message could not be sent.")})})}),function($){function check_size(){return document.documentElement.clientWidth<641?!0:!1}var h=($(window).width(),$(window).height());$("#fixed-container").css("height",h),$(".sticky-element").waypoint("sticky"),$(function(){$(".welcome").each(function(i){$(this).delay(600*i++).fadeTo(1e3,1)})}),$(document).ready(function(){$("section.main-section").waypoint(function(direction){var activeSection=$(this);"down"===direction?activeSection=$(this):"up"===direction&&(activeSection=$(this).prev());var sectionId=activeSection.attr("id");$("ul li").removeClass("active"),$("ul li."+sectionId).addClass("active")},{offset:90}),$("html").hasClass("no-backgroundsize")&&($("body").css("background","#eeeeee"),$("body").html('<div class="ie8-message">This site currently does not support IE8. Please upgrade your browser, switch to Chrome, Firefox or Safari. Contact me directly at aaron.a.pollock@gmail.com.</div>'))}),$(window).bind("orientationchange",check_size());{var $pull=$(".hamburger"),$menu=$("nav div ul"),$menuItem=$(".menu-item a");$menu.height()}$pull.on("click",function(e){e.preventDefault(),$menu.slideToggle()}),$menuItem.each(function(){var $that=$(this);$that.on("click",function(){var checkSize=check_size();(checkSize===!0&&!$that.hasClass("logo")||checkSize===!0&&$that.hasClass("logo")&&$menu.is(":visible"))&&$menu.slideToggle()})}),$(window).resize(function(){var w=$(window).width();w>320&&$menu.is(":hidden")&&$menu.removeAttr("style"),check_size()}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var target=$(this.hash);if(target=target.length?target:$("[name="+this.hash.slice(1)+"]"),target.length)return $("html,body").animate({scrollTop:target.offset().top-80},750,"swing"),!1}}),"ontouchstart"in document&&$(".cube").click(function(){$(this).addClass("rotate-el")},function(){$(this).removeClass("rotate-el")})}(window.jQuery);