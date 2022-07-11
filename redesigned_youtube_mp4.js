javascript: (function () {
    /*injects html to the beginning of webpage*/

    let mainDiv = document.createElement('div');
    mainDiv.style.position = 'absolute';
    mainDiv.id = "inject_download_menu";
    mainDiv.style.background = 'hsla(233,12%,13%,1)';
    mainDiv.style.color = 'white';
    mainDiv.style.width = '100%';
    mainDiv.style.height = '14%';
    mainDiv.style.zIndex = '9999';
    
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
        temporary;
    if (isMobile) {
        temporary = window.ytInitialPlayerResponse.streamingData.formats;
    } else {
        temporary = window.ytplayer.bootstrapPlayerResponse.streamingData.formats;
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
        a.innerText = name;
        a.style.position = 'absolute';
        a.style.background = 'rgb(255,221,64)';
        a.style.width = '100%';
        a.style.display = 'flex';
        a.style.justifyContent = 'center';
        a.style.alignItems = 'center';
        a.style.borderRadius = '0.9em';
        a.style.fontWeight = 'bold';
        a.style.fontSize = '1.5em';
        a.style.color = '#000';

        document.getElementById('inject_download_menu').appendChild(a.cloneNode(true));
        document.getElementById('inject_download_menu').appendChild(document.createElement('br').cloneNode(true));
        document.getElementById('inject_download_menu').appendChild(document.createElement('br').cloneNode(true));
    }
})();
