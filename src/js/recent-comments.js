var recentCmts=function(){var t=document.getElementById("wjs-recentCmts"),e=window.location.protocol+"//"+window.location.hostname,a=t.dataset.cphoto||"//www.gravatar.com/avatar/?d=mm",s=t.dataset.cnumber||6,c=t.dataset.csnippet||50,n=document.createElement("script");return n.src=e+"/feeds/comments/default?alt=json-in-script&callback=recentCmts&max-results="+s,document.body.appendChild(n),function(e){for(var n,r=0;r<s&&(n=e.feed.entry[r]);r++){var i=t,d=t.innerHTML,m=n,l=m.author[0],o=l.name.$t,u=m.content,p=m.summary;u=(u?u.$t:p.$t).replace(/<[^>]*>?/g,"").substring(0,c)+"...",l=((l=l.gd$image).src.includes("g/blank.gif")||l.src.includes("g/b16-rounded.gif")?a:l.src).replace(/s\B\d{2,4}/,"s80");t:{for(p=0;p<m.link.length;p++){var w=m.link[p];if("alternate"===w.rel){p=w.href;break t}}p=void 0}m=new Date(m.published.$t).toLocaleDateString("es-ES",{year:"numeric",month:"numeric",day:"numeric"}),i.innerHTML=d+'<div class="wjs-cmts__card"><div class="wjs-cmts__card-content"><a href="'+p+'" class="wjs-cmts__image"><img src="'+l+'" alt="'+o+'" /></a><div class="wjs-cmts__data"><h3 class="wjs-cmts__title"><a href="'+p+'">'+o+'</a><span class="wjs-cmts__date">'+m+'</span></h3><p class="wjs-cmts__snippet">'+u+"</p></div></div></div>"}}}();
