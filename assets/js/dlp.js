$(function(){

    // Render ace editor for HTML editor
    var html_editor = ace.edit("html-editor");
    html_editor.setTheme("ace/theme/solarized_dark");
    html_editor.getSession().setMode("ace/mode/html");

    function updateHTMLOutput(){
        var $frame = $('#html-output');
        $('div#right-panel').html( $frame );
        var doc = $frame[0].contentWindow.document;
        var $html = $('html',doc);
        $html.html(html_editor.getValue());
    }

    // render the HTML output once upon loading the page
    updateHTMLOutput();


    // then update the HTML output every time the input is changed
    html_editor.getSession().on('change', function(e){
        updateHTMLOutput();
    });

});