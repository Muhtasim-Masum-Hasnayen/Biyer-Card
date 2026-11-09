(function(){
var $=function(s){return document.querySelector(s)}, $$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
var EVK=['holud','biye','bou'];
var THEMES=['holud','biye','bou','shada'];

var T={
 brand:['বিয়ের কার্ড','Biyer Card'],
 tab_edit:['এডিট করুন','Edit'], tab_prev:['প্রিভিউ','Preview'],
 design:['থিম বেছে নিন','Choose a theme'],
 th_holud:['গায়ে হলুদ','Gaye Holud'], th_biye:['বিয়ে (পালকি)','Biye (Palki)'], th_bou:['বউভাত','Bou-bhat'], th_shada:['সাদা-সোনালি','Ivory and gold'],
 th_hint:['প্রতিটি থিমে আলাদা অ্যানিমেশন: পালকিতে বউ, গায়ে হলুদের ডালা, বউভাতের জামাই-বউ।','Each theme has its own animated scene: the bride in a palki, the holud tray, the bou-bhat couple.'],
 couple:['বর ও কনে','Couple'], groom:['বরের নাম','Groom’s name'], bride:['কনের নাম','Bride’s name'],
 families:['পরিবার ও বার্তা','Families and message'],
 groomFam:['বরের পিতা-মাতা','Groom’s parents'], brideFam:['কনের পিতা-মাতা','Bride’s parents'],
 msg:['নিমন্ত্রণের কথা','Invitation message'], opening:['শুরুর লাইন','Opening line'],
 op_none:['কিছু না','None'], op_bis:['বিসমিল্লাহ','Bismillah'], op_shub:['শুভ বিবাহ','Shubho Bibaho'],
 events:['অনুষ্ঠান','Events'],
 ev_holud:['গায়ে হলুদ','Gaye Holud'], ev_biye:['বিয়ে','Wedding'], ev_bou:['বউভাত','Bou-bhat'],
 date:['তারিখ','Date'], time:['সময়','Time'], venue:['ভেন্যুর নাম','Venue name'], addr:['ঠিকানা','Address'],
 contact:['যোগাযোগ','Contact'], phone:['মোবাইল নম্বর','Mobile number'],
 share:['শেয়ার','Share'], wa_label:['হোয়াটসঅ্যাপ মেসেজ','WhatsApp message'],
 wa_btn:['মেসেজ কপি করুন','Copy message'], wa_done:['কপি হয়েছে','Copied'], wa_fail:['লেখাটি সিলেক্ট করা হয়েছে, কপি করে নিন','Text selected, copy it manually'],
 blank:['খালি করে শুরু করুন','Start blank'], restore:['নমুনা ফিরিয়ে আনুন','Restore sample'],
 pv_cover:['কভার','Cover'], pv_inside:['ভেতরে','Inside'],
 sample_note:['নমুনা তথ্য দেখানো হচ্ছে। নিজের তথ্য দিয়ে বদলে নিন।','Showing sample details. Replace them with yours.'],
 c_open:['ট্যাপ করে খুলুন','Tap to open'], c_invite:['বিয়ের নিমন্ত্রণ','Wedding invitation'],
 c_son:['পুত্র','Son of'], c_daughter:['কন্যা','Daughter of'],
 c_count:['উৎসব শুরু হতে বাকি','Until the celebrations begin'], c_done:['উৎসব শুরু হয়ে গেছে','The celebrations have begun'],
 d:['দিন','Days'], h:['ঘণ্টা','Hours'], m:['মিনিট','Minutes'], s:['সেকেন্ড','Seconds'],
 c_maps:['ম্যাপে দেখুন','Open in Maps'], c_rsvp:['যোগাযোগ','RSVP'], c_wait:['আপনাদের অপেক্ষায়','We await you'],
 amp:['ও','&'], ph_groom:['বরের নাম','Groom'], ph_bride:['কনের নাম','Bride'],
 wa_wed:['শুভ বিবাহ','Wedding of'], wa_venue:['স্থান','Venue'], wa_map:['ম্যাপ','Map'],
 music:['মিউজিক','Music'], mu_none:['মিউজিক ছাড়া','No music'], mu_synth:['তানপুরা ও সেতার সুর (বিল্ট-ইন)','Tanpura and sitar-style tune (built-in)'],
 link_btn:['শেয়ার লিংক তৈরি করুন','Create share link'], link_label:['আপনার কার্ডের লিংক','Your card link'],
 link_copy:['লিংক কপি','Copy link'], link_open:['কার্ড খুলুন','Open card'], link_wa:['হোয়াটসঅ্যাপে পাঠান','Send on WhatsApp'],
 link_busy:['লিংক তৈরি হচ্ছে...','Creating link...'], link_done:['লিংক তৈরি হয়েছে','Link created'], link_copied:['লিংক কপি হয়েছে','Link copied'],
 link_fail:['লিংক তৈরি করা যায়নি, আবার চেষ্টা করুন','Could not create the link, please try again'],
 v_notfound:['কার্ডটি খুঁজে পাওয়া যায়নি।','This card could not be found.'], v_make:['নিজের কার্ড বানান','Make your own card'],
 m_toggle:['মিউজিক চালু বা বন্ধ করুন','Turn music on or off']
};
function t(k){return T[k][S.lang==='bn'?0:1]}

function mkSample(lang){
  var bn=lang==='bn';
  return {
    lang:lang, theme:'biye', open:'bismillah', dirty:false, mu:'synth',
    groom: bn?'তানভীর':'Tanvir', bride: bn?'নুসরাত':'Nusrat',
    groomFam: bn?'জনাব আব্দুল করিম ও মিসেস ফেরদৌসী করিম':'Mr. Abdul Karim and Mrs. Ferdousi Karim',
    brideFam: bn?'জনাব মোহাম্মদ হোসেন ও মিসেস রহিমা হোসেন':'Mr. Mohammad Hossain and Mrs. Rahima Hossain',
    msg: bn?'আমাদের জীবনের এই বিশেষ দিনে আপনার উপস্থিতি ও দোয়া কামনা করছি।':'We would be honoured to have you with us, with your blessings, on our special day.',
    phone:'01700-000000',
    ev:{
      holud:{on:true,date:'2026-12-17',time:'18:00',venue:bn?'মধুমতি কমিউনিটি সেন্টার':'Modhumoti Community Centre',addr:bn?'রোড ৫, ধানমন্ডি, ঢাকা':'Road 5, Dhanmondi, Dhaka'},
      biye:{on:true,date:'2026-12-18',time:'16:30',venue:bn?'মধুমতি কমিউনিটি সেন্টার':'Modhumoti Community Centre',addr:bn?'রোড ৫, ধানমন্ডি, ঢাকা':'Road 5, Dhanmondi, Dhaka'},
      bou:{on:true,date:'2026-12-19',time:'19:00',venue:bn?'সোনারগাঁও হল':'Sonargaon Hall',addr:bn?'সেক্টর ৭, উত্তরা, ঢাকা':'Sector 7, Uttara, Dhaka'}
    }
  };
}
function mkBlank(){
  var s=mkSample(S.lang); s.theme=S.theme; s.open=S.open; s.mu=S.mu; s.dirty=true;
  ['groom','bride','groomFam','brideFam','msg','phone'].forEach(function(k){s[k]=''});
  EVK.forEach(function(k){s.ev[k]={on:true,date:'',time:'',venue:'',addr:''}});
  return s;
}

var CFG=window.BIYER_CONFIG||{};
var API=CFG.api||'/api/card';
var TRACKS=CFG.tracks||[];
var vm=location.pathname.match(/^\/c\/([A-Za-z0-9]{4,20})\/?$/);
var vd=new URLSearchParams(location.search).get('d');
var isView=!!(vm||vd);
if(isView) document.body.classList.add('view','loading');

var S=mkSample('bn');
try{
  var raw=isView?null:localStorage.getItem('biyer-card-draft');
  if(raw){var p=JSON.parse(raw); if(p&&p.ev&&p.ev.holud) S=p;}
}catch(e){}
if(S.theme==='lal') S.theme='biye';
if(S.theme==='sobuj') S.theme='bou';
if(THEMES.indexOf(S.theme)<0) S.theme='biye';
S.mu=validMu(S.mu==null?'synth':S.mu);
var opened=false;
function save(){try{localStorage.setItem('biyer-card-draft',JSON.stringify(S))}catch(e){}}

function get(p){return p.split('.').reduce(function(o,k){return o[k]},S)}
function set(p,v){var a=p.split('.'),l=a.pop();a.reduce(function(o,k){return o[k]},S)[l]=v}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}

/* ---------- data in and out: validate everything that comes from a link or the server ---------- */
function validMu(v){
  if(v==='none'||v==='synth') return v;
  for(var i=0;i<TRACKS.length;i++) if(TRACKS[i].id===v) return v;
  return 'none';
}
function clip(v,n){return String(v==null?'':v).slice(0,n)}
function clean(o){
  o=o&&typeof o==='object'?o:{};
  var s={
    lang:o.lang==='en'?'en':'bn',
    theme:THEMES.indexOf(o.theme)>=0?o.theme:'biye',
    open:['none','bismillah','shubho'].indexOf(o.open)>=0?o.open:'none',
    mu:validMu(o.mu==null?'none':o.mu), dirty:true,
    groom:clip(o.groom,60), bride:clip(o.bride,60), groomFam:clip(o.groomFam,120), brideFam:clip(o.brideFam,120),
    msg:clip(o.msg,300), phone:clip(o.phone,30), ev:{}
  };
  EVK.forEach(function(k){
    var e=(o.ev&&o.ev[k])||{};
    s.ev[k]={on:!!e.on, date:/^\d{4}-\d{2}-\d{2}$/.test(e.date||'')?e.date:'', time:/^\d{2}:\d{2}$/.test(e.time||'')?e.time:'', venue:clip(e.venue,100), addr:clip(e.addr,160)};
  });
  return s;
}
function b64u(bytes){
  var s='';for(var i=0;i<bytes.length;i++) s+=String.fromCharCode(bytes[i]);
  return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
}
function unb64u(s){
  s=s.replace(/-/g,'+').replace(/_/g,'/'); while(s.length%4) s+='=';
  var b=atob(s), a=new Uint8Array(b.length); for(var i=0;i<b.length;i++) a[i]=b.charCodeAt(i); return a;
}
async function pipeBytes(bytes,stream){
  var w=stream.writable.getWriter(); w.write(bytes).catch(function(){}); w.close().catch(function(){});
  return new Uint8Array(await new Response(stream.readable).arrayBuffer());
}
async function encodeData(o){
  var bytes=new TextEncoder().encode(JSON.stringify(o));
  if(typeof CompressionStream!=='undefined'){
    try{return 'z'+b64u(await pipeBytes(bytes,new CompressionStream('deflate-raw')))}catch(e){}
  }
  return 'r'+b64u(bytes);
}
async function decodeData(str){
  if(!str||str.length>12000) throw new Error('bad');
  var bytes=unb64u(str.slice(1));
  if(str.charAt(0)==='z') bytes=await pipeBytes(bytes,new DecompressionStream('deflate-raw'));
  else if(str.charAt(0)!=='r') throw new Error('bad');
  return JSON.parse(new TextDecoder().decode(bytes));
}

/* ---------- music: a built-in generated tune (no file needed) or your own mp3 files from config.js ---------- */
var muted=false;
var Music=(function(){
  var ctx=null,master=null,delay=null,send=null,timer=null,stopTimer=null,mode=null,audio=null,playing=false;
  var SA=146.83, SCALE=[1,9/8,5/4,45/32,3/2,27/16,15/8];
  var nextTan=0,nextNote=0,deg=4,tanIdx=0,lastF=0;
  function hz(d){var o=Math.floor(d/7),i=((d%7)+7)%7;return SA*SCALE[i]*Math.pow(2,o)}
  function pluck(f,t,dur,vol,from){
    var o=ctx.createOscillator(),o2=ctx.createOscillator(),g=ctx.createGain(),g2=ctx.createGain(),lp=ctx.createBiquadFilter();
    o.type='triangle'; o2.type='sine'; g2.gain.value=.35;
    lp.type='lowpass'; lp.frequency.setValueAtTime(Math.min(f*7,5000),t); lp.frequency.exponentialRampToValueAtTime(Math.max(f*1.5,200),t+dur);
    if(from){
      o.frequency.setValueAtTime(from,t); o.frequency.exponentialRampToValueAtTime(f,t+.12);
      o2.frequency.setValueAtTime(from*2,t); o2.frequency.exponentialRampToValueAtTime(f*2,t+.12);
    }else{o.frequency.setValueAtTime(f,t); o2.frequency.setValueAtTime(f*2,t)}
    g.gain.setValueAtTime(.0001,t); g.gain.exponentialRampToValueAtTime(vol,t+.01); g.gain.exponentialRampToValueAtTime(.0001,t+dur);
    o.connect(lp); o2.connect(g2); g2.connect(lp); lp.connect(g); g.connect(master); g.connect(send);
    o.start(t); o2.start(t); o.stop(t+dur+.05); o2.stop(t+dur+.05);
  }
  function drone(f,t){
    var o=ctx.createOscillator(),g=ctx.createGain(),lp=ctx.createBiquadFilter();
    o.type='sawtooth'; o.frequency.setValueAtTime(f,t); lp.type='lowpass'; lp.frequency.value=650;
    g.gain.setValueAtTime(.0001,t); g.gain.exponentialRampToValueAtTime(.055,t+.04); g.gain.exponentialRampToValueAtTime(.0001,t+3.6);
    o.connect(lp); lp.connect(g); g.connect(master); g.connect(send); o.start(t); o.stop(t+3.7);
  }
  function schedule(){
    var ahead=ctx.currentTime+1.5, beat=.55, fs=[SA*.75,SA,SA,SA/2];
    while(nextTan<ahead){drone(fs[tanIdx%4],nextTan); tanIdx++; nextTan+=1.5}
    while(nextNote<ahead){
      var dur=[1,1,1.5,2,.5][Math.floor(Math.random()*5)]*beat;
      if(Math.random()<.15){nextNote+=dur; continue}
      var prev=deg;
      deg+=[-2,-1,-1,1,1,2][Math.floor(Math.random()*6)];
      if(deg<0) deg=1; if(deg>11) deg=10;
      if(Math.random()<.12) deg=4;
      var f=hz(deg+7);
      pluck(f,nextNote,dur+1.4,.13,(deg!==prev&&lastF&&Math.random()<.5)?lastF:0);
      lastF=f; nextNote+=dur;
    }
  }
  function startSynth(){
    var AC=window.AudioContext||window.webkitAudioContext; if(!AC) return false;
    try{
      if(!ctx){
        ctx=new AC(); master=ctx.createGain(); master.gain.value=0; master.connect(ctx.destination);
        delay=ctx.createDelay(1); delay.delayTime.value=.42;
        var fb=ctx.createGain(); fb.gain.value=.38; send=ctx.createGain(); send.gain.value=.4;
        send.connect(delay); delay.connect(fb); fb.connect(delay); delay.connect(master);
      }
      if(stopTimer){clearTimeout(stopTimer); stopTimer=null}
      ctx.resume();
      var t=ctx.currentTime;
      master.gain.cancelScheduledValues(t); master.gain.setValueAtTime(master.gain.value,t); master.gain.linearRampToValueAtTime(.55,t+1.2);
      nextTan=t+.1; nextNote=t+.8; schedule(); timer=setInterval(schedule,300);
      return true;
    }catch(e){return false}
  }
  function stop(){
    playing=false;
    if(timer){clearInterval(timer); timer=null}
    if(mode==='synth'&&ctx){
      var t=ctx.currentTime; master.gain.cancelScheduledValues(t); master.gain.setValueAtTime(master.gain.value,t); master.gain.linearRampToValueAtTime(0,t+.4);
      stopTimer=setTimeout(function(){try{ctx.suspend()}catch(e){}},600);
    }
    if(audio){audio.pause(); audio=null}
    mode=null;
  }
  function play(id){
    stop();
    if(!id||id==='none') return;
    if(id==='synth'){mode='synth'; playing=startSynth(); if(!playing) mode=null}
    else{
      var tr=null; for(var i=0;i<TRACKS.length;i++) if(TRACKS[i].id===id) tr=TRACKS[i];
      if(!tr) return;
      audio=new Audio(tr.src); audio.loop=true; audio.volume=.7; mode='file'; playing=true;
      var pr=audio.play(); if(pr&&pr.catch) pr.catch(function(){playing=false; updateMusicBtn()});
    }
  }
  function suspend(){if(mode==='synth'&&ctx) try{ctx.suspend()}catch(e){} if(audio) audio.pause()}
  function resume(){if(mode==='synth'&&ctx) try{ctx.resume()}catch(e){} if(audio) audio.play().catch(function(){})}
  return {play:play,stop:stop,suspend:suspend,resume:resume,isPlaying:function(){return playing}};
})();
function startMusic(){ if(!muted&&S.mu!=='none'){Music.play(S.mu); updateMusicBtn()} }
function updateMusicBtn(){
  var b=$('#mbtn'); if(!b) return;
  b.hidden=(S.mu==='none');
  b.setAttribute('aria-pressed',Music.isPlaying()&&!muted);
  b.setAttribute('aria-label',t('m_toggle'));
}
document.addEventListener('visibilitychange',function(){
  if(document.hidden) Music.suspend(); else if(Music.isPlaying()&&!muted) Music.resume();
});
function buildMusicOptions(){
  var h='<option value="none" data-t="mu_none"></option><option value="synth" data-t="mu_synth"></option>';
  TRACKS.forEach(function(tr,i){h+='<option value="'+esc(tr.id)+'" data-tr="'+i+'"></option>'});
  $('#mu').innerHTML=h;
}

/* ---------- share link ---------- */
var shareUrl='';
function origin(){return (location.origin&&location.origin!=='null')?location.origin:location.href.split(/[?#]/)[0].replace(/\/[^\/]*$/,'')}
function clearShare(){shareUrl=''; $('#link-box').hidden=true; $('#link-msg').textContent=''}
async function createLink(){
  var btn=$('#mklink'), msg=$('#link-msg');
  btn.disabled=true; msg.textContent=t('link_busy');
  var o=clean(S); delete o.dirty;
  var url='';
  try{
    var r=await fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(o)});
    if(r.ok){var j=await r.json(); if(j&&j.id) url=origin()+'/c/'+j.id}
  }catch(e){}
  if(!url){
    try{url=origin()+'/?d='+await encodeData(o)}catch(e){}
  }
  btn.disabled=false;
  if(!url){msg.textContent=t('link_fail'); return}
  shareUrl=url;
  $('#link-out').value=url; $('#link-open').href=url;
  $('#link-box').hidden=false; msg.textContent=t('link_done');
  render();
  $('#link-wa').href='https://wa.me/?text='+encodeURIComponent(waText());
}
$('#mklink').addEventListener('click',createLink);
$('#link-copy').addEventListener('click',function(){
  var f=$('#link-out'), msg=$('#link-msg');
  function fb(){f.focus(); f.select(); msg.textContent=t('wa_fail')}
  try{navigator.clipboard.writeText(f.value).then(function(){msg.textContent=t('link_copied')},fb)}catch(e){fb()}
});
$('#mbtn').addEventListener('click',function(){
  muted=!muted;
  if(muted) Music.stop(); else Music.play(S.mu);
  updateMusicBtn();
});

/* ---------- viewer mode: a shared link shows only the card ---------- */
function viewFail(){
  document.body.classList.remove('loading');
  $('#app').innerHTML='<div class="v-msg"><p>'+esc(T.v_notfound[0])+'</p><p>'+esc(T.v_notfound[1])+'</p><p><a href="/">'+esc(T.v_make[0])+' / '+esc(T.v_make[1])+'</a></p></div>';
}
function viewApply(o){
  S=clean(o);
  var n=names(); document.title=n.g+' '+t('amp')+' '+n.b+' | '+t('c_invite');
  applyUI(); renderTheme(); render(); updateMusicBtn();
  document.body.classList.remove('loading');
}
function bootViewer(){
  if(vm){
    fetch(API+'?id='+encodeURIComponent(vm[1])).then(function(r){return r.ok?r.json():Promise.reject()})
      .then(function(j){viewApply(j.card)}).catch(viewFail);
  }else{
    decodeData(vd).then(viewApply).catch(viewFail);
  }
}

/* events form */
(function(){
  var h='';
  EVK.forEach(function(k){
    h+='<div class="ev" id="ev-'+k+'"><label class="sw"><input type="checkbox" data-k="ev.'+k+'.on" id="ev-'+k+'-on"><span data-t="ev_'+k+'"></span></label>'+
    '<div class="ev-body" id="evb-'+k+'">'+
    '<div class="row"><label class="f"><span data-t="date"></span><input type="date" id="ev-'+k+'-date" data-k="ev.'+k+'.date"></label>'+
    '<label class="f"><span data-t="time"></span><input type="time" id="ev-'+k+'-time" data-k="ev.'+k+'.time"></label></div>'+
    '<label class="f"><span data-t="venue"></span><input id="ev-'+k+'-venue" data-k="ev.'+k+'.venue" autocomplete="off"></label>'+
    '<label class="f"><span data-t="addr"></span><input id="ev-'+k+'-addr" data-k="ev.'+k+'.addr" autocomplete="off"></label>'+
    '</div></div>';
  });
  $('#events').innerHTML=h;
})();

function fill(){
  $$('[data-k]').forEach(function(el){
    var v=get(el.dataset.k);
    if(el.type==='checkbox') el.checked=!!v;
    else if(el.type==='radio') el.checked=(v===el.value);
    else el.value=v||'';
  });
  syncEv();
}
function syncEv(){EVK.forEach(function(k){$('#evb-'+k).hidden=!S.ev[k].on})}
function applyUI(){
  document.documentElement.lang=S.lang==='bn'?'bn':'en';
  $$('[data-t]').forEach(function(el){el.textContent=t(el.dataset.t)});
  $$('[data-tr]').forEach(function(el){var tr=TRACKS[el.dataset.tr]; el.textContent=(tr.label&&tr.label[S.lang])||tr.id});
  $('#lang-bn').setAttribute('aria-pressed',S.lang==='bn');
  $('#lang-en').setAttribute('aria-pressed',S.lang==='en');
}

/* formatting */
function num(n,pad){
  var s=String(n); if(pad&&n<10) s='0'+s;
  return S.lang==='bn'?s.replace(/\d/g,function(d){return '০১২৩৪৫৬৭৮৯'.charAt(d)}):s;
}
function dateOf(e){
  if(!e.date) return null;
  var d=new Date(e.date+'T'+(e.time||'00:00')+':00+06:00');
  return isNaN(d)?null:d;
}
function fmtDate(e){
  var d=dateOf(e); if(!d) return '';
  return new Intl.DateTimeFormat(S.lang==='bn'?'bn-BD':'en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric',timeZone:'Asia/Dhaka'}).format(d);
}
function fmtDateShort(e){
  var d=dateOf(e); if(!d) return '';
  return new Intl.DateTimeFormat(S.lang==='bn'?'bn-BD':'en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'Asia/Dhaka'}).format(d);
}
function fmtTime(e){
  if(!e.time) return '';
  var d=dateOf(e)||new Date('2026-01-01T'+e.time+':00+06:00'); if(isNaN(d)) return '';
  return new Intl.DateTimeFormat(S.lang==='bn'?'bn-BD':'en-US',{hour:'numeric',minute:'2-digit',hour12:true,timeZone:'Asia/Dhaka'}).format(d);
}
function mapUrl(e){
  var q=[e.venue,e.addr].filter(Boolean).join(' ');
  return q?'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q):'';
}
function names(){return {g:S.groom||t('ph_groom'), b:S.bride||t('ph_bride')}}
function mainEvent(){
  var e=S.ev.biye; if(e.on&&e.date) return e;
  for(var i=0;i<EVK.length;i++){e=S.ev[EVK[i]]; if(e.on&&e.date) return e}
  return null;
}

/* ---------- drawing: shared pieces ---------- */
var uid=0;
function strip(){
  var id='alp'+(uid++);
  return '<svg class="strip" width="100%" height="14" aria-hidden="true"><defs><pattern id="'+id+'" width="18" height="14" patternUnits="userSpaceOnUse">'+
  '<path d="M9 2.2 14.6 7 9 11.8 3.4 7Z" style="fill:none;stroke:var(--c-accent);stroke-width:1.2"/>'+
  '<circle cx="9" cy="7" r="1.3" style="fill:var(--c-accent)"/><circle cx="0" cy="7" r="1" style="fill:var(--c-accent)"/></pattern></defs>'+
  '<rect width="100%" height="14" fill="url(#'+id+')"/></svg>';
}
/* jhalor: coloured paper bunting that sways */
function jhalor(){
  var n=18,h='<svg class="decor" viewBox="0 0 360 46" aria-hidden="true"><path d="M0 3Q180 33 360 3" fill="none" style="stroke:var(--c-accent)" stroke-width="1.2"/>';
  for(var i=0;i<n;i++){
    var tt=(i+.5)/n, x=360*tt, y=3+2*tt*(1-tt)*30;
    h+='<g class="flag" style="--i:'+i+'"><path d="M'+(x-9).toFixed(1)+' '+y.toFixed(1)+'L'+(x+9).toFixed(1)+' '+y.toFixed(1)+'L'+x.toFixed(1)+' '+(y+30).toFixed(1)+'Z" style="fill:var(--j'+(i%5+1)+')"/>'+
       '<circle cx="'+x.toFixed(1)+'" cy="'+(y+9).toFixed(1)+'" r="2" fill="rgba(255,255,255,.75)"/></g>';
  }
  return h+'</svg>';
}
/* fairy lights that blink in sequence */
function lights(){
  var h='<svg class="decor" viewBox="0 0 360 40" aria-hidden="true">',k=0;
  for(var s=0;s<4;s++){
    var x0=s*90;
    h+='<path d="M'+x0+' 3Q'+(x0+45)+' 33 '+(x0+90)+' 3" fill="none" style="stroke:var(--c-accent)" stroke-width="1" opacity=".8"/>';
    [.1,.3,.5,.7,.9].forEach(function(tt){
      var x=x0+90*tt, y=3+2*tt*(1-tt)*30;
      h+='<rect x="'+(x-1.5).toFixed(1)+'" y="'+y.toFixed(1)+'" width="3" height="4" rx="1" style="fill:var(--c-accent)"/>'+
         '<circle class="bulb" style="color:var(--j'+(k%5+1)+');--i:'+k+'" cx="'+x.toFixed(1)+'" cy="'+(y+8).toFixed(1)+'" r="4.2"/>';
      k++;
    });
  }
  return h+'</svg>';
}
function topDecor(){return jhalor()+lights()}

function petals(){
  var h='',seed=7;
  function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647}
  for(var i=0;i<14;i++){
    h+='<i style="--x:'+(rnd()*100).toFixed(1)+'%;--s:'+(7+rnd()*8).toFixed(1)+'px;--d:'+(10+rnd()*7).toFixed(1)+'s;--dl:-'+(rnd()*16).toFixed(1)+'s;--dx:'+((rnd()-.5)*140).toFixed(0)+'px;--c:var(--pt'+(i%4+1)+')"></i>';
  }
  return h;
}

function archWrap(id,defs,inner){
  var cp='arch'+id;
  return '<svg viewBox="0 0 360 240" preserveAspectRatio="xMidYMax meet" aria-hidden="true"><defs><clipPath id="'+cp+'"><path d="M14 240V112Q14 14 180 14Q346 14 346 112V240Z"/></clipPath>'+defs+'</defs>'+
  '<g clip-path="url(#'+cp+')">'+inner+'</g>'+
  '<path d="M14 240V112Q14 14 180 14Q346 14 346 112V240" fill="none" style="stroke:var(--c-accent)" stroke-width="3"/>'+
  '<path d="M22 240V114Q22 24 180 24Q338 24 338 114V240" fill="none" style="stroke:var(--c-accent)" stroke-width=".8" opacity=".7"/></svg>';
}
function archY(x){
  if(x>180) x=360-x;
  var tt=Math.sqrt((x-14)/166);
  return (1-tt)*(1-tt)*112+2*(1-tt)*tt*14+tt*tt*14;
}
function grad(id,top,mid,bot){
  return '<linearGradient id="'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+top+'"/>'+(mid?'<stop offset=".55" stop-color="'+mid+'"/>':'')+'<stop offset="1" stop-color="'+bot+'"/></linearGradient>';
}
function mandala(cx,cy,r,op){
  var h='<g class="spin" opacity="'+op+'" style="fill:none;stroke:var(--c-accent)">'+
    '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" stroke-width="1.2" stroke-dasharray="2 5"/>'+
    '<circle cx="'+cx+'" cy="'+cy+'" r="'+(r*.78)+'" stroke-width="1"/><circle cx="'+cx+'" cy="'+cy+'" r="'+(r*.36)+'" stroke-width="1"/>';
  for(var k=0;k<16;k++){
    h+='<ellipse cx="'+cx+'" cy="'+(cy-r*.57)+'" rx="'+(r*.085)+'" ry="'+(r*.2)+'" stroke-width="1" transform="rotate('+(k*22.5)+' '+cx+' '+cy+')"/>';
  }
  return h+'</g>';
}

/* ---------- scene: Biye (bride in a palki) ---------- */
function palm(x,h){
  var top=200-h, f='';
  [[-18,-8,-34,6],[18,-8,34,6],[-12,-20,-26,-8],[12,-20,26,-8],[-3,-16,-10,-22]].forEach(function(q){
    f+='<path d="M'+(x+2)+' '+top+'q'+q.join(' ')+'"/>';
  });
  return '<g fill="none" stroke="#3a0e1a" stroke-linecap="round"><path d="M'+x+' 200Q'+(x+5)+' '+(200-h/2)+' '+(x+2)+' '+top+'" stroke-width="4"/><g stroke-width="3">'+f+'</g></g>'+
    '<circle cx="'+(x+2)+'" cy="'+(top+3)+'" r="3" fill="#3a0e1a"/>';
}
function bearer(x,lungi){
  return '<g transform="translate('+x+',0)">'+
  '<rect class="leg" x="-5.5" y="40" width="5" height="24" rx="2.4" fill="#8d5a3b"/><rect class="leg b" x="0.5" y="40" width="5" height="24" rx="2.4" fill="#8d5a3b"/>'+
  '<path d="M-7 16L7 16L9.5 46L-9.5 46Z" fill="'+lungi+'"/><path d="M-6.5 28H7M-7.5 38H8.5" stroke="#fff" stroke-opacity=".35" stroke-width="1"/>'+
  '<rect x="-6.5" y="-6" width="13" height="25" rx="5" fill="#efe0bd"/>'+
  '<circle cx="0" cy="-14" r="6.5" fill="#8d5a3b"/>'+
  '<path d="M-7 -15Q0 -26 7 -15L7 -12L-7 -12Z" fill="#fff"/><path d="M-7 -14.5H7" stroke="#e11d48" stroke-width="1.6"/>'+
  '<path d="M-4 0Q-10 6 -8 15" stroke="#8d5a3b" stroke-width="4" fill="none" stroke-linecap="round"/></g>';
}
function sceneBiye(){
  var id=uid++, palms='';
  [[24,70],[104,92],[176,60],[262,84],[330,66]].forEach(function(p){palms+=palm(p[0],p[1])});
  var gold='#e8b94c';
  var bride='<g class="nod"><path d="M-16 68Q-16 42 0 42Q16 42 16 68Z M-7.5 68Q-7.5 50 0 50Q7.5 50 7.5 68Z" fill="#e11d48" fill-rule="evenodd" stroke="'+gold+'" stroke-width=".8"/>'+
    '<ellipse cx="0" cy="57.5" rx="7" ry="8" fill="#e9b690" style="mix-blend-mode:normal"/>'+
    '<path d="M-16 68Q-16 42 0 42Q16 42 16 68Z M-7.5 68Q-7.5 50 0 50Q7.5 50 7.5 68Z" fill="#e11d48" fill-rule="evenodd" stroke="'+gold+'" stroke-width=".8"/>'+
    '<ellipse cx="-2.8" cy="57" rx="1.2" ry=".8" fill="#2a1410"/><ellipse cx="2.8" cy="57" rx="1.2" ry=".8" fill="#2a1410"/>'+
    '<circle cx="0" cy="53.4" r=".9" fill="#e11d48"/><path d="M-2.2 62Q0 63.6 2.2 62" stroke="#a3303f" stroke-width=".8" fill="none"/>'+
    '<path d="M0 42V50" stroke="'+gold+'" stroke-width="1"/><circle cx="0" cy="51" r="1.3" fill="'+gold+'"/>'+
    '<path d="M-8 68Q0 63.5 8 68" stroke="'+gold+'" stroke-width="1.4" fill="none"/></g>';
  var palki='<g transform="scale(.78)">'+
    '<path d="M-30 -3V10M30 -3V10" stroke="'+gold+'" stroke-width="2"/>'+
    '<path d="M-46 34C-46 10-20 4 0 4C20 4 46 10 46 34Z" fill="#c1121f" stroke="'+gold+'" stroke-width="2"/>'+
    '<path d="M-34 25Q0 10 34 25" fill="none" stroke="'+gold+'" stroke-width="1.5"/>'+
    '<rect x="-40" y="34" width="80" height="40" rx="5" fill="#9b1830" stroke="'+gold+'" stroke-width="2"/>'+
    '<rect x="-24" y="39" width="48" height="29" rx="4" fill="#2a0a12"/>'+bride+
    '<path d="M-24 39L-14 39Q-18 55-24 68Z" fill="'+gold+'"/><path d="M24 39L14 39Q18 55 24 68Z" fill="'+gold+'"/>'+
    '<path d="M-24 39Q0 47 24 39" fill="none" stroke="'+gold+'" stroke-width="1.6"/>'+
    '<rect x="-44" y="72" width="88" height="5" rx="2.5" fill="'+gold+'"/>'+
    '<g class="tassel"><path d="M-46 34V44" stroke="'+gold+'" stroke-width="1.5"/><circle cx="-46" cy="46" r="2.6" fill="'+gold+'"/></g>'+
    '<g class="tassel"><path d="M46 34V44" stroke="'+gold+'" stroke-width="1.5"/><circle cx="46" cy="46" r="2.6" fill="'+gold+'"/></g></g>';
  var inner=
    '<rect width="360" height="240" fill="url(#sk'+id+')"/>'+
    '<circle class="sun" cx="248" cy="104" r="40" fill="#ffd98a" opacity=".22"/><circle class="sun" cx="248" cy="104" r="24" fill="#ffe9b0"/>'+
    '<path class="bird" d="M380 58q4-5 8 0q4-5 8 0" fill="none" stroke="#ffe9b0" stroke-width="1.4" stroke-linecap="round"/>'+
    '<path class="bird" style="animation-delay:-7s" d="M380 80q3-4 6 0q3-4 6 0" fill="none" stroke="#ffe9b0" stroke-width="1.2" stroke-linecap="round"/>'+
    '<path d="M0 182Q70 150 140 176T290 170T360 176V240H0Z" fill="#4a0d1c" opacity=".8"/>'+
    '<g class="scroll"><g>'+palms+'</g><g transform="translate(360)">'+palms+'</g></g>'+
    '<rect y="198" width="360" height="42" fill="#27431f"/><path d="M0 222H360" stroke="#3d6a2c" stroke-width="2" stroke-dasharray="6 8"/>'+
    '<rect y="198" width="360" height="12" fill="#c98b4c" opacity=".9"/>'+
    '<g transform="translate(180,198) scale(1.15) translate(0,-64)"><g class="bob">'+
      bearer(-60,'#1f6f5c')+bearer(60,'#b4491f')+
      '<line x1="-70" y1="-3" x2="70" y2="-3" stroke="#6b4423" stroke-width="4" stroke-linecap="round"/><line x1="-70" y1="-4" x2="70" y2="-4" stroke="#a8743d" stroke-width="1"/>'+
      palki+
    '</g></g>';
  return archWrap(id,grad('sk'+id,'#2a0716','#8f1d3a','#f08a4b'),inner);
}

/* ---------- scene: Gaye Holud (tray, garlands, bride with flower jewellery) ---------- */
function sceneHolud(){
  var id=uid++, i, gar='';
  var xs=[34,76,118,180,242,284,326], lens=[70,44,60,40,60,44,70];
  xs.forEach(function(x,gi){
    var y0=archY(x), g='<g class="gar" style="--i:'+gi+'"><line x1="'+x+'" y1="'+y0.toFixed(1)+'" x2="'+x+'" y2="'+(y0+lens[gi]).toFixed(1)+'" stroke="#2f9e44" stroke-width="1"/>';
    for(var yy=y0+6,c=0;yy<y0+lens[gi];yy+=9,c++){
      g+='<circle cx="'+x+'" cy="'+yy.toFixed(1)+'" r="'+(c%2?4:4.8)+'" fill="'+['#f97316','#facc15','#fb923c'][c%3]+'"/>';
    }
    g+='<circle cx="'+x+'" cy="'+(y0+lens[gi]+6).toFixed(1)+'" r="6.5" fill="#f97316"/><circle cx="'+x+'" cy="'+(y0+lens[gi]+6).toFixed(1)+'" r="2.6" fill="#facc15"/></g>';
    gar+=g;
  });
  var crown='';
  [[163,95],[168,89],[174,86],[180,84.5],[186,86],[192,89],[197,95]].forEach(function(p,k){
    crown+='<g class="twk" style="--i:'+k+'"><circle cx="'+p[0]+'" cy="'+p[1]+'" r="4.2" fill="'+(k%2?'#fff':'#f97316')+'"/><circle cx="'+p[0]+'" cy="'+p[1]+'" r="1.4" fill="#facc15"/></g>';
  });
  var rim='';
  for(i=0;i<9;i++){
    var a=Math.PI*(i/8), fx=180+47*Math.cos(a), fy=208+8.5*Math.sin(a);
    rim+='<circle cx="'+fx.toFixed(1)+'" cy="'+fy.toFixed(1)+'" r="4" fill="'+['#f97316','#facc15','#fff'][i%3]+'"/>';
  }
  var bride=
    '<path d="M136 204Q136 150 180 134Q224 150 224 204Z" fill="url(#yl'+id+')"/>'+
    '<path d="M138 178Q180 160 222 178" fill="none" stroke="#14613a" stroke-width="5"/><path d="M138 185Q180 167 222 185" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.4" stroke-dasharray="3 3"/>'+
    '<path d="M142 156Q132 184 156 195" stroke="#f5b400" stroke-width="12" fill="none" stroke-linecap="round"/>'+
    '<path d="M218 156Q228 184 204 195" stroke="#f5b400" stroke-width="12" fill="none" stroke-linecap="round"/>'+
    '<rect x="172" y="122" width="16" height="16" rx="6" fill="#e1a77f"/>'+
    '<path d="M163 138Q180 172 197 138" fill="none" stroke="#f97316" stroke-width="5" stroke-linecap="round" stroke-dasharray="0 7"/>'+
    '<path d="M163 138Q180 172 197 138" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-dasharray="0 7" stroke-dashoffset="-3.5"/>'+
    '<g class="tilt"><ellipse cx="180" cy="108" rx="19" ry="22" fill="#e8b48a"/>'+
    '<path d="M159 110Q156 76 180 76Q204 76 201 110Q197 91 180 89Q163 91 159 110Z" fill="#1c1210"/>'+crown+
    '<path d="M168 105Q172.5 102.5 177 105M183 105Q187.5 102.5 192 105" stroke="#1c1210" stroke-width="1.3" fill="none" stroke-linecap="round"/>'+
    '<ellipse cx="172.5" cy="110" rx="2.6" ry="1.6" fill="#2a1410"/><ellipse cx="187.5" cy="110" rx="2.6" ry="1.6" fill="#2a1410"/>'+
    '<circle cx="168" cy="116" r="4" fill="#f08a7b" opacity=".35"/><circle cx="192" cy="116" r="4" fill="#f08a7b" opacity=".35"/>'+
    '<path d="M175 119Q180 124 185 119" stroke="#b3263d" stroke-width="2" fill="none" stroke-linecap="round"/>'+
    '<circle cx="180" cy="100" r="1.7" fill="#d7263d"/>'+
    '<circle cx="160.5" cy="116" r="3.2" fill="#f97316"/><circle cx="199.5" cy="116" r="3.2" fill="#fff"/></g>';
  var tray=
    '<ellipse cx="180" cy="211" rx="54" ry="12" fill="#a8760a"/><ellipse cx="180" cy="208" rx="50" ry="10" fill="#e0a82e"/>'+
    '<path d="M150 208Q162 187 180 183Q198 187 210 208Z" fill="#f2a900"/><path d="M162 197Q172 189 180 188" stroke="#ffd45c" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".85"/>'+
    '<path d="M153 201Q145 189 157 185Q163 193 153 201Z" fill="#2f9e44"/><path d="M207 201Q215 189 203 185Q197 193 207 201Z" fill="#2f9e44"/>'+rim+
    '<circle cx="158" cy="196" r="5.5" fill="#e8b48a"/><circle cx="202" cy="196" r="5.5" fill="#e8b48a"/>';
  var kolosh=
    '<g transform="translate(280,208)"><path d="M-16 -26Q-22 -4-8 6L8 6Q22 -4 16 -26Z" fill="#c2761f"/><path d="M-10 -22Q-14 -6-6 2" stroke="#e8a24a" stroke-width="2" fill="none" stroke-linecap="round"/>'+
    '<path d="M-17 -14Q0 -9 17 -14" stroke="#d7263d" stroke-width="3" fill="none"/>'+
    '<rect x="-9" y="-32" width="18" height="8" rx="3" fill="#d9902a"/>'+
    '<path d="M0 -32Q-14 -50-22 -44Q-14 -34 0 -32Z" fill="#2f9e44"/><path d="M0 -32Q14 -50 22 -44Q14 -34 0 -32Z" fill="#2f9e44"/><path d="M0 -32Q-4 -56 0 -62Q4 -56 0 -32Z" fill="#3fb950"/>'+
    '<circle cx="0" cy="-38" r="8" fill="#7a4a1f"/><circle cx="-2.5" cy="-40" r="1.1" fill="#3d2410"/><circle cx="2.5" cy="-40" r="1.1" fill="#3d2410"/><circle cx="0" cy="-36" r="1.1" fill="#3d2410"/></g>';
  var diya=
    '<g transform="translate(86,208)"><circle cx="0" cy="-6" r="13" fill="#ffd166" opacity=".28"/><path d="M-12 0Q0 12 12 0Z" fill="#e0a82e"/><ellipse class="flame" cx="0" cy="-5" rx="3.4" ry="7" fill="#ffd166"/></g>'+
    '<g transform="translate(120,216) scale(.8)"><circle cx="0" cy="-6" r="13" fill="#ffd166" opacity=".28"/><path d="M-12 0Q0 12 12 0Z" fill="#e0a82e"/><ellipse class="flame" style="animation-delay:-.15s" cx="0" cy="-5" rx="3.4" ry="7" fill="#ffd166"/></g>';
  var inner=
    '<rect width="360" height="240" fill="url(#gr'+id+')"/>'+mandala(180,118,92,.4)+gar+
    '<rect y="198" width="360" height="42" fill="#efd9a6"/>'+
    '<ellipse cx="180" cy="219" rx="104" ry="14" fill="none" stroke="#b9772a" stroke-width="1.2" stroke-dasharray="3 4"/><ellipse cx="180" cy="219" rx="80" ry="10" fill="none" stroke="#b9772a" stroke-width="1"/>'+
    '<ellipse cx="180" cy="204" rx="58" ry="9" fill="#b9772a"/>'+
    bride+tray+kolosh+diya;
  var defs=grad('gr'+id,'#0c4226','#17653a','#1f7a43')+
    '<linearGradient id="yl'+id+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe066"/><stop offset="1" stop-color="#f5a800"/></linearGradient>';
  return archWrap(id,defs,inner);
}

/* ---------- scene: Bou-bhat (couple, flower ring, rising hearts) ---------- */
function sceneBou(){
  var id=uid++, ring='', k, hearts='';
  for(k=0;k<28;k++){
    var a=k/28*Math.PI*2, x=180+80*Math.cos(a), y=112+80*Math.sin(a);
    ring+='<circle class="twk" style="--i:'+k+';fill:var(--j'+(k%5+1)+')" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+(k%2?4:5.2)+'"/>';
  }
  [[-14,0],[10,1],[-4,2],[18,3]].forEach(function(h){
    hearts+='<g transform="translate('+(182+h[0])+',128)"><path class="heart" style="--i:'+h[1]+';--dx:'+(h[0]>0?8:-8)+'px;fill:var(--j1)" d="M0 3C-5-2-3-7 0-4C3-7 5-2 0 3Z" transform="scale(1.4)"/></g>';
  });
  var gold='#e6c46c', carpet='';
  for(k=0;k<12;k++) carpet+='<path d="M'+(14+k*30)+' 216l7 7l-7 7l-7-7Z" fill="'+gold+'" opacity=".5"/>';
  function rose(x){
    return '<g transform="translate('+x+',198)"><path d="M-12 0Q-4-10 0-4Q4-10 12 0Z" fill="#2f9e44"/>'+
      '<circle cx="-7" cy="-8" r="7" fill="#ff7a9a"/><circle cx="7" cy="-8" r="7" fill="#ff5d85"/><circle cx="0" cy="-14" r="7.5" fill="#ffa3b8"/><circle cx="0" cy="-8" r="3" fill="#ffd0dc"/></g>';
  }
  var groom=
    '<rect x="138" y="156" width="12" height="42" rx="3" fill="#e6d9bb"/><rect x="154" y="156" width="12" height="42" rx="3" fill="#e6d9bb"/>'+
    '<ellipse cx="144" cy="199" rx="9" ry="3.5" fill="#2b1810"/><ellipse cx="160" cy="199" rx="9" ry="3.5" fill="#2b1810"/>'+
    '<path d="M134 172L134 112Q134 100 152 98Q170 100 170 112L170 172Z" fill="#f4ead2"/>'+
    '<path d="M152 100V142" stroke="#c9a24a" stroke-width="1.5"/><circle cx="152" cy="112" r="1.3" fill="#c9a24a"/><circle cx="152" cy="122" r="1.3" fill="#c9a24a"/><circle cx="152" cy="132" r="1.3" fill="#c9a24a"/>'+
    '<path d="M136 106Q150 112 168 150L160 152Q148 120 134 114Z" fill="#c9304a" stroke="'+gold+'" stroke-width="1"/>'+
    '<path d="M136 112Q130 138 133 158" stroke="#f4ead2" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="133" cy="161" r="4.4" fill="#d9a07a"/>'+
    '<rect x="146" y="88" width="12" height="12" rx="4" fill="#cf9670"/><ellipse cx="152" cy="80" rx="13" ry="15" fill="#d9a07a"/>'+
    '<path d="M139 80Q138 62 152 62Q166 62 165 80Q162 70 152 69Q142 70 139 80Z" fill="#1c1210"/>'+
    '<ellipse cx="147" cy="80" rx="1.8" ry="1.2" fill="#2a1410"/><ellipse cx="157" cy="80" rx="1.8" ry="1.2" fill="#2a1410"/>'+
    '<path d="M146 87Q152 85 158 87" stroke="#1c1210" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M148 90Q152 93 156 90" stroke="#8a3a2a" stroke-width="1.2" fill="none" stroke-linecap="round"/>'+
    '<path d="M168 112Q176 136 182 150" stroke="#f4ead2" stroke-width="9" fill="none" stroke-linecap="round"/>';
  var bride=
    '<g class="lean"><path d="M190 200Q190 124 208 108Q226 124 226 200Z" fill="url(#rd'+id+')"/>'+
    '<path d="M190 188H226" stroke="'+gold+'" stroke-width="4"/><path d="M200 112Q212 150 200 186" fill="none" stroke="'+gold+'" stroke-width="3"/>'+
    '<path d="M224 118Q230 140 227 160" stroke="#c1121f" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="227" cy="162" r="4.4" fill="#e8b48a"/>'+
    '<ellipse cx="208" cy="88" rx="12.5" ry="14.5" fill="#e8b48a"/>'+
    '<path d="M193 100Q190 70 208 68Q226 70 223 100Q220 80 208 78Q196 80 193 100Z" fill="#c1121f"/>'+
    '<path d="M193 100Q188 122 196 134L203 112Z" fill="#c1121f"/>'+
    '<ellipse cx="203" cy="90" rx="1.7" ry="1.1" fill="#2a1410"/><ellipse cx="213" cy="90" rx="1.7" ry="1.1" fill="#2a1410"/>'+
    '<circle cx="208" cy="82.5" r="1.1" fill="#d7263d"/><path d="M205 97Q208 99.5 211 97" stroke="#b3263d" stroke-width="1.5" fill="none" stroke-linecap="round"/>'+
    '<path d="M208 70V80" stroke="'+gold+'" stroke-width="1"/><circle cx="208" cy="80" r="1.2" fill="'+gold+'"/>'+
    '<path d="M198 106Q208 120 218 106" stroke="'+gold+'" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-dasharray="0 4.5"/>'+
    '<circle cx="195.5" cy="94" r="2.2" fill="'+gold+'"/><circle cx="220.5" cy="94" r="2.2" fill="'+gold+'"/>'+
    '<path d="M193 116Q186 136 184 150" stroke="#c1121f" stroke-width="9" fill="none" stroke-linecap="round"/>'+
    '<circle cx="187" cy="143" r="3.4" fill="none" stroke="'+gold+'" stroke-width="1.5"/></g>'+
    '<circle cx="183" cy="152" r="4.6" fill="#e8b48a"/>';
  var inner=
    '<rect width="360" height="240" fill="url(#sk'+id+')"/>'+
    '<circle cx="180" cy="112" r="66" fill="none" style="stroke:var(--c-accent)" stroke-width=".8" opacity=".6"/>'+ring+
    '<rect y="196" width="360" height="44" fill="#7a1228"/><rect y="196" width="360" height="4" fill="'+gold+'"/>'+carpet+
    rose(40)+rose(320)+groom+bride+hearts;
  var defs=grad('sk'+id,'#061f26','#0d4750','#16606b')+
    '<linearGradient id="rd'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d4192f"/><stop offset="1" stop-color="#8f0d1f"/></linearGradient>';
  return archWrap(id,defs,inner);
}

/* ---------- scene: Ivory and gold (mandala + lotus) ---------- */
function sceneShada(){
  var id=uid++, lotus='', k;
  for(k=0;k<8;k++){
    lotus+='<path d="M180 150Q166 118 180 92Q194 118 180 150Z" style="fill:var(--c-accent)" opacity=".85" transform="rotate('+(k*45-157.5)+' 180 150)"/>';
  }
  var inner='<rect width="360" height="240" fill="url(#sk'+id+')"/>'+mandala(180,134,100,.55)+
    '<g class="tilt" style="transform-origin:180px 150px">'+lotus+'<circle cx="180" cy="130" r="8" fill="#d1a24a"/></g>'+
    '<path d="M14 214Q180 192 346 214V240H14Z" fill="#a3303f" opacity=".12"/>';
  return archWrap(id,grad('sk'+id,'#fffaf0','','#f1e3c8'),inner);
}
function scene(th){
  if(th==='holud') return sceneHolud();
  if(th==='bou') return sceneBou();
  if(th==='shada') return sceneShada();
  return sceneBiye();
}

function icon(k){
  var s='<svg viewBox="0 0 36 36" aria-hidden="true">', i;
  if(k==='holud'){
    for(i=0;i<8;i++){var a=i/8*Math.PI*2; s+='<circle cx="'+(18+9.5*Math.cos(a)).toFixed(1)+'" cy="'+(18+9.5*Math.sin(a)).toFixed(1)+'" r="5.2" style="fill:var(--c-accent)"/>';}
    s+='<circle cx="18" cy="18" r="5" style="fill:var(--c-bg)"/>';
  }else if(k==='biye'){
    s+='<path d="M2 5H34" style="stroke:var(--c-accent)" stroke-width="2" stroke-linecap="round"/><path d="M12 5V12M24 5V12" style="stroke:var(--c-accent)" stroke-width="1.6"/>'+
       '<path d="M5 22C5 14 12 11 18 11C24 11 31 14 31 22Z" style="fill:var(--c-accent)"/><rect x="7" y="22" width="22" height="10" rx="2.5" fill="none" style="stroke:var(--c-accent)" stroke-width="2"/>';
  }else{
    s+='<circle cx="13" cy="21" r="8" fill="none" style="stroke:var(--c-accent)" stroke-width="2.6"/><circle cx="23" cy="21" r="8" fill="none" style="stroke:var(--c-accent)" stroke-width="2.6"/>'+
       '<path d="M18 4l3 4l-3 4l-3-4Z" style="fill:var(--c-accent)"/>';
  }
  return s+'</svg>';
}

function openingHTML(small){
  if(S.open==='bismillah') return '<p class="c-arabic'+(small?' sm':'')+'" lang="ar" dir="rtl">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>';
  if(S.open==='shubho') return '<p class="c-open">'+(S.lang==='bn'?'শুভ বিবাহ':'Shubho Bibaho')+'</p>';
  return '';
}

/* theme-only parts: redrawn when the theme changes, not on every keystroke, so animations keep playing */
function renderTheme(){
  $('#card').dataset.card=S.theme;
  $('#cv-decor').innerHTML=topDecor();
  $('#cv-scene').innerHTML=scene(S.theme);
  $('#in-decor').innerHTML=topDecor();
  $('#fall').innerHTML=petals();
}

function render(){
  var n=names(), me=mainEvent();
  $('#cv-mid').innerHTML=
    openingHTML(true)+'<p class="c-kicker">'+esc(t('c_invite'))+'</p>'+
    '<h2 class="cv-names"><span>'+esc(n.g)+'</span><span class="amp">'+esc(t('amp'))+'</span><span>'+esc(n.b)+'</span></h2>'+
    (me?'<p class="cv-date">'+esc(fmtDateShort(me))+'</p>':'')+
    '<button type="button" class="cv-btn" id="cv-btn">'+esc(t('c_open'))+'</button>';

  var fam='';
  if(S.groomFam) fam+='<p class="c-fam"><em>'+esc(t('c_son'))+'</em>'+esc(S.groomFam)+'</p>';
  if(S.brideFam) fam+='<p class="c-fam"><em>'+esc(t('c_daughter'))+'</em>'+esc(S.brideFam)+'</p>';
  var head='<div class="c-head">'+openingHTML(false)+'<p class="c-kicker">'+esc(t('c_invite'))+'</p>'+
    '<h2 class="c-names"><span>'+esc(n.g)+'</span><span class="amp">'+esc(t('amp'))+'</span><span>'+esc(n.b)+'</span></h2>'+
    fam+(S.msg?'<p class="c-msg">'+esc(S.msg)+'</p>':'')+'</div>';

  var count='';
  if(target()){
    count='<div class="c-count" id="cd">'+['d','h','m','s'].map(function(u){return '<div><b data-u="'+u+'">–</b><span>'+esc(t(u))+'</span></div>'}).join('')+'</div>'+
    '<p class="c-cd-label" id="cd-label">'+esc(t('c_count'))+'</p>';
  }

  var evs='';
  EVK.forEach(function(k){
    var e=S.ev[k]; if(!e.on) return;
    var ds=fmtDate(e), ts=fmtTime(e), mu=mapUrl(e);
    evs+='<article class="c-ev"><h3>'+icon(k)+'<span>'+esc(t('ev_'+k))+'</span></h3>'+
      ((ds||ts)?'<p class="when">'+esc([ds,ts].filter(Boolean).join(' · '))+'</p>':'')+
      (e.venue?'<p class="where">'+esc(e.venue)+'</p>':'')+(e.addr?'<p>'+esc(e.addr)+'</p>':'')+
      (mu?'<a href="'+esc(mu)+'" target="_blank" rel="noopener noreferrer">'+esc(t('c_maps'))+' →</a>':'')+'</article>';
  });
  evs='<div class="c-events">'+evs+'</div>';

  var rsvp=S.phone?'<div class="c-rsvp"><span class="c-kicker">'+esc(t('c_rsvp'))+'</span><b>'+esc(S.phone)+'</b></div>':'';
  var foot='<div class="c-foot">'+strip()+'<span>'+esc(t('c_wait'))+'</span>'+(isView?'<a class="c-make" href="/">'+esc(t('v_make'))+'</a>':'')+'</div>';

  $('#in-body').innerHTML=head+count+evs+rsvp+foot;
  applyOpen();
  tick();
  $('#pv-note').textContent=S.dirty?'':t('sample_note');
  $('#wa').value=waText();
}

function applyOpen(){
  var c=$('#cover'), i=$('#inside');
  c.classList.toggle('is-open',opened);
  if('inert' in c){c.inert=opened; i.inert=!opened;}
  $('#pv-cover').setAttribute('aria-pressed',!opened);
  $('#pv-inside').setAttribute('aria-pressed',opened);
}

function target(){
  var best=null;
  EVK.forEach(function(k){
    var e=S.ev[k]; if(!e.on) return;
    var d=dateOf(e); if(d&&(!best||d<best)) best=d;
  });
  return best;
}
function tick(){
  var cd=$('#cd'); if(!cd) return;
  var tg=target(); if(!tg) return;
  var diff=tg-new Date();
  if(diff<=0){
    $$('#cd [data-u]').forEach(function(b){b.textContent=num(0,true)});
    var lb=$('#cd-label'); if(lb) lb.textContent=t('c_done'); return;
  }
  var s=Math.floor(diff/1000), d=Math.floor(s/86400); s-=d*86400;
  var h=Math.floor(s/3600); s-=h*3600; var m=Math.floor(s/60); s-=m*60;
  var v={d:num(d,false),h:num(h,true),m:num(m,true),s:num(s,true)};
  $$('#cd [data-u]').forEach(function(b){b.textContent=v[b.dataset.u]});
}
setInterval(tick,1000);

function waText(){
  var n=names(), out=[];
  var open=S.open==='bismillah'?'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ':(S.open==='shubho'?(S.lang==='bn'?'শুভ বিবাহ':'Shubho Bibaho'):'');
  if(open) out.push(open,'');
  out.push(S.lang==='bn'?(n.g+' ও '+n.b+'-এর '+t('wa_wed')):(t('wa_wed')+' '+n.g+' & '+n.b));
  if(S.msg) out.push('',S.msg);
  EVK.forEach(function(k){
    var e=S.ev[k]; if(!e.on) return;
    var line=[fmtDate(e),fmtTime(e)].filter(Boolean).join(', ');
    var where=[e.venue,e.addr].filter(Boolean).join(', ');
    out.push('', '*'+t('ev_'+k)+'*'+(line?' — '+line:''));
    if(where) out.push(t('wa_venue')+': '+where);
    var mu=mapUrl(e); if(mu) out.push(t('wa_map')+': '+mu);
  });
  if(S.phone) out.push('',t('c_rsvp')+': '+S.phone);
  if(shareUrl) out.push('',shareUrl);
  return out.join('\n');
}

/* events */
function onEdit(e){
  var el=e.target.closest&&e.target.closest('[data-k]'); if(!el) return;
  var key=el.dataset.k;
  set(key, el.type==='checkbox'?el.checked:el.value);
  if(key!=='theme'&&key!=='mu') S.dirty=true;
  syncEv();
  if(key==='theme') renderTheme();
  if(key==='mu'){muted=false; Music.play(S.mu); updateMusicBtn()}
  clearShare();
  render(); save();
}
document.addEventListener('input',onEdit);
document.addEventListener('change',onEdit);

$('#card').addEventListener('click',function(e){
  if(e.target.closest('#cv-btn')){opened=true;applyOpen();startMusic();}
});
$('#pv-cover').addEventListener('click',function(){opened=false;applyOpen()});
$('#pv-inside').addEventListener('click',function(){opened=true;applyOpen();startMusic()});

function setLang(l){
  if(S.lang===l) return;
  if(S.dirty){S.lang=l;}
  else{var th=S.theme,op=S.open,mu=S.mu;S=mkSample(l);S.theme=th;S.open=op;S.mu=mu;}
  clearShare(); applyUI(); fill(); render(); save();
}
$('#lang-bn').addEventListener('click',function(){setLang('bn')});
$('#lang-en').addEventListener('click',function(){setLang('en')});

function pane(p){
  $('#app').dataset.pane=p;
  $('#tab-edit').setAttribute('aria-pressed',p==='edit');
  $('#tab-prev').setAttribute('aria-pressed',p==='preview');
  window.scrollTo(0,0);
}
$('#tab-edit').addEventListener('click',function(){pane('edit')});
$('#tab-prev').addEventListener('click',function(){pane('preview')});

$('#blank').addEventListener('click',function(){S=mkBlank();fill();render();save()});
$('#restore').addEventListener('click',function(){var th=S.theme,op=S.open,mu=S.mu,l=S.lang;S=mkSample(l);S.theme=th;S.open=op;S.mu=mu;fill();render();save()});

$('#copy').addEventListener('click',function(){
  var ta=$('#wa'), msg=$('#copy-msg');
  function fallback(){ta.focus();ta.select();msg.textContent=t('wa_fail')}
  try{
    navigator.clipboard.writeText(ta.value).then(function(){msg.textContent=t('wa_done')},fallback);
  }catch(e){fallback()}
});

buildMusicOptions(); applyUI(); fill(); renderTheme(); render(); updateMusicBtn();
if(isView) bootViewer();
})();
