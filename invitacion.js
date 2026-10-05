const main=document.querySelector('#invitation'),welcome=document.querySelector('#welcome'),song=document.querySelector('#song');
document.querySelector('#enter').addEventListener('click',()=>{
  // Start audio inside the user's gesture, including on mobile browsers.
  song.play().then(()=>document.querySelector('#music-note').textContent='La banda sonora de nuestra dulce espera ♫').catch(()=>document.querySelector('#music-note').textContent='Toca reproducir para escuchar nuestra canción ♫');
  welcome.hidden=true;main.hidden=false;window.scrollTo({top:0,behavior:'instant'});
});
const date=new Date('2026-10-17T15:30:00-04:00');
function updateCountdown(){const s=Math.max(0,Math.floor((date-Date.now())/1000));const values={days:Math.floor(s/86400),hours:Math.floor(s/3600)%24,minutes:Math.floor(s/60)%60,seconds:s%60};Object.entries(values).forEach(([key,value])=>document.getElementById(key).textContent=String(value).padStart(2,'0'));if(s===0)document.querySelector('#count-note').textContent='¡Llegó el día de compartir esta alegría!'}
updateCountdown();setInterval(updateCountdown,1000);
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.06});document.querySelectorAll('.reveal').forEach(e=>{e.classList.add('ready');observer.observe(e)})}
