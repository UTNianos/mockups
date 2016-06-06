$(function(){			
	editor = createEditor('comment-editor');						
	$("#comment-button").click(function(){ postData();});
});

function postData()
{
	var data = editor.get('nativeEditor').getData();				
	var commentDiv = $("<div class=\"comment\"></div>");
	commentDiv.append("<span class=\"comment-user\">An&oacute;nimo</span>");
	commentDiv.append(data);
	
	$("#comments").append("<hr class=\"section-divider-sm\" />");
	$("#comments").append(commentDiv);

	$("#comment-editor").text("");			
}