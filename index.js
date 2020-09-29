function initPage() {
    var container = $('#fullpage');
    for(var i=1; i<=13; i++) {
        var section = $('<div>').addClass('section full-image').css('background-image', `url("images/wedding/${i}.jpg")`);
        container.append(section);
    }
}

$(document).ready(function() {
    console.info("document ready")
    initPage();
    $('#fullpage').fullpage();
    $('.arrows').click(function() {
        $.fn.fullpage.moveSectionDown();
    });
});