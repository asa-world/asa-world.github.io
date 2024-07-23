//粒子背景
function dark(){
	window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;
	var n,e,i,h,t=.05,s=document.getElementById("universe"),o=!0,a="180,184,240",r="226,225,142",d="226,225,224",c=[];
	function f(){
		n=window.innerWidth,e=window.innerHeight,i=.216*n,s.setAttribute("width",n),s.setAttribute("height",e)
	}
	function u(){
		h.clearRect(0,0,n,e);
		for(var t=c.length,i=0;i<t;i++){
			var s=c[i];s.move(),s.fadeIn(),s.fadeOut(),s.draw()
		}
	}
	function y(){
		this.reset=function(){
			this.giant=m(3),this.comet=!this.giant&&!o&&m(10),this.x=l(0,n-10),this.y=l(0,e),this.r=l(1.1,2.6),this.dx=l(t,6*t)+(this.comet+1-1)*t*l(50,120)+2*t,this.dy=-l(t,6*t)-(this.comet+1-1)*t*l(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=l(.2,1-.4*(this.comet+1-1)),this.do=l(5e-4,.002)+.001*(this.comet+1-1)
		},this.fadeIn=function(){
			this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)
		},this.fadeOut=function(){
			this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>n||this.y<0)&&(this.fadingOut=!1,this.reset()))
		},this.draw=function(){
			if(h.beginPath(),this.giant)h.fillStyle="rgba("+a+","+this.opacity+")",h.arc(this.x,this.y,2,0,2*Math.PI,!1);
			else if(this.comet){
				h.fillStyle="rgba("+d+","+this.opacity+")",h.arc(this.x,this.y,1.5,0,2*Math.PI,!1);
				for(var t=0;t<30;t++)
					h.fillStyle="rgba("+d+","+(this.opacity-this.opacity/20*t)+")",h.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),h.fill()
			}else h.fillStyle="rgba("+r+","+this.opacity+")",h.rect(this.x,this.y,this.r,this.r);
			h.closePath(),h.fill()
		},this.move=function(){
			this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x>n-n/4||this.y<0)&&(this.fadingOut=!0)
		},setTimeout(function(){o=!1},50)
	}
	function m(t){
		return Math.floor(1e3*Math.random())+1<10*t
	}
	function l(t,i){
		return Math.random()*(i-t)+t
	}
	f(),window.addEventListener("resize",f,!1),
	function(){
		h=s.getContext("2d");
		for(var t=0;t<i;t++)c[t]=new y,c[t].reset();u()
	}(),
	function t(){
		document.getElementsByTagName('html')[0].getAttribute('data-theme')=='dark'&&u(),window.requestAnimationFrame(t)
	}()
};

/*视频懒加载*/
if(document.querySelector(".video > video") != null){
	var video=document.querySelector(".video > video");
	video.setAttribute("preload","none");
}


//模式切换
function switchDarkMode() { // Switch Between Light And Dark Mode
      const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
      if (nowMode === 'light') {
        activateDarkMode()
        saveToLocal.set('theme', 'dark', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
      } else {
        activateLightMode()
        saveToLocal.set('theme', 'light', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
      }
      // handle some cases
      typeof utterancesTheme === 'function' && utterancesTheme()
      typeof changeGiscusTheme === 'function' && changeGiscusTheme()
      typeof FB === 'object' && window.loadFBComment()
      typeof runMermaid === 'function' && window.runMermaid()
}


function hideTodayCard() {
    document.getElementById("todayCard") && document.getElementById("todayCard").classList.add("hide")
}
$(".topGroup").hover((function() {}
), (function() {
        document.getElementById("todayCard").classList.remove("hide"),
        document.getElementById("todayCard").style.zIndex = 1
    }
))

/*文章页顶部图主题色设置*/
var type = document.querySelector("meta[property='og:type']").content;
if(type == 'article'){
	var color = document.getElementsByTagName('meta')['img-color'].content;
	document.documentElement.style.setProperty('--asa-main',color);

	document.querySelector("#post-cover").classList.remove("loading");
	document.querySelector("#post-cover").classList.add("loaded");
	
	/*自动摘要适配*/
	//document.documentElement.style.setProperty('--heo-lighttext',color);
	//document.documentElement.style.setProperty('--heo-main',color);
	//document.querySelector("#tianliGPT-tag").innerHTML = 'AsaGPT';
	
	/*图片加标题*/
	var imglist = document.querySelectorAll("p > img");
	var i;
	for(i=0; i<imglist.length; i++){
		let title = document.createElement('p');
		title.classList.add("img-alt")
		title.innerHTML = imglist[i].getAttribute('alt');
		imglist[i].parentNode.insertBefore(title, imglist[i].nextSibling);
	}
}

/*判断国外ip
var foreignTips = (function () {
  var onSuccess = function (geoipResponse) {
    if (!geoipResponse.country.iso_code) {
      return;
    }
    var code = geoipResponse.country.iso_code.toLowerCase();
	console.log(code);
    if (code != 'cn'){
      Snackbar.show({text: '使用国外网络访问将无法访问本站图片，敬请谅解。Sorry, the images will be unaccessible with foreign network.',pos: 'top-center',showAction: false,duration: '5000' })
	  //btf.snackbarShow('使用国外网络访问将无法访问文章图片，敬请谅解。If you use foreign network access, you will not be able to access articles and pictures.')
    }
  };
  var onError = function (error) {
  };
  return function () {
    geoip2.country(onSuccess, onError);
  };
}());
foreignTips();
*/

/*加载背景
const preloader = {
    endLoading: () => {
      document.body.style.overflow = 'auto';
      document.getElementById('loading-box').classList.add("loaded")
    },
    initLoading: () => {
      document.body.style.overflow = '';
      document.getElementById('loading-box').classList.remove("loaded")
    }
}
window.addEventListener('load',()=> { preloader.endLoading() });

if (1) {
    document.addEventListener('pjax:send', () => { preloader.initLoading() })
    document.addEventListener('pjax:complete', () => { preloader.endLoading() })
}*/

/*打字效果*/
var typed = new Typed("#footer-banner", {
  strings: ["兴趣是最好的老师","Take action to think, to create."],
  startDelay: 200,
  backDelay: 2000,
  typeSpeed: 70,
  loop: true,
  backSpeed: 20
  })
/*
function mouseScrollDirection ( fn ) {
    var beforeScrollTop = document.documentElement.scrollTop || document.body.scrollTop,
    fn = fn || function() {};
    window.addEventListener('scroll', function() {
        var afterScrollTop = document.documentElement.scrollTop || document.body.scrollTop,
            delta = afterScrollTop - beforeScrollTop;
        if( delta === 0 ) return false;
        fn( delta > 0 ? 'down' : 'up' );
        beforeScrollTop = afterScrollTop;
    }, false);
}

mouseScrollDirection(function(direction) {
	if(direction == 'up'){
		document.querySelector('#nav *::after').style.setProperty('background-color','transparent','important');
		document.querySelector('#nav').style.setProperty('backdrop-filter','saturate(180%),blur(20px)');

	}else{
		document.querySelector('#nav *::after').style.setProperty('background-color','transparent','important');
		document.querySelector('#nav').style.setProperty('backdrop-filter','saturate(180%),blur(20px)');
	}      
});*/

/*nav设置*/
//获取滚动条距离顶部位置
function getScrollTop() {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    if(!scrollTop && (document.querySelector('.is-top-bar')==null)){
	//document.querySelector('#nav *::after').style.backgroundColor="";
	document.querySelector('#nav').style.background='transparent';
	document.querySelector('#nav').style.backdropFilter='';
	document.querySelector('#nav').style.boxShadow='none';
	}
	else{
		document.querySelector('#nav').style.background='var(--asa-card-bg)';
		document.querySelector('#nav').style.backdropFilter='saturate(180%) blur(15px)';
		document.querySelector('#nav').style.boxShadow='0 5px 6px -5px rgb(133 133 133 / 60%)';
	}
}
self.setInterval("getScrollTop()",500);

/*看星星页的bgm*/
if(window.location.href == "http://localhost:4000/star/"||window.location.href == "https://asa-world.github.io/star/"||window.location.href == "https://asa-world.cn/star/"||window.location.href == "http://asa-world.cn/star/"){
    dark();
	/*
	//const image = document.createElement('img');
	//image.src  = 'https://asa-world-1309727865.cos.ap-chengdu.myqcloud.com/pic/Lighthouse-ys.jpg';
	//document.querySelector("#content-inner").appendChild(image)
	//Snackbar.show({ text: '这里可以播放BGM哦',backgroundColor: '#1f1f1f', pos: 'bottom-right',duration: '3000',showAction: false });
    //判断手机横竖屏状态：
    function hengshuping(){
    if(window.orientation==180||window.orientation==0){
alert("竖屏状态！")
}
if(window.orientation==90||window.orientation==-90){
alert("横屏状态！")
}
}
   hengshuping();*/
  }

/*分类页*/
if(window.location.href == "http://localhost:4000/categories/"||window.location.href == "https://asa-world.github.io/categories/"||window.location.href == "https://asa-world.cn/categories/"||window.location.href == "http://asa-world.cn/categories/"){
  document.querySelector('#aside-content > div.sticky_layout').style.display = 'none';
  document.querySelector('#page > div.category-lists > ul').style.display = 'none';
  document.querySelector('.aside-content').style.display = 'none';
  document.querySelector("#page > div.category-lists > div.category-title.is-center").innerHTML = '专栏';
  var category_lists = document.querySelectorAll("#page > div.category-lists > ul > li");
  var i;
  var create_li = document.querySelector("#page > div.category-lists > div.is-center.tag-cloud-list");
  for(i=0 ; i<category_lists.length ; i++){
	 let a0 = document.createElement('a');
	 a0.innerHTML = '<span class="tags-punctuation">#</span><p style="display: inline-block; margin: auto;">haha</p><span class="tagsPageCount">num</span>';
     a0.href = category_lists[i].childNodes[0].href;
	 a0.childNodes[1].innerHTML = category_lists[i].childNodes[0].innerHTML;
	 a0.childNodes[2].innerHTML = category_lists[i].childNodes[1].innerHTML;	 
	 create_li.insertAdjacentElement('beforeend',a0);  
  }
}

if(window.location.href == "http://localhost:4000/archives/"||window.location.href == "https://asa-world.github.io/archives/"||window.location.href == "https://asa-world.cn/archives/"||window.location.href == "http://asa-world.cn/archives/"){
  document.querySelector("#site-title").style.display = 'none';
  document.querySelector("#content-inner").style.marginTop = '-20em';
  document.querySelector("#archive").style.width = '90%'

}

if(document.querySelector('.aside-content') != null){
	if(document.querySelector('.aside-content').style.display == 'none'){
		  document.querySelector('#page').style.margin = 'auto';
	}
}
/*显示运行时间*/
if(window.location.href == "http://localhost:4000/about/"||window.location.href == "https://asa-world.github.io/about/"||window.location.href == "https://asa-world.cn/about/"||window.location.href == "http://asa-world.cn/about/"){
show_date_time();
}
function show_date_time(){
    window.setTimeout("show_date_time()", 1000);
    BirthDay=new Date("1/20/2022 0:0:0");
    today=new Date();
    timeold=(today.getTime()-BirthDay.getTime());
    sectimeold=timeold/1000
    secondsold=Math.floor(sectimeold);
    msPerDay=24*60*60*1000
    e_daysold=timeold/msPerDay
    daysold=Math.floor(e_daysold);
    e_hrsold=(e_daysold-daysold)*24;
    hrsold=Math.floor(e_hrsold);
    e_minsold=(e_hrsold-hrsold)*60;
    minsold=Math.floor((e_hrsold-hrsold)*60);
    seconds=Math.floor((e_minsold-minsold)*60);
    span_dt_dt.innerHTML=' <font style=color:#2d85f0>'+daysold+'</font> 天 <font style=color:#f4433c>'+hrsold+'</font> 时 <font style=color:#ffbc32>'+minsold+'</font> 分 <font style=color:#0aa858>'+seconds+'</font> 秒';
    }


// 返回顶部 显示网页阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
    result = Math.round((a / b) * 100), // 计算百分比
    btn = document.querySelector("#percent"); // 获取图标

  result <= 99 || (result = 99), (btn.innerHTML = result);
}

document.getElementById("page-name").innerText = document.title.split(" | asa-world")[0];

/*关于页的文字滚动*/
if(window.location.href == "http://localhost:4000/about/"||window.location.href == "https://asa-world.github.io/about/"||window.location.href == "https://asa-world.cn/about/"||window.location.href == "http://asa-world.cn/about/"){
	let mask_items = document.querySelectorAll('.mask > span')
	var i = 0;
	var j = 1;
	self.setInterval("set_Attribute()",2000);

	function set_Attribute(){
		mask_items[i].setAttribute("data-up","data-up");
		mask_items[j].setAttribute("data-show","data-show");
		delete_Attribute();	
		if(i==mask_items.length-1){i = 0;}
		else{i++;}
		if(j==mask_items.length-1){j = 0;}
		else{j++;}

	}
	function delete_Attribute(){
		if(i==0){
		  mask_items[mask_items.length-1].removeAttribute("data-up");
		  mask_items[j-1].removeAttribute("data-show");		
		}
		else{	if(j==0){
		  mask_items[i-1].removeAttribute("data-up");
		  mask_items[mask_items.length-1].removeAttribute("data-show");		
		}
		else{
		  mask_items[i-1].removeAttribute("data-up");
		  mask_items[j-1].removeAttribute("data-show");		
		}
		
		}
		
	}

	/*关于页的网站信息*/
	document.getElementById("a_count").innerText =document.getElementById("article_c").textContent;
	document.getElementById("le_count").innerText =document.getElementById("word_c").textContent;
	document.getElementById("site_count").innerText = "计算中";
	document.getElementById("last_g").innerText = "翻阅中"
	//setTimeout(function() {document.getElementById("site_count").innerText =document.getElementById("busuanzi_value_site_pv").textContent;}, 5000); 
	//setTimeout(function() {}, 5000); 
	self.setInterval("updata_site_info()",2000);

	function updata_site_info(){
		var a = document.getElementById("busuanzi_value_site_pv").textContent;
		var b = document.getElementById("last-push-date").textContent;
		if(a>0){
			document.getElementById("site_count").innerText =a;
		}
		if(typeof b === 'string'){
			document.getElementById("last_g").innerText =b;
		}
	}
}


//判断时间
if(document.getElementById("author-info__sayhi")!=null){
	let date=new Date();
	if(date.getHours()>=0&&date.getHours()<12){
	  document.getElementById("author-info__sayhi").innerText ="上午好! 我是";
	}else if(date.getHours()>=12&&date.getHours()<18){
	  document.getElementById("author-info__sayhi").innerText = "下午好! 我是";
	}else{
	  document.getElementById("author-info__sayhi").innerText = "晚上好! 我是";
	}
}

/*
var s = document.querySelectorAll(".article-meta.tags>a");

var i;
for (i = 0; i < s.length; i++) {
	s[i].innerHTML = "#"+s[i].textContent;
}*/

//首页标签前加#
var s = document.querySelectorAll(".article-meta.tags>a");//获取指定元素
var i;
for (i = 0; i < s.length; i++) {
	var para = document.createElement("a");//新建标签元素
	var txt = document.createTextNode(" #");//文本元素
	para.appendChild(txt);
	s[i].parentNode.insertBefore(para,s[i]);
}


//星语页
if(window.location.href == "http://localhost:4000/sawords/"||window.location.href == "https://asa-world.github.io/sawords/"||window.location.href == "https://asa-world.cn/sawords/"||window.location.href == "http://asa-world.cn/sawords/"){
	if(window.screen.width<768){
		nopei();
	}
	else{
		randomstar();
	}
}

//移动端（不）适配
function nopei(){
	//document.querySelector("body").style.backgroundImage = "url(https://image.asa-world.cn/pic/Snipaste_2023-08-13_10-44-39.jpg)";
	//document.querySelector("body").style.backgroundSize = "cover";
	//document.querySelector("#content-inner").style.display = "none";
	//document.querySelector("#footer").style.display = "none";
	//var contentInner = document.getElementById('content-inner');
  

  // Insert animated element
	//insertAnimatedElement();
	btf.snackbarShow('本页仅适配电脑端');
	
}

//插入动态的❌
function insertAnimatedElement() {
  // Insert the HTML structure
  var div = document.getElementById('content-inner');
  div.innerHTML = `
    <svg id="icon" viewBox="0 0 800 600">
      <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
      <path d="M300,320 L540,320" id="middle"></path>
      <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
    </svg>
  `;


  // Add styles
  var style = document.createElement('style');
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');

    body, html, div {
      background: #292A38;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
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
      stroke: #A06BA5;
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
  `;
  document.head.appendChild(style);

  // Add JavaScript for the animation behavior
  var i = setInterval(function() {
    div.classList.toggle('cross');
  }, 1500);

  div.addEventListener('click', function() {
    clearInterval(i);
    div.classList.toggle('cross');
  });

  // Resize function
  var resize = function() {
    document.body.style.marginTop = Math.floor((window.innerHeight - 150) / 2) + 'px';
  };

  window.addEventListener('resize', resize);
  resize();
}


//随机生成星球
function randomstar(){
	var g = document.querySelectorAll(".sagroups");//获取指定元素
	var s = document.querySelectorAll(".minstar");//获取指定元素
	var num = document.querySelector(".wordnum");//获取指定元素
	var mains = document.querySelector("#main-star");//获取指定元素
	var i;
	//console.log(mains.getBoundingClientRect().top);
	//console.log(mains.getBoundingClientRect().bottom);
	var w = document.body.clientWidth;
	num.id= s.length + "颗";
	for (i = 0; i < s.length; i++) {
		if(i<s.length/4){
			var top = randomNum(-1000,-700);
			var left = randomNum(1,99);
		}
		if(i>s.length/4 && i<s.length/2){
			var top = randomNum(-900,-300);
			var left = randomNum(1,60);
		}
		if(i>s.length/2){
			var top = randomNum(-400,0);
			var left = randomNum(1,99);
		}
		var size = randomNum(10,80)/100*2.2;
		var bling_dely = randomNum(0,s.length);

		g[i].style.top = top + "px";
		g[i].style.left =  left + "%";
		s[i].style.setProperty('--star-size',size+"em");
		s[i].style.setProperty('--star-shadow-size',(size/2)+"em");
		s[i].style.setProperty('--animation-delay',bling_dely+"s");
	}
	
	
	g[s.length-1].style.top = "0px";
	//console.log(g[s.length-1].getBoundingClientRect().top);
}


//随机生成
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 

//判断元素重叠
function elementsOverlap(el1, el2) {
  const domRect1 = el1.getBoundingClientRect();
  const domRect2 = el2.getBoundingClientRect();

  return (
    domRect1.top > domRect2.bottom ||
    domRect1.right < domRect2.left ||
    domRect1.bottom < domRect2.top ||
    domRect1.left > domRect2.right
  );
}
