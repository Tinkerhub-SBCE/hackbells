!function(){let e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear(),l="12/10/"+o;(e=n+"/"+t+"/"+o)>l&&(l="12/10/2021");const d=new Date(l).getTime(),a=setInterval(function(){const e=(new Date).getTime(),t=d-e;document.getElementById("days").innerText=Math.floor(t/864e5),document.getElementById("hours").innerText=Math.floor(t%864e5/36e5),document.getElementById("minutes").innerText=Math.floor(t%36e5/6e4),document.getElementById("seconds").innerText=Math.floor(t%6e4/1e3),t<0&&(document.getElementById("headline").innerText="Whooo!",document.getElementById("countdown").style.display="none",document.getElementById("content").style.display="block",clearInterval(a))},0)}();