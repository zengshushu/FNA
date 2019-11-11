jQuery(document).ready(function() {
			  
"use strict";			  
			  
jQuery.fn.toggleClick=function(){
	var functions=arguments
	return this.click(function(){
		var iteration=jQuery(this).data('iteration')||0
		functions[iteration].apply(this,arguments)
		iteration= (iteration+1) %functions.length
		jQuery(this).data('iteration',iteration)
	})
}


	jQuery('.gear').toggleClick(function(){
	
		jQuery('.style_switcher').css('left' , '0');
		
	},
	
	function(){
		
		jQuery('.style_switcher').css('left' , '-200px');
		
	})
		  
						  
jQuery('.style-classic').click(function(){  
	  jQuery("link[href^='css/style']").attr("href", "css/style-blue-default.css");
	  jQuery(".logo img").attr("src", "images/cleanstart_logo.png");
	  
	});
	  
jQuery('.style-golden').click(function(){  
	  jQuery("link[href^='css/style']").attr("href", "css/style-golden.css");
	  jQuery(".logo img").attr("src", "images/cleanstart_logo_golden.png");
	});


jQuery('.style-purple').click(function(){  
	  jQuery("link[href^='css/style']").attr("href", "css/style-purple.css");
	  jQuery(".logo img").attr("src", "images/cleanstart_logo_purple.png");
	});

 
   
});
    