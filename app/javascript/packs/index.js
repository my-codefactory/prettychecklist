jQuery(function($){
		$(".deleteAction").click(function(){
			CONST current_item = $(this).parents(".trash")[0]
			if(confirm("Are you sure?")){
				$.ajax(url:{
					url: '/todo_lists/' + $(current_item).attr('data-item_id'),
					type: 'POST',
					data: {_method: 'DELETE'},
					success: function(){
						current_item.fadeOut(200)
					}
					
				})
			}
		})
})