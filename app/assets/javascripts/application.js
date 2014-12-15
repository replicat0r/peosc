// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .




$(document).ready(function() {
                $("body").iealert({
                    support: "ie8",
                    text: "Our website has detected that you are using an outdated browser. Using your current browser will prevent you from accessing features on our website. An upgrade is not required, but is strongly recommend to improve your browsing experience on our website.",
                    upgradeLink: "https://www.google.com/intl/en/chrome/browser/"
                });


                var time = new Date();
                time = new Date(2015, 10, 15, 0, 0);
                $('#defaultCountdown').countdown({
                    until: time
                });

                $('#removeCountdown').toggle(function() {
                    $(this).text('Re-attach');
                    $('#defaultCountdown').countdown('destroy');
                }, function() {
                    $(this).text('Remove');
                    $('#defaultCountdown').countdown({
                        until: time
                    });
                });


                $('.show').fadeIn(600);

                (function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    this.innerHTML = "Menu";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}

})();



            });