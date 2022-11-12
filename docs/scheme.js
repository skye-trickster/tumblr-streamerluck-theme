$(document).ready(function() {
    $("html").addClass('loaded');
    if (localStorage.getItem('dark') === null) {
        localStorage.setItem('dark', true);
    }

    let darkDefault = localStorage.getItem('dark') === 'true';


    function setMode(lightMode) {
        $(".scheme div").text(lightMode ? "light_mode" : "dark_mode");
        $(":root").toggleClass("light-mode", lightMode);
    }

    setMode(!darkDefault);

    $(".scheme").click(function() {
        darkDefault = !darkDefault;
        setMode(!darkDefault);
        localStorage.setItem('dark', darkDefault)
    })
/*
    // TODO: delete this.
    $(".follow").click(function() {
        $(":root").toggleClass('side-flip');
    })

    $(".credit").click(function() {
        $(":root").toggleClass('post-flip');
    })*/
});