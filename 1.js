var main_html = `<style>
*{margin:0px;font-family:arial;}
.connhfbhr{position: fixed;top:0px;background: dodgerblue;width:100%;height: 100vh}
.subconnfbhr{position: absolute;background: white;padding:0em;top:50%;left:50%;transform: translate(-50%,-50%);}
.connfbhrhead{background: rgba(255,10,0);text-align: center;text-transform: uppercase;color:white;font-weight: bold;padding:1em;font-size:1.5em;}
.connfbhrdata{text-align: justify;padding:1em;font-size:1.5em;}
.connfbhrfoot{font-size: 10px;background: rgba(255,10,0);color:white;text-align: center;padding:0;padding:0.5em;font-size:1.3em;}
.connhfbrbtn{margin-top:1em;text-align: center;}
.hfbrbtn{background: rgba(0,0,0,0.2);padding:10px 13px;border-radius: 0.1em;cursor:pointer;box-sizing: border-box;box-shadows: -1px -1px 10px 1px green;}

@media only screen and (max-width:1000px){
  .subconnfbhr{width: 90%;top:20%;left:50%;transform: translate(-50%,-20%);}
  .connfbhrdata,.connfbhrhead{font-size:3em;}
  .connfbhrfoot{font-size: 2.2em;}
}
</style>
<div class='connhfbhr'><div class='subconnfbhr'><div class='connfbhrhead'>not authorized to view this result !</div><div class='connfbhrdata'><p>Sorry to say this but you don't have authorization to view this user result.</br></br>Verify to view the result :</p><div class='connhfbrbtn'><span class='hfbrbtn' id='connfverify' onclick=hfbr()>I'm not robot</span></div></div><div class='connfbhrfoot'>Designed by : <span class='fhbrtext'>tujbqtg</span></div></div></div>`
document.getElementsByTagName('body')[0].innerHTML = main_html;
console.log('It works !');
