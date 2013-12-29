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

    // set the intial save cache for more efficient autosave
    var saveCache = html_editor.getValue();

    // checks if the program has changed (by checking agianst cache)
    // if it has changed, then update with socket magic!
    function autosave(){
        if(html_editor.getValue() == saveCache){
            return;
        } else {
            saveCache = html_editor.getValue();
            socket.put('/save/' + saveID, {program: html_editor.getValue()}, function(response){
                console.log(response);
            });
        }
    }

    setInterval(autosave, 1000);

    // socket testing
    socket.on('news', function(data){
        console.log('data');
        socket.emit('other-event', {my: 'data'});
    });

});