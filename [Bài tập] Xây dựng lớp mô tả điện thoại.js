let Mobie = function () {
    //chức năng tật tắt đt
    this.batTatIphone = function () {
        let iphoneAlt = document.getElementById("iphoneId").alt;
        if (iphoneAlt == "iphone1") {
            iphoneAlt = "iphone2";
        } else if (iphoneAlt == "iphone2") {
            iphoneAlt = "iphone1";
        }
        document.getElementById("iphoneId").alt = iphoneAlt;
        document.getElementById("iphoneId").src = 'img/' + iphoneAlt + '.jpg';
    }
}
let iphoneXs = new Mobie();

