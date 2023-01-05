//粒子背景
function dark() {window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var n,e,i,h,t=.05,s=document.getElementById("universe"),o=!0,a="180,184,240",r="226,225,142",d="226,225,224",c=[];function f(){n=window.innerWidth,e=window.innerHeight,i=.216*n,s.setAttribute("width",n),s.setAttribute("height",e)}function u(){h.clearRect(0,0,n,e);for(var t=c.length,i=0;i<t;i++){var s=c[i];s.move(),s.fadeIn(),s.fadeOut(),s.draw()}}function y(){this.reset=function(){this.giant=m(3),this.comet=!this.giant&&!o&&m(10),this.x=l(0,n-10),this.y=l(0,e),this.r=l(1.1,2.6),this.dx=l(t,6*t)+(this.comet+1-1)*t*l(50,120)+2*t,this.dy=-l(t,6*t)-(this.comet+1-1)*t*l(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=l(.2,1-.4*(this.comet+1-1)),this.do=l(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>n||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(h.beginPath(),this.giant)h.fillStyle="rgba("+a+","+this.opacity+")",h.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){h.fillStyle="rgba("+d+","+this.opacity+")",h.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var t=0;t<30;t++)h.fillStyle="rgba("+d+","+(this.opacity-this.opacity/20*t)+")",h.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),h.fill()}else h.fillStyle="rgba("+r+","+this.opacity+")",h.rect(this.x,this.y,this.r,this.r);h.closePath(),h.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x>n-n/4||this.y<0)&&(this.fadingOut=!0)},setTimeout(function(){o=!1},50)}function m(t){return Math.floor(1e3*Math.random())+1<10*t}function l(t,i){return Math.random()*(i-t)+t}f(),window.addEventListener("resize",f,!1),function(){h=s.getContext("2d");for(var t=0;t<i;t++)c[t]=new y,c[t].reset();u()}(),function t(){document.getElementsByTagName('html')[0].getAttribute('data-theme')=='dark'&&u(),window.requestAnimationFrame(t)}()};

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
	console.log(type);
	var color = document.getElementsByTagName('meta')['img-color'].content;
	document.documentElement.style.setProperty('--asa-main',color);
}

/*判断国外ip
var foreignTips = (function () {
  var onSuccess = function (geoipResponse) {
    if (!geoipResponse.country.iso_code) {
      return;
    }
    var code = geoipResponse.country.iso_code.toLowerCase();
    if (code != 'cn'){
      btf.snackbarShow('使用国外网络访问将无法访问文章图片，敬请谅解。If you use foreign network access, you will not be able to access articles and pictures.')
    }
  };
  var onError = function (error) {
  };
  return function () {
    geoip2.country(onSuccess, onError);
  };
}());
foreignTips();*/






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
	}
	else{
		document.querySelector('#nav').style.background='rgba(18,18,18,0.8)';
		document.querySelector('#nav').style.backdropFilter='saturate(180%) blur(15px)';
	}
}
self.setInterval("getScrollTop()",500);

/*看星星页的bgm
if(window.location.href == "http://localhost:4000/star/"||window.location.href == "https://asa-world.github.io/star/"||window.location.href == "https://asa-world.cn/star/"||window.location.href == "http://asa-world.cn/star/"){
    Snackbar.show({ text: '这里可以播放BGM哦',backgroundColor: '#1f1f1f', pos: 'bottom-right',duration: '3000',showAction: false });
	dark();
  }*/

/*分类页的bgm*/
if(window.location.href == "http://localhost:4000/categories/"||window.location.href == "https://asa-world.github.io/categories/"||window.location.href == "https://asa-world.cn/categories/"||window.location.href == "http://asa-world.cn/categories/"){
  document.querySelector('#aside-content > div.sticky_layout').style.display = 'none';
  document.querySelector('#page > div.category-lists > ul').style.display = 'none';
  document.querySelector('.aside-content').style.display = 'none';
  document.querySelector("#page > div.category-lists > div.category-title.is-center").innerHTML = '专栏';
  var category_lists = document.querySelectorAll("#page > div.category-lists > ul > li");
  var i;
  var create_li = document.querySelector("#page > div.category-lists > div.is-center.tag-cloud-list")
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

if(document.querySelector('.aside-content').style.display == 'none'){
	  document.querySelector('#page').style.margin = 'auto';
}

/*页脚显示运行时间*/
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
show_date_time();

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
	document.getElementById("last_t").innerText = "计算中";
	document.getElementById("last_g").innerText = "翻阅中"
	//setTimeout(function() {document.getElementById("site_count").innerText =document.getElementById("busuanzi_value_site_pv").textContent;}, 5000); 
	//setTimeout(function() {}, 5000); 
	self.setInterval("updata_site_info()",2000);

	function updata_site_info(){
		var a = document.getElementById("busuanzi_value_site_pv").textContent;
		var b = document.getElementById("last-push-date").textContent;
		var c = document.querySelector("#span_dt_dt>font").textContent;
		if(a>0){
			document.getElementById("site_count").innerText =a;
		}
		if(typeof b === 'string'){
			document.getElementById("last_g").innerText =b;
		}
		if(typeof c === 'string'){
			document.getElementById("last_t").innerText =c+"天";
		}
	}
}


//判断时间
let date=new Date();
if(date.getHours()>=0&&date.getHours()<12){
  document.getElementById("author-info__sayhi").innerText ="上午好! 我是";
}else if(date.getHours()>=12&&date.getHours()<18){
  document.getElementById("author-info__sayhi").innerText = "下午好! 我是";
}else{
  document.getElementById("author-info__sayhi").innerText = "晚上好! 我是";
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



