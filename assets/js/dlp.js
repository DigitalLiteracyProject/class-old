// Render ace editor for HTML editor
var html_editor = ace.edit("html-editor");
html_editor.setTheme("ace/theme/solarized_dark");
html_editor.getSession().setMode("ace/mode/html");

html_editor.getSession().on('change', function(e){
    var $frame = $('#html-output');
    $('div#right-panel').html( $frame );
    var doc = $frame[0].contentWindow.document;
    var $html = $('html',doc);
    $html.html(html_editor.getValue());
});