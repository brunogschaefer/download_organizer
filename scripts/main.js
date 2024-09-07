chrome.downloads.onDeterminingFilename.addListener(function (item, __suggest) {
    function suggest(item, conflictAction) {
        __suggest({
            filename: item,
            conflictAction: conflictAction,
            conflict_action: conflictAction
        });
    }

    var fileExtension = item.filename.substr(item.filename.lastIndexOf('.') + 1);

    if (fileExtension.length === 0) {
        suggest("others" + "/" + item.filename, "overwrite")
    } else {
        suggest(fileExtension + "/" + item.filename, "overwrite")
    }
});