function dark(){window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var n,i,e,a,t=.05,o=document.getElementById("universe"),r=!0,s="180,184,240",d="226,225,142",l="226,225,224",c=[];function u(){n=window.innerWidth,i=window.innerHeight,e=.216*n,o.setAttribute("width",n),o.setAttribute("height",i)}function h(){a.clearRect(0,0,n,i);for(var t=c.length,e=0;e<t;e++){var o=c[e];o.move(),o.fadeIn(),o.fadeOut(),o.draw()}}function m(){this.reset=function(){this.giant=y(3),this.comet=!this.giant&&!r&&y(10),this.x=f(0,n-10),this.y=f(0,i),this.r=f(1.1,2.6),this.dx=f(t,6*t)+(this.comet+1-1)*t*f(50,120)+2*t,this.dy=-f(t,6*t)-(this.comet+1-1)*t*f(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=f(.2,1-.4*(this.comet+1-1)),this.do=f(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>n||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(a.beginPath(),this.giant)a.fillStyle="rgba("+s+","+this.opacity+")",a.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){a.fillStyle="rgba("+l+","+this.opacity+")",a.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var t=0;t<30;t++)a.fillStyle="rgba("+l+","+(this.opacity-this.opacity/20*t)+")",a.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),a.fill()}else a.fillStyle="rgba("+d+","+this.opacity+")",a.rect(this.x,this.y,this.r,this.r);a.closePath(),a.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x>n-n/4||this.y<0)&&(this.fadingOut=!0)},setTimeout(function(){r=!1},50)}function y(t){return Math.floor(1e3*Math.random())+1<10*t}function f(t,e){return Math.random()*(e-t)+t}u(),window.addEventListener("resize",u,!1),function(){a=o.getContext("2d");for(var t=0;t<e;t++)c[t]=new m,c[t].reset();h()}(),function t(){document.getElementsByTagName("html")[0].getAttribute("data-theme")=="dark"&&h(),window.requestAnimationFrame(t)}()}if(document.querySelector(".video > video")!=null){var video=document.querySelector(".video > video");video.setAttribute("preload","none")}function switchDarkMode(){const t=document.documentElement.getAttribute("data-theme")==="dark"?"dark":"light";if(t==="light"){activateDarkMode();saveToLocal.set("theme","dark",2);GLOBAL_CONFIG.Snackbar!==undefined&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)}else{activateLightMode();saveToLocal.set("theme","light",2);GLOBAL_CONFIG.Snackbar!==undefined&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)}typeof utterancesTheme==="function"&&utterancesTheme();typeof changeGiscusTheme==="function"&&changeGiscusTheme();typeof FB==="object"&&window.loadFBComment();typeof runMermaid==="function"&&window.runMermaid()}function hideTodayCard(){document.getElementById("todayCard")&&document.getElementById("todayCard").classList.add("hide")}$(".topGroup").hover(function(){},function(){document.getElementById("todayCard").classList.remove("hide"),document.getElementById("todayCard").style.zIndex=1});var type=document.querySelector("meta[property='og:type']").content;if(type=="article"){var color=document.getElementsByTagName("meta")["img-color"].content;document.documentElement.style.setProperty("--asa-main",color);document.querySelector("#post-cover").classList.remove("loading");document.querySelector("#post-cover").classList.add("loaded");var imglist=document.querySelectorAll("p > img");var i;for(i=0;i<imglist.length;i++){let t=document.createElement("p");t.classList.add("img-alt");t.innerHTML=imglist[i].getAttribute("alt");imglist[i].parentNode.insertBefore(t,imglist[i].nextSibling)}}function getScrollTop(){var t=0;if(document.documentElement&&document.documentElement.scrollTop){t=document.documentElement.scrollTop}else if(document.body){t=document.body.scrollTop}if(!t&&document.querySelector(".is-top-bar")==null){document.querySelector("#nav").style.background="transparent";document.querySelector("#nav").style.backdropFilter="";document.querySelector("#nav").style.boxShadow="none"}else{document.querySelector("#nav").style.background="var(--asa-card-bg)";document.querySelector("#nav").style.backdropFilter="saturate(180%) blur(15px)";document.querySelector("#nav").style.boxShadow="0 5px 6px -5px rgb(133 133 133 / 60%)"}}self.setInterval("getScrollTop()",500);if(window.location.href=="http://localhost:4000/star/"||window.location.href=="https://asa-world.github.io/star/"||window.location.href=="https://asa-world.cn/star/"||window.location.href=="http://asa-world.cn/star/"){if(isMobileDevice()){nopei()}else{dark()}}if(window.location.href=="http://localhost:4000/categories/"||window.location.href=="https://asa-world.github.io/categories/"||window.location.href=="https://asa-world.cn/categories/"||window.location.href=="http://asa-world.cn/categories/"){document.querySelector("#aside-content > div.sticky_layout").style.display="none";document.querySelector("#page > div.category-lists > ul").style.display="none";document.querySelector(".aside-content").style.display="none";document.querySelector("#page > div.category-lists > div.category-title.is-center").innerHTML="专栏";var category_lists=document.querySelectorAll("#page > div.category-lists > ul > li");var i;var create_li=document.querySelector("#page > div.category-lists > div.is-center.tag-cloud-list");for(i=0;i<category_lists.length;i++){let t=document.createElement("a");t.innerHTML='<span class="tags-punctuation">#</span><p style="display: inline-block; margin: auto;">haha</p><span class="tagsPageCount">num</span>';t.href=category_lists[i].childNodes[0].href;t.childNodes[1].innerHTML=category_lists[i].childNodes[0].innerHTML;t.childNodes[2].innerHTML=category_lists[i].childNodes[1].innerHTML;create_li.insertAdjacentElement("beforeend",t)}}if(window.location.href=="http://localhost:4000/archives/"||window.location.href=="https://asa-world.github.io/archives/"||window.location.href=="https://asa-world.cn/archives/"||window.location.href=="http://asa-world.cn/archives/"){document.querySelector("#site-title").style.display="none";document.querySelector("#content-inner").style.marginTop="-20em";document.querySelector("#archive").style.width="90%"}if(document.querySelector(".aside-content")!=null){if(document.querySelector(".aside-content").style.display=="none"){document.querySelector("#page").style.margin="auto"}}if(window.location.href=="http://localhost:4000/about/"||window.location.href=="https://asa-world.github.io/about/"||window.location.href=="https://asa-world.cn/about/"||window.location.href=="http://asa-world.cn/about/"){show_date_time()}function show_date_time(){window.setTimeout("show_date_time()",1e3);BirthDay=new Date("1/20/2022 0:0:0");today=new Date;timeold=today.getTime()-BirthDay.getTime();sectimeold=timeold/1e3;secondsold=Math.floor(sectimeold);msPerDay=24*60*60*1e3;e_daysold=timeold/msPerDay;daysold=Math.floor(e_daysold);e_hrsold=(e_daysold-daysold)*24;hrsold=Math.floor(e_hrsold);e_minsold=(e_hrsold-hrsold)*60;minsold=Math.floor((e_hrsold-hrsold)*60);seconds=Math.floor((e_minsold-minsold)*60);span_dt_dt.innerHTML=" <font style=color:#2d85f0>"+daysold+"</font> 天 <font style=color:#f4433c>"+hrsold+"</font> 时 <font style=color:#ffbc32>"+minsold+"</font> 分 <font style=color:#0aa858>"+seconds+"</font> 秒"}window.onscroll=percent;function percent(){let t=document.documentElement.scrollTop||window.pageYOffset,e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-document.documentElement.clientHeight,o=Math.round(t/e*100),n=document.querySelector("#percent");o<=99||(o=99),n.innerHTML=o}document.getElementById("page-name").innerText=document.title.split(" | asa-world")[0];if(window.location.href=="http://localhost:4000/about/"||window.location.href=="https://asa-world.github.io/about/"||window.location.href=="https://asa-world.cn/about/"||window.location.href=="http://asa-world.cn/about/"){let t=document.querySelectorAll(".mask > span");var i=0;var j=1;self.setInterval("set_Attribute()",2e3);function set_Attribute(){t[i].setAttribute("data-up","data-up");t[j].setAttribute("data-show","data-show");delete_Attribute();if(i==t.length-1){i=0}else{i++}if(j==t.length-1){j=0}else{j++}}function delete_Attribute(){if(i==0){t[t.length-1].removeAttribute("data-up");t[j-1].removeAttribute("data-show")}else{if(j==0){t[i-1].removeAttribute("data-up");t[t.length-1].removeAttribute("data-show")}else{t[i-1].removeAttribute("data-up");t[j-1].removeAttribute("data-show")}}}document.getElementById("a_count").innerText=document.getElementById("article_c").textContent;document.getElementById("le_count").innerText=document.getElementById("word_c").textContent;document.getElementById("site_count").innerText="计算中";document.getElementById("last_g").innerText="翻阅中";self.setInterval("updata_site_info()",2e3);function updata_site_info(){var t=document.getElementById("busuanzi_value_site_pv").textContent;var e=document.getElementById("last-push-date").textContent;if(t>0){document.getElementById("site_count").innerText=t}if(typeof e==="string"){document.getElementById("last_g").innerText=e}}}if(document.getElementById("author-info__sayhi")!=null){let t=new Date;if(t.getHours()>=0&&t.getHours()<12){document.getElementById("author-info__sayhi").innerText="上午好! 我是"}else if(t.getHours()>=12&&t.getHours()<18){document.getElementById("author-info__sayhi").innerText="下午好! 我是"}else{document.getElementById("author-info__sayhi").innerText="晚上好! 我是"}}var s=document.querySelectorAll(".article-meta.tags>a");var i;for(i=0;i<s.length;i++){var para=document.createElement("a");var txt=document.createTextNode(" #");para.appendChild(txt);s[i].parentNode.insertBefore(para,s[i])}if(window.location.href=="http://localhost:4000/sawords/"||window.location.href=="https://asa-world.github.io/sawords/"||window.location.href=="https://asa-world.cn/sawords/"||window.location.href=="http://asa-world.cn/sawords/"){if(isMobileDevice()){nopei()}else{randomstar()}}function nopei(){var t=document.getElementById("content-inner");t.innerHTML=`
    <div class="bupei"><svg id="icon" viewBox="0 0 800 600">
      <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
      <path d="M300,320 L540,320" id="middle"></path>
      <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
    </svg>
	</div><div style="text-align: center;"><b>本页仅适配电脑端，点击左上角返回首页</b></div>
  `;var e=document.createElement("style");e.innerHTML=`
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');
	
	.bupei{
		margin-top: 10em;
		text-align: center;
	}


    #icon {
      width: 200px;
      height: 150px;
      cursor: pointer;
      transform: translate3d(0,0,0);
    }

    path {
      fill: none;
      transition: stroke-dashoffset 0.5s cubic-bezier(0.250, -0.250, 0.750, 1.250), stroke-dasharray 0.5s cubic-bezier(0.250, -0.250, 0.750, 1.250);
      stroke-width: 40px;
      stroke-linecap: round;
      stroke: red;
      stroke-dashoffset: 0px;
    }

    path#top, path#bottom {
      stroke-dasharray: 240px 950px;
    }

    path#middle {
      stroke-dasharray: 240px 240px;
    }

    .cross path#top, .cross path#bottom {
      stroke-dashoffset: -650px;
    }

    .cross path#middle {
      stroke-dashoffset: -115px;
      stroke-dasharray: 1px 220px;
    }
  `;document.head.appendChild(e);var o=setInterval(function(){t.classList.toggle("cross")},1500)}function isMobileDevice(){return/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.screen.width<768}function randomstar(){var t=document.querySelectorAll(".sagroups");var e=document.querySelectorAll(".minstar");var o=document.querySelector(".wordnum");var n=document.querySelector("#main-star");var i;const a=2*Math.max(document.body.scrollHeight)/10;var r=document.body.clientWidth;o.id=e.length+"颗";for(i=0;i<e.length;i++){var s=randomNum(-a,a/5);var d=randomNum(1,99);var l=randomNum(10,80)/100*2.2;var c=randomNum(0,e.length);e[i].style.setProperty("--star-size",l+"em");e[i].style.setProperty("--star-shadow-size",l/2+"em");e[i].style.setProperty("--animation-delay",c+"s");t[i].style.top=s+"px";t[i].style.left=d+"%";if(d>60){t[i].className="sagroupL";e[i].className="minstarL"}}}function addHoverEffect(e,o){if(parseFloat(e.style.left)<60){e.addEventListener("mouseenter",function(){o.style.visibility="visible";o.style.opacity="0.8";o.style.transform="translateX(10px)";o.style.zIndex="3"});e.addEventListener("mouseleave",function(){o.style.visibility="hidden";o.style.opacity="0";o.style.transform="translateX(0)";o.style.zIndex="0"})}else{let t=-(o.clientWidth+10);e.addEventListener("mouseenter",function(){o.style.visibility="visible";o.style.opacity="0.8";o.style.transform="translateX(${len}px)";o.style.zIndex="3"});e.addEventListener("mouseleave",function(){o.style.visibility="hidden";o.style.opacity="0";o.style.transform="translateX(0)";o.style.zIndex="0"})}}function randomNum(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);break;case 2:return parseInt(Math.random()*(e-t+1)+t,10);break;default:return 0;break}}function elementsOverlap(t,e){const o=t.getBoundingClientRect();const n=e.getBoundingClientRect();return o.top>n.bottom||o.right<n.left||o.bottom<n.top||o.left>n.right}