var toVit = $("span + input");
toVit.on("focus",function(){
	var span = $(this).prev();
	span.css("display","none");
})
toVit.on("blur",function(){
	var span = $(this).prev();
	span.css("display","block");
	if($(this).val() != ""){
		span.css("display","none");
	}
})

var active = $("#box>input");
active.on("mouseover",function(){
	$(this).addClass("active");
})
active.on("mouseout",function(){
	$(this).removeClass("active");
})

