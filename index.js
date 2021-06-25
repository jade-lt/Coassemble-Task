$(document).ready(function () {
    $("ul.navbar > li").click(function (e) {
        $("ul.navbar > li").removeClass("clicked");
        $(this).addClass("clicked");
    });

    $("ul.navbar > li").click(function (e) {
        $("tab-count").removeClass("tab-count-clicked");
        $(this).addClass("tab-count-clicked");
    });
});
