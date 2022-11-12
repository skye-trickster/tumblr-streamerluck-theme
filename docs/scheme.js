$(document).ready(function () {
	$("html").addClass("loaded");
	if (localStorage.getItem("dark") === null) {
		localStorage.setItem("dark", true);
	}

	let darkDefault = localStorage.getItem("dark") === "true";

	function setMode(lightMode) {
		$(".scheme div").text(lightMode ? "light_mode" : "dark_mode");
		$(":root").toggleClass("light-mode", lightMode);
	}

	setMode(!darkDefault);

	$(".scheme").click(function () {
		darkDefault = !darkDefault;
		setMode(!darkDefault);
		localStorage.setItem("dark", darkDefault);
	});

    const tags = `
        muse zinnia, 
        muse rayquaza, 
        muse latias
    `;
    const tagList = tags.split(',').map(x => x.trim());
    tagList.forEach(function(tag) {
        $(".taglist-common").append(`
            <div class="tag">
                <a href="#">${tag}</a>
            </div>
        `)
    })
});
