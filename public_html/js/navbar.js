// JavaScript Document

$(document).ready(function() {   
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
			var list = $("#item_list");
            sideslider.click(function(event){
                $(sel).toggleClass('in');
                $(sel2).toggleClass('out');
				list.addClass("pull-left");
		list.removeClass("pull-right");
            });
        });
		
