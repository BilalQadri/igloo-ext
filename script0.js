$("body").append("<div id='_ownwrapper'><div contenteditable='true' id='_ownarea'></div><div id='_owncross' class='_ownbuttons'><img width='8px' height='8px' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA4NJREFUeJzt20tqG0EURuEbexrhLcZgryIDD7KzgMGQPdkZKDc2str9qPuqqvNBT7sE/0EDiRIBgL0eReSU/SHw352IPEQd9ktE3kTkWYiggjsReZHzJk/eh+n4+hBBro/j6+MWweX4RJDr2vhuESyNTwQ5vhrfPIK18Ykg1pbxzSLYOj4RxNgzfnMEe8cnAl9Hxj8cwdHxicBHy/i7I2gdnwhsWYy/OQKr8YnAhuX4qxE8Gh9EBG08xtfn/tqBJzmPRQT5PMf/LSLflw4mgnxp4ysiyJM+viKCeGXGV0QQp9z4igj8lR1fEYGf8uMrIrDXzfiKCOx0N74ignbdjq+I4Ljux1dEsN8w4ysi2G648RURrBt2fEUEy4YfXxHBZ9OMr4jg3XTjKyKYeHw1cwTTj69mjIDxL8wUAeMvmCECxl8xcgSMv9GIETD+TiNFwPgHjRAB4zfqOQLGN9JjBIxvrKcIGN9JDxEwvrPKETB+kIoRMH6wShEwfpIKETB+sswIGL+IjAgYv5jICBi/qIgIGL84zwheROSP07sZ35BnBIzfiV4iYHxH1SNg/ABVI2D8QNUiYPwEVSJg/ETZETB+AVkRMH4h0REwfkFRETB+YSfx+13/Tc6BDTX+TfYHMHYjIreO778VkW+O70cDz3/1Lr8FKtxKxgdR4xNBQdHjE0EhWeMTQQHZ4xNBoirjE0GCauMTQaCq4xNBgOrjE4GjXsYnAgee4z87v5sIGkVc2qhwIRVXRN7YIYJiMq5rEUERmXf1iCBZhYuaRJCkwviKCIJVGl8RQZCK4ysicFZ5fEUETnoYXxGBsZ7GV0RgpMfxFRE06nl8RQQHjTC+IoKdRhpfEcFGI46viGDFyOMrIlgww/iKCC7MNL4ign9mHF9NH8HM46tpI2D8d9NFwPifTRMB4y8bPgLGXzdsBIy/3XARMP5+w0TA+Md1HwHjt+s2Asa3010EjG+vmwgY30/5CBjfX9kIGD9OuQgYP16ZCBg/T3oEjJ8vLQLGryMlggenAxn/GK8IXkXkx9KhT8aHMX4b6wheReTn2qFWETC+DasINo2vWiNgfFutEewaXx2NgPF9HI3g0PhqbwSM72tvBE3jq60RMH6MrRGYjK/WImD8WGsRmI6vliJg/BxLEbiMry4jYPxclxG4jq80AsavQSMIGV/dC+NXcpIvft4FgOv+AgbXp46K+BwUAAAAAElFTkSuQmCC' /> </div><div id='_owntick' class='_ownbuttons'><img alt='save note' width='10px' height='10px' src='data:image/png;base64,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'/> </div></div>");





$("#_owntick > img").hover(function (){
    $(this).fadeTo("fast", 1);
    $(this).css('width',20);
    $(this).css('height',20);
    
}, function () {
    $(this).fadeTo("fast", 0.3);
    $(this).css('width',10);
    $(this).css('height',10);
});

$("#_owncross > img").hover(function (){
    $(this).fadeTo("fast", 1);
    $(this).css('width',16);
    $(this).css('height',16);
}, function () {
    $(this).fadeTo("fast", 0.3);
    $(this).css('width',8);
    $(this).css('height',8);
});



//// get and set cache note  ... send also Url for the purpose of saving history

getCacheNote(location.href,document.title);

// send note

$("#_owntick > img").click(function () {
    var text = $("#_ownarea").html();
    sendMessage(text, 'note');
    $("#_ownarea").html("");
    $( "#_ownarea" ).focus();
});

// clear

$("#_owncross").click(function () {

    $("#_ownarea").html("");
    $( "#_ownarea" ).focus();
});


// send cache

$( "#_ownarea" ).keyup(function (e) {
    var code = e.keyCode || e.which;
    if(code != 116) {
	$( "#_ownarea" ).focus();
	var text = $("#_ownarea").html();
	sendCacheNote(text);
    }
});

/// focus
$( document ).ready(function() {
    $( "#_ownarea" ).focus();
});


//////////////////////

function handle_mousedown(e){
    window.my_dragging = {};
    my_dragging.pageX0 = e.pageX;
    my_dragging.pageY0 = e.pageY;
    my_dragging.elem = this;
    my_dragging.offset0 = $(this).offset();
    function handle_dragging(e){
        var left = my_dragging.offset0.left + (e.pageX - my_dragging.pageX0);
        var top = my_dragging.offset0.top + (e.pageY - my_dragging.pageY0);
        $(my_dragging.elem)
		     .offset({top: top, left: left});
    }
    function handle_mouseup(e){
        $('body')
        .off('mousemove', handle_dragging)
        .off('mouseup', handle_mouseup);
    }
    $('body')
			      .on('mouseup', handle_mouseup)
			      .on('mousemove', handle_dragging);
}
/////////////
var dragStatus = false;

$('#_ownwrapper').dblclick(function () {

    if(dragStatus) {
	$('#_ownwrapper').unbind('mousedown',handle_mousedown);
	dragStatus = false;
    }else{
	$('#_ownwrapper').bind('mousedown',handle_mousedown);
	dragStatus = true;
    }
});



