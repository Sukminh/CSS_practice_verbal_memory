let live = 3;
let score = 0;
let words = ["conception", "doll", "cunning", "expenditure", "respectable",
        "package", "work", "resort", "scrape", "part", "episode", "assertive",
        "excavate", "relief", "food", "twilight", "retiree", "exotic", "committee",
        "struggle", "raw", "healthy", "joy", "fragment", "expectation", "commemorate",
        "matrix", "eyebrow", "variable", "gossip", "differ", "defeat", "lot", "bite",
        "professor", "finished", "discount", "hospitality", "exclude", "trail", "tourist",
        "bean", "training", "evolution", "excavation", "exceed", "bulletin", "credit",
        "comfortable", "speed"];
let used = [];
let usedOrNew = 0;

function start() {
    let icon = document.getElementsByClassName("fa-solid fa-spell-check fa-fade fa-6x");
    icon[0].parentNode.removeChild(icon[0]);
    let title = document.getElementsByClassName("mainTitle");
    title[0].parentNode.removeChild(title[0]);
    let des = document.getElementsByClassName("mainDescription");
    des[0].parentNode.removeChild(des[0]);
    let but = document.getElementsByClassName("mainButton");
    but[0].parentNode.removeChild(but[0]);
    createMain();
}

function choose() {
    usedOrNew = Math.floor(Math.random() * 4);
    if(used.length == 0) {
        usedOrNew = 1;
    }

    let u = 0;
    if(usedOrNew == 0) {
        u = Math.floor(Math.random() * used.length);
        return used[u];
    }
    else {
        u = Math.floor(Math.random() * words.length);
        let word = words[u];
        used.push(word);

        let temp = words.slice(0, u);
        if(u == words.length-1) {
            words = temp;
        }
        else {
            words = temp.concat(words.slice(u+1));
        }
        return word;
    }
}

function newMain() {
    let dlsbox = document.getElementsByClassName("liveScoreBox");
    dlsbox[0].parentNode.removeChild(dlsbox[0]);
    let dtarget = document.getElementsByClassName("targetWord");
    dtarget[0].parentNode.removeChild(dtarget[0]);
    let dbutbox = document.getElementsByClassName("buttonBox");
    dbutbox[0].parentNode.removeChild(dbutbox[0]);
    createMain();
}

function createMain() {
    let main = document.getElementsByClassName("mainScreen");
    let lsbox = document.createElement("div");
    lsbox.className = "liveScoreBox";
    lsbox.innerHTML += "Lives | " + live + "&emsp;&emsp;&emsp;" + "Score | " + score;
    main[0].appendChild(lsbox);    
    
    let w = choose();
    let target = document.createElement("div");
    target.className = "targetWord";
    target.innerHTML += w;
    main[0].appendChild(target);

    let seen = document.createElement("button");
    seen.className = "startButton";
    seen.id = "seenButton";
    seen.onclick = function() {
        scoreOrLive(0);
    };
    seen.innerHTML += "SEEN";

    let nnew = document.createElement("button");
    nnew.className = "startButton";
    nnew.id = "newButton";
    nnew.onclick = function() {
        scoreOrLive(1);
    };
    nnew.innerHTML += "NEW";
    
    let butbox = document.createElement("div");
    butbox.className = "buttonBox";
    butbox.appendChild(seen);
    butbox.appendChild(nnew);
    main[0].appendChild(butbox);
}

function scoreOrLive(seenOrNew) {
    let sorl = 0;
    if(seenOrNew == 0) {
        if(usedOrNew == 0) {
            sorl = 1;
        }
        else {
            sorl = 0;
        }
    }
    else {
        if(usedOrNew == 0) {
            sorl = 0;
        }
        else {
            sorl = 1;
        }
    }

    if(sorl == 0) {
        live--;
    }
    else {
        score++;
    }

    if(live <= 0) {
        finish();
    }
    else {
        newMain();
    }

}

function finish() {
    let dlsbox = document.getElementsByClassName("liveScoreBox");
    dlsbox[0].parentNode.removeChild(dlsbox[0]);
    let dtarget = document.getElementsByClassName("targetWord");
    dtarget[0].parentNode.removeChild(dtarget[0]);
    let dbutbox = document.getElementsByClassName("buttonBox");
    dbutbox[0].parentNode.removeChild(dbutbox[0]);

    let main = document.getElementsByClassName("mainScreen");
    let icon = document.createElement("div");
    icon.className = "fa-solid fa-spell-check fa-fade fa-6x";
    main[0].appendChild(icon);    

    let verbalText = document.createElement("div");
    verbalText.className = "verbalText";
    verbalText.innerHTML += "Verbal Memory";
    main[0].appendChild(verbalText);    

    let scoreText = document.createElement("div");
    scoreText.className = "scoreText";
    scoreText.innerHTML += score + " words";
    main[0].appendChild(scoreText);

    let tryAgain = document.createElement("button");
    tryAgain.className = "mainButton";
    tryAgain.innerHTML += "Try again";
    tryAgain.onclick = function() {
        again();
    }
    main[0].appendChild(tryAgain);
}

function again() {
    let icon = document.getElementsByClassName("fa-solid fa-spell-check fa-fade fa-6x");
    icon[0].parentNode.removeChild(icon[0]);
    let title = document.getElementsByClassName("verbalText");
    title[0].parentNode.removeChild(title[0]);
    let des = document.getElementsByClassName("scoreText");
    des[0].parentNode.removeChild(des[0]);
    let but = document.getElementsByClassName("mainButton");
    but[0].parentNode.removeChild(but[0]);

    live = 3;
    score = 0;
    words = ["conception", "doll", "cunning", "expenditure", "respectable",
            "package", "work", "resort", "scrape", "part", "episode", "assertive",
            "excavate", "relief", "food", "twilight", "retiree", "exotic", "committee",
            "struggle", "raw", "healthy", "joy", "fragment", "expectation", "commemorate",
            "matrix", "eyebrow", "variable", "gossip", "differ", "defeat", "lot", "bite",
            "professor", "finished", "discount", "hospitality", "exclude", "trail", "tourist",
            "bean", "training", "evolution", "excavation", "exceed", "bulletin", "credit",
            "comfortable", "speed"];
    used = [];
    usedOrNew = 0;

    createMain();
}