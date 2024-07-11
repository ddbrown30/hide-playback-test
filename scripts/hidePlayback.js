Hooks.once('ready', async function () {
    if (!game.user.isGM) {
        document.documentElement.style.setProperty('--soundNameDisplay', "none");
        document.documentElement.style.setProperty('--soundControlDisplay', "none");
    }
});

Hooks.on("renderPlaylistDirectory", (app, html, data) => {
    if (!game.user.isGM) {
        html.find("ol.directory-list").empty();
    }
});
