function random(){
    const itemler = ["taş", "kağıt", "makas"]
    const rastgele = Math.floor(Math.random() * 3);
    return itemler[rastgele];
}

function robotSecimi(kullaniciSecimi){
    let oncekiEmoji = document.getElementById("robot-secim-emoji");
    if(oncekiEmoji){
        document.getElementById('robot-secim').removeChild(oncekiEmoji);
    } 

    const secilen = random();
    let secilenEmoji = document.createElement('i');
    secilenEmoji.id = "robot-secim-emoji"
    secilenEmoji.classList.add('em')
    if(secilen === "taş"){
        secilenEmoji.classList.add('em-facepunch')
    } else if(secilen === "kağıt"){
        secilenEmoji.classList.add('em-hand')
    } else {
        secilenEmoji.classList.add('em-spock-hand')
    }
    
    document.getElementById('robot-secim').appendChild(secilenEmoji);
    sonucGoster(kullaniciSecimi, secilen)
}

function sonucGoster(kullaniciSecimi, robotSecimi){
    let durum = '';
    if(kullaniciSecimi === robotSecimi){
        durum = 'Berabere'
    } else if(kullaniciSecimi === 'makas'){
        if(robotSecimi === 'taş'){
            durum = 'Kaybettin!'
        } else if(robotSecimi === 'kağıt'){
            durum = 'Kazandın!'
        }
    } else if(kullaniciSecimi === 'taş'){
        if(robotSecimi === 'kağıt'){
            durum = 'Kaybettin!'
        } else if(robotSecimi === 'makas'){
            durum = 'Kazandın!'
        }
    } else if(kullaniciSecimi === 'kağıt'){
        if(robotSecimi === 'makas'){
            durum = 'Kaybettin!'
        } else if(robotSecimi === 'taş'){
            durum = 'Kazandın!'
        }
    }
    document.getElementById('kazanma-durumu').innerHTML = durum;

}

