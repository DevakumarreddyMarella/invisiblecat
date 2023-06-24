function switchoff(){
    document.getElementById("bulbimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchstatus").textContent="Switch Off";
    document.getElementById("on").style.backgroundColor="#22c552";
    document.getElementById("off").style.backgroundColor="#cbd2d9";
}
function switchon(){
    document.getElementById("bulbimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchstatus").textContent="Switch On";
    document.getElementById("off").style.backgroundColor="red";
    document.getElementById("on").style.backgroundColor="#cbd2d9";

}