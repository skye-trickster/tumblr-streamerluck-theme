$(document).ready(function() {

    if (localStorage.getItem('dark') === null) {
        localStorage.setItem('dark', true);
    }

    let darkDefault = localStorage.getItem('dark') === 'true';


    function setMode(lightMode) {
        $(".scheme").text(lightMode ? "light_mode" : "dark_mode");
        $(":root").toggleClass("light-mode", lightMode);
    }

    setMode(!darkDefault);

    $(".scheme").click(function() {
        darkDefault = !darkDefault;
        setMode(!darkDefault);
        localStorage.setItem('dark', darkDefault)
    })
});