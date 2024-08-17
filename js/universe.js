if(document.querySelector(".video > video")!=null){var video=document.querySelector(".video > video");video.setAttribute("preload","none")}function switchDarkMode(){const e=document.documentElement.getAttribute("data-theme")==="dark"?"dark":"light";if(e==="light"){activateDarkMode();saveToLocal.set("theme","dark",2);GLOBAL_CONFIG.Snackbar!==undefined&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night,false,2e3)}else{activateLightMode();saveToLocal.set("theme","light",2);GLOBAL_CONFIG.Snackbar!==undefined&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day,false,2e3)}typeof utterancesTheme==="function"&&utterancesTheme();typeof changeGiscusTheme==="function"&&changeGiscusTheme();typeof FB==="object"&&window.loadFBComment();typeof runMermaid==="function"&&window.runMermaid()}function hideTodayCard(){document.getElementById("todayCard")&&document.getElementById("todayCard").classList.add("hide")}if(document.querySelector(".relatedPosts-list")){modifyAnimation()}function modifyAnimation(){const t=document.querySelector(".relatedPosts-list").querySelectorAll("div");let l=0;t.forEach(e=>{const t=window.getComputedStyle(e);const o=e.offsetWidth;const n=parseFloat(t.marginLeft);const a=parseFloat(t.marginRight);const i=parseFloat(t.paddingLeft);const r=parseFloat(t.paddingRight);l+=o+n+a});let e=document.getElementById("dynamic-styles");if(!e){e=document.createElement("style");e.id="dynamic-styles";document.head.appendChild(e)}console.log(l);const o=`
	  @keyframes scroll-left {
		0% {
		  transform: translateX(0%);
		}
		100% {
		  transform: translateX(-${l/4+t.length/10*10}px);
		}
	  }
	`;e.textContent=o;var n=document.querySelectorAll("#home_top > .recent-top-post-group > .recent-post-top > .relatedPosts > .relatedPosts-list>div");for(let e of n){e.style.animation=`scroll-left ${t.length+5}s linear infinite`}}var type=document.querySelector("meta[property='og:type']").content;if(type=="article"){var color=document.getElementsByTagName("meta")["img-color"].content;document.documentElement.style.setProperty("--asa-main",color);document.querySelector("#post-cover").classList.remove("loading");document.querySelector("#post-cover").classList.add("loaded");var imglist=document.querySelectorAll("p > img");var i;for(i=0;i<imglist.length;i++){let e=document.createElement("p");e.classList.add("img-alt");e.innerHTML=imglist[i].getAttribute("alt");imglist[i].parentNode.insertBefore(e,imglist[i].nextSibling)}}function getScrollTop(){var e=0;if(document.documentElement&&document.documentElement.scrollTop){e=document.documentElement.scrollTop}else if(document.body){e=document.body.scrollTop}if(!e&&document.querySelector(".is-top-bar")==null){document.querySelector("#nav").style.background="transparent";document.querySelector("#nav").style.backdropFilter="";document.querySelector("#nav").style.boxShadow="none"}else{document.querySelector("#nav").style.background="var(--asa-card-bg)";document.querySelector("#nav").style.backdropFilter="saturate(180%) blur(15px)";document.querySelector("#nav").style.boxShadow="0 5px 6px -5px rgb(133 133 133 / 60%)"}}self.setInterval("getScrollTop()",500);if(window.location.href=="http://localhost:4000/categories/"||window.location.href=="https://asa-world.github.io/categories/"||window.location.href=="https://asa-world.cn/categories/"||window.location.href=="http://asa-world.cn/categories/"){document.querySelector("#aside-content > div.sticky_layout").style.display="none";document.querySelector("#page > div.category-lists > ul").style.display="none";document.querySelector(".aside-content").style.display="none";document.querySelector("#page > div.category-lists > div.category-title.is-center").innerHTML="专栏";var category_lists=document.querySelectorAll("#page > div.category-lists > ul > li");var i;var create_li=document.querySelector("#page > div.category-lists > div.is-center.tag-cloud-list");for(i=0;i<category_lists.length;i++){let e=document.createElement("a");e.innerHTML='<span class="tags-punctuation">#</span><p style="display: inline-block; margin: auto;">haha</p><span class="tagsPageCount">num</span>';e.href=category_lists[i].childNodes[0].href;e.childNodes[1].innerHTML=category_lists[i].childNodes[0].innerHTML;e.childNodes[2].innerHTML=category_lists[i].childNodes[1].innerHTML;create_li.insertAdjacentElement("beforeend",e)}}if(window.location.href=="http://localhost:4000/archives/"||window.location.href=="https://asa-world.github.io/archives/"||window.location.href=="https://asa-world.cn/archives/"||window.location.href=="http://asa-world.cn/archives/"){document.querySelector("#site-title").style.display="none";document.querySelector("#content-inner").style.marginTop="-20em";document.querySelector("#archive").style.width="90%"}if(document.querySelector(".aside-content")!=null){if(document.querySelector(".aside-content").style.display=="none"){document.querySelector("#page").style.margin="auto"}}function show_date_time(){window.setTimeout("show_date_time()",1e3);BirthDay=new Date("1/20/2022 0:0:0");today=new Date;timeold=today.getTime()-BirthDay.getTime();sectimeold=timeold/1e3;secondsold=Math.floor(sectimeold);msPerDay=24*60*60*1e3;e_daysold=timeold/msPerDay;daysold=Math.floor(e_daysold);e_hrsold=(e_daysold-daysold)*24;hrsold=Math.floor(e_hrsold);e_minsold=(e_hrsold-hrsold)*60;minsold=Math.floor((e_hrsold-hrsold)*60);seconds=Math.floor((e_minsold-minsold)*60);span_dt_dt.innerHTML=" <font style=color:#2d85f0>"+daysold+"</font> 天 <font style=color:#f4433c>"+hrsold+"</font> 时 <font style=color:#ffbc32>"+minsold+"</font> 分 <font style=color:#0aa858>"+seconds+"</font> 秒"}window.onscroll=percent;function percent(){let e=document.documentElement.scrollTop||window.pageYOffset,t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-document.documentElement.clientHeight,o=Math.round(e/t*100),n=document.querySelector("#percent");o<=99||(o=99),n.innerHTML=o}document.getElementById("page-name").innerText=document.title.split(" | ")[0];if(window.location.href=="http://localhost:4000/"||window.location.href=="https://asa-world.github.io/"||window.location.href=="https://asa-world.cn/"||window.location.href=="http://asa-world.cn/"){let e=document.querySelectorAll(".mask > span");var i=0;var j=1;self.setInterval("set_Attribute()",2e3);function set_Attribute(){e[i].setAttribute("data-up","data-up");e[j].setAttribute("data-show","data-show");delete_Attribute();if(i==e.length-1){i=0}else{i++}if(j==e.length-1){j=0}else{j++}}function delete_Attribute(){if(i==0){e[e.length-1].removeAttribute("data-up");e[j-1].removeAttribute("data-show")}else{if(j==0){e[i-1].removeAttribute("data-up");e[e.length-1].removeAttribute("data-show")}else{e[i-1].removeAttribute("data-up");e[j-1].removeAttribute("data-show")}}}document.getElementById("a_count").innerText=document.getElementById("article_c").textContent;document.getElementById("le_count").innerText=document.getElementById("word_c").textContent;document.getElementById("site_count").innerText="计算中";document.getElementById("last_g").innerText="翻阅中";self.setInterval("updata_site_info()",2e3);show_date_time();function updata_site_info(){var e=document.getElementById("busuanzi_value_site_pv").textContent;var t=document.getElementById("last-push-date").textContent;if(e>0){document.getElementById("site_count").innerText=e}if(typeof t==="string"){document.getElementById("last_g").innerText=t}}}if(document.getElementById("author-info__sayhi")!=null){let e=new Date;if(e.getHours()>=0&&e.getHours()<12){document.getElementById("author-info__sayhi").innerText="上午好，很高兴见到你👋"}else if(e.getHours()>=12&&e.getHours()<18){document.getElementById("author-info__sayhi").innerText="下午好，很高兴见到你👋"}else{document.getElementById("author-info__sayhi").innerText="晚上好，很高兴见到你👋"}}var s=document.querySelectorAll(".article-meta.tags>a");var i;for(i=0;i<s.length;i++){var para=document.createElement("a");var txt=document.createTextNode(" #");para.appendChild(txt);s[i].parentNode.insertBefore(para,s[i])}function nopei(){var e=document.getElementById("content-inner");e.innerHTML=`
    <div class="bupei"><svg id="icon" viewBox="0 0 800 600">
      <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
      <path d="M300,320 L540,320" id="middle"></path>
      <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
    </svg>
	</div><div style="text-align: center;"><b>本页仅适配电脑端，点击左上角返回首页</b></div>
  `;var t=document.createElement("style");t.innerHTML=`
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
  `;document.head.appendChild(t);var o=setInterval(function(){e.classList.toggle("cross")},1500)}function isMobileDevice(){return/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.screen.width<768}