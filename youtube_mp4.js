javascript: (function () {
    /*injects html to the beginning of webpage*/

    let mainDiv = document.createElement('div');
    mainDiv.style.position = 'absolute';
    mainDiv.id = "inject_download_menu";
    mainDiv.style.background = 'purple';
    mainDiv.style.color = 'white';
    mainDiv.style.width = '100%';
    mainDiv.style.height = '8%';
    mainDiv.style.zIndex = '9999';

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
        temporary;
    if (isMobile) {
        console.log("mobile");
        console.log(window.ytInitialPlayerResponse.streamingData);
        temporary = window.ytInitialPlayerResponse.streamingData.formats;
        mainDiv.style.background = 'green';
    } else {
        console.log("Desktop");
        console.log(window.ytplayer.bootstrapPlayerResponse.streamingData);
        temporary = window.ytplayer.bootstrapPlayerResponse.streamingData.formats;
        mainDiv.style.background = 'red';
    }

    document.getElementsByTagName('body')[0].prepend(mainDiv);
    temporary.forEach(e => {
        console.log(e.url + " " + e.qualityLabel);
        createDiv(e.url, e.qualityLabel);
    });
    
    function createDiv(url, name) {
        let a = document.createElement('a');
        a.href = url;
        a.id = "inject_media_" + name;
        a.innerText = "Download " + name;
        a.style.position = 'absolute';
        document.getElementById('inject_download_menu').appendChild(a.cloneNode(true));
        document.getElementById('inject_download_menu').appendChild(document.createElement('br').cloneNode(true));
    }
})();
