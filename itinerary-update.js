(() => {
  const rows = [
    {date:"22/10/26", day:"22", time:"18.00 น.", title:"นัดพบที่สถานีกลางกรุงเทพอภิวัฒน์", map:[["แผนที่สถานี","https://share.google/nLR4y4dTEeVg9Crkv"]]},
    {date:"22/10/26", day:"22", time:"18.40 – 07.15 น.", title:"เดินทางด้วยรถไฟ กรุงเทพฯ → เชียงใหม่", transport:"รถไฟ", note:"รถไฟกลางคืน ถึงเชียงใหม่เวลา 07.15 น. วันที่ 23 ต.ค.", links:[["ตั๋วรถไฟขาไป","https://drive.google.com/drive/folders/10wXglfcYZOx5vQt3YJxhfmtWhR1DQlZk?usp=drive_link"],["วิดีโออ้างอิง","https://youtu.be/hbzOS5jzFhg"]]},
    {date:"23/10/26", day:"23", time:"07.15 – 08.00 น.", title:"หาอาหารเช้าแถวสถานีรถไฟเชียงใหม่"},
    {date:"23/10/26", day:"23", time:"08.00 – 08.30 น.", title:"รับรถยนต์และเซ็นสัญญารับรถ"},
    {date:"23/10/26", day:"23", time:"08.30 – 10.00 น.", title:"เดินทางไป Pong Yang Jungle Coaster & Zipline และแวะ Makro ซื้อของ", transport:"รถยนต์", map:[["เส้นทางไป Pong Yang","https://share.google/ScGBqj25QwwssWRYb"],["Makro เชียงใหม่","https://share.google/1ZBfrAG8MtjWHqjQ3"]]},
    {date:"23/10/26", day:"23", time:"10.00 – 13.00 น.", title:"เล่นกิจกรรม Pong Yang Jungle Coaster & Zipline และรับประทานอาหารกลางวัน", note:"ดูรายละเอียดค่าใช้จ่ายเครื่องเล่นจากลิงก์ด้านล่าง", links:[["รายละเอียดค่าใช้จ่าย","https://drive.google.com/drive/folders/1UW7eLpfv5mEkOHyGKp8UH5nhw05qylfg?usp=drive_link"],["รีวิวกิจกรรม","https://www.instagram.com/reel/DWx40U0xH9C/?igsh=eWZpdjhremZ0bzBr"]]},
    {date:"23/10/26", day:"23", time:"13.00 – 15.00 น.", title:"เดินทางจาก Pong Yang ไปห้วยกุ๊บกั๊บ", transport:"รถยนต์", map:[["เส้นทางไปห้วยกุ๊บกั๊บ","https://maps.app.goo.gl/SGhfb7zzmWBTrgqw7?g_st=ic"]]},
    {date:"23/10/26", day:"23", time:"15.00 น.", title:"เช็กอิน บ้านสายหมอก ณ กุ๊บกั๊บ · หลังอุ่นไอหมอก", transport:"รถยนต์", map:[["ที่พัก","https://share.google/gCBSuEKc1fkUAsTiP"]], note:"ราคา 1,200 บาท/ท่าน · 2 ห้องนอน · ห้องละ 4–5 ท่าน · 2 ห้องน้ำ · มีครัวส่วนกลางและอุปกรณ์ทำครัว · รวมอาหารเช้าและหมูกระทะชุดใหญ่ 2 ชุด พร้อมน้ำแข็งและรถรับส่ง\n\nสิ่งอำนวยความสะดวก: ห้องน้ำในตัว ผ้าเช็ดตัว อ่างแช่ 2 อ่าง เครื่องทำน้ำอุ่น น้ำดื่ม 1 ขวด/ท่าน พัดลม สบู่ และแชมพู\n\nเงื่อนไขที่พัก: เงินมัดจำไม่คืนกรณีไม่เข้าพัก แต่เลื่อนวันได้ 1 ครั้ง โดยแจ้งล่วงหน้าอย่างน้อย 1 สัปดาห์ เงินส่วนที่เหลือชำระเป็นเงินสด\n\nติดต่อ: บอล 097-362-2359 · แทด 061-362-8295 · LINE 0613628295 / 097-362-2359", links:[["รีวิว/ข้อมูลที่พัก","https://www.tiktok.com/@tad149?_r=1&_t=ZS-98k6lW38Jnw"]]},
    {date:"23/10/26", day:"23", time:"15.00 – 18.00 น.", title:"เที่ยวผาสามเหลี่ยม (เลือกไปได้ตามความสะดวก)", note:"ใครไม่ไปสามารถพักผ่อนตามอัธยาศัยได้", links:[["รีวิวผาสามเหลี่ยม","https://www.instagram.com/reel/DaswI_zPaom/"]]},
    {date:"23/10/26", day:"23", time:"18.00 น. เป็นต้นไป", title:"รับประทานอาหารเย็นและพักผ่อนตามอัธยาศัย"},
    {date:"24/10/26", day:"24", time:"07.30 – 08.30 น.", title:"รับประทานอาหารเช้า"},
    {date:"24/10/26", day:"24", time:"08.30 – 10.00 น.", title:"พักผ่อน อาบน้ำ เก็บของ และแต่งตัว"},
    {date:"24/10/26", day:"24", time:"10.00 น.", title:"เช็กเอาต์จากบ้านสายหมอก ณ กุ๊บกั๊บ"},
    {date:"24/10/26", day:"24", time:"10.00 – 11.00 น.", title:"เดินทางไปสวนสนแม่แตง (สวนผลิตเมล็ดพันธุ์ไม้สนสองใบ)", transport:"รถยนต์", map:[["เส้นทางไปสวนสนแม่แตง","https://share.google/VYR5JzU3MU4fPbAfa"]]},
    {date:"24/10/26", day:"24", time:"11.00 – 12.00 น.", title:"เที่ยวสวนสนแม่แตง", links:[["รีวิวสวนสนแม่แตง","https://www.instagram.com/reel/CwNJtZyKGiy/?igsh=MTVxMXNqdzR0b3V5aA=="]]},
    {date:"24/10/26", day:"24", time:"12.00 – 13.00 น.", title:"เดินทางไปคาเฟ่ Tarnchevee", transport:"รถยนต์", map:[["เส้นทางไป Tarnchevee","https://share.google/KA6LOzKOxzlWNQk7P"]]},
    {date:"24/10/26", day:"24", time:"13.00 – 15.00 น.", title:"ดื่มกาแฟ รับประทานอาหารกลางวัน และพักผ่อนที่ Tarnchevee", links:[["รีวิวคาเฟ่","https://www.instagram.com/reel/C_LDXrzyELT/?igsh=MW84eGNuaXV4cHlyNw=="]]},
    {date:"24/10/26", day:"24", time:"15.00 – 17.00 น.", title:"เดินทางไปแม่ปั๋ง แคมป์ปิ้ง", transport:"รถยนต์", map:[["เส้นทางไปแม่ปั๋ง แคมป์ปิ้ง","https://share.google/lclOkNF0UDbhbd2bL"]]},
    {date:"24/10/26", day:"24", time:"17.00 – 20.00 น.", title:"กิจกรรมอิสระที่แม่ปั๋ง แคมป์ปิ้ง", note:"สระว่ายน้ำฟรี · ATV 600 บาท/คัน/ชั่วโมง (นั่งได้ 2 คน) · พายเรือคายัคฟรีสำหรับลูกค้าที่พัก"},
    {date:"24/10/26", day:"24", time:"20.00 – 22.00 น.", title:"รับประทานอาหารเย็น ณ ที่พักแม่ปั๋ง แคมป์ปิ้ง"},
    {date:"24/10/26", day:"24", time:"22.00 น. เป็นต้นไป", title:"พักผ่อนตามอัธยาศัย"},
    {date:"25/10/26", day:"25", time:"05.00 – 06.30 น.", title:"ทำธุระส่วนตัวและเตรียมตัวไปดูต้นฉำฉา"},
    {date:"25/10/26", day:"25", time:"06.30 – 08.30 น.", title:"เดินทางและเที่ยวชมต้นฉำฉา"},
    {date:"25/10/26", day:"25", time:"08.30 – 10.00 น.", title:"รับประทานอาหารเช้า"},
    {date:"25/10/26", day:"25", time:"10.00 – 12.00 น.", title:"พักผ่อนตามอัธยาศัย"},
    {date:"25/10/26", day:"25", time:"12.00 น.", title:"เช็กเอาต์จากแม่ปั๋ง แคมป์ปิ้ง"},
    {date:"25/10/26", day:"25", time:"12.00 – 14.00 น.", title:"เดินทางไปสวนสาธารณะ อบจ. เชียงใหม่ และหาร้านอาหารกลางวันระหว่างทาง", transport:"รถยนต์", map:[["เส้นทางไปสวนสาธารณะ อบจ.","https://share.google/RDhDgDzK2XSusnTGx"]], note:"เลือกร้านอาหารที่อยู่ตามเส้นทางเดินทาง"},
    {date:"25/10/26", day:"25", time:"14.00 – 15.00 น.", title:"เที่ยวสวนสาธารณะ อบจ. เชียงใหม่", note:"สามารถแวะคาเฟ่ได้", links:[["วิดีโออ้างอิง","https://vt.tiktok.com/ZSVNEo4yA/"]]},
    {date:"25/10/26", day:"25", time:"15.00 – 15.30 น.", title:"เดินทางไปอ่างแก้ว มช.", transport:"รถยนต์", map:[["เส้นทางไปอ่างแก้ว","https://share.google/ANY4NMjov6c4ZrPhr"]]},
    {date:"25/10/26", day:"25", time:"15.30 – 16.30 น.", title:"เที่ยวอ่างแก้ว มช.", links:[["วิดีโออ้างอิง","https://vt.tiktok.com/ZSVNEvT4y/"]]},
    {date:"25/10/26", day:"25", time:"16.30 – 17.00 น.", title:"เดินทางไปสถานีรถไฟเชียงใหม่", transport:"รถยนต์", map:[["เส้นทางไปสถานีรถไฟเชียงใหม่","https://share.google/iR6m231NK7QCXPPYu"]]},
    {date:"25/10/26", day:"25", time:"17.00 – 18.00 น.", title:"รับประทานอาหารเย็นและคืนรถยนต์"},
    {date:"25/10/26", day:"25", time:"18.20 – 06.30 น.", title:"เดินทางกลับด้วยรถไฟ เชียงใหม่ → กรุงเทพอภิวัฒน์", transport:"รถไฟ", note:"ถึงกรุงเทพฯ เวลา 06.30 น. วันที่ 26 ต.ค. (หมายเหตุ: แก้ทิศทางจากข้อความในชีตให้สอดคล้องกับลิงก์ตั๋วขากลับ)", links:[["ตั๋วรถไฟขากลับ","https://drive.google.com/drive/folders/1b6-GtzKWlw_oFT19HATaBEc_9SUUn0gu?usp=drive_link"],["วิดีโออ้างอิง","https://youtu.be/hbzOS5jzFhg"]]}
  ];
  const dateMeta = {
    "22":{label:"22 ต.ค. · พฤหัสฯ",title:"ออกเดินทาง",summary:"นัดพบและขึ้นรถไฟกลางคืนสู่เชียงใหม่"},
    "23":{label:"23 ต.ค. · ศุกร์",title:"Pong Yang & ห้วยกุ๊บกั๊บ",summary:"กิจกรรมผจญภัยและพักบ้านสายหมอก"},
    "24":{label:"24 ต.ค. · เสาร์",title:"สวนสนแม่แตง & แม่ปั๋ง",summary:"เที่ยวคาเฟ่และเข้าที่พักแคมป์ปิ้ง"},
    "25":{label:"25 ต.ค. · อาทิตย์",title:"ต้นฉำฉา & กลับกรุงเทพฯ",summary:"เที่ยวในเมือง คืนรถ และขึ้นรถไฟกลับ"}
  };
  const esc = s => String(s || "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const anchor = item => '<a class="cm-link" href="'+esc(item[1])+'" target="_blank" rel="noopener noreferrer">'+esc(item[0])+' ↗</a>';
  const linkBlock = (list,cls) => (list && list.length) ? '<div class="'+cls+'">'+list.map(anchor).join("")+'</div>' : "";
  const root = document.createElement("section");
  root.id = "cm-itinerary-update";
  root.innerHTML = '<div class="cm-wrap"><div class="cm-eyebrow">CHIANG MAI · GROUP TRIP 2026</div><div class="cm-head"><div><h2>ชายเหมี่ยง <span>· Itinerary</span></h2><p class="cm-intro">22–25 ตุลาคม 2026 <i> / </i> รถไฟ · รถยนต์ · ธรรมชาติ · คาเฟ่</p></div><div class="cm-count"><strong>4</strong><span>DAYS</span></div></div><div class="cm-note-top">กำหนดการอ้างอิงจากชีตล่าสุด · เวลาทั้งหมดเป็นเวลาท้องถิ่น · รายการจองที่ว่างในชีตยังไม่ได้ระบุสถานะ</div><div class="cm-tabs" role="tablist" aria-label="เลือกวันที่"><button class="active" data-day="all">ทั้งหมด</button>'+Object.keys(dateMeta).map(k=>'<button data-day="'+k+'">'+k+' ต.ค.</button>').join("")+'</div><div class="cm-days">'+Object.keys(dateMeta).map(k=>'<section class="cm-day" data-day-section="'+k+'"><div class="cm-day-head"><div><div class="cm-date">'+dateMeta[k].label+'</div><h3>'+dateMeta[k].title+'</h3><p>'+dateMeta[k].summary+'</p></div><span class="cm-day-num">DAY '+k+'</span></div><div class="cm-timeline">'+rows.filter(r=>r.day===k).map((r,i)=>'<article class="cm-item"><div class="cm-time">'+esc(r.time)+'</div><div class="cm-item-body"><div class="cm-item-title">'+esc(r.title)+'</div>'+(r.transport?'<span class="cm-transport">'+esc(r.transport)+'</span>':'')+(r.note?'<p class="cm-detail">'+esc(r.note).replace(/\n/g,"<br>")+'</p>':'')+linkBlock(r.map,"cm-links")+linkBlock(r.links,"cm-links")+'</div></article>').join("")+'</div></section>').join("")+'</div><div class="cm-footer"><strong>ก่อนออกเดินทาง</strong><p>ตรวจสอบตั๋วรถไฟ การรับ–คืนรถ และยืนยันรายละเอียดกับที่พักอีกครั้ง โดยเฉพาะเวลาเดินทางช่วงภูเขาและจุดนัดพบ</p><span>อัปเดตจาก Chiang Mai Itinerary · 20 OCT 2026</span></div></div>';
  const style = document.createElement("style");
  style.id = "cm-itinerary-update-style";
  style.textContent = '#cm-itinerary-update{background:#f4f0e7;color:#20231f;padding:clamp(28px,5vw,72px) 18px;font-family:inherit;position:relative;z-index:1;border-top:1px solid #d3cec2;border-bottom:1px solid #d3cec2}#cm-itinerary-update *{box-sizing:border-box}#cm-itinerary-update .cm-wrap{max-width:1040px;margin:0 auto}#cm-itinerary-update .cm-eyebrow{font:11px/1.5 monospace;letter-spacing:.18em;color:#6d725d}#cm-itinerary-update .cm-head{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;border-bottom:1px solid #c7c1b4;padding:16px 0 24px}#cm-itinerary-update h2{font-size:clamp(28px,4vw,50px);line-height:1.1;letter-spacing:-.045em;margin:0;font-weight:650}#cm-itinerary-update h2 span{font-size:.58em;font-weight:400;color:#777b6b;letter-spacing:-.02em}#cm-itinerary-update .cm-intro{margin:14px 0 0;color:#65675c;font-size:14px}#cm-itinerary-update .cm-intro i{font-style:normal;padding:0 7px;color:#b16d45}#cm-itinerary-update .cm-count{border:1px solid #c7c1b4;padding:9px 15px;display:flex;flex-direction:column;align-items:center;min-width:66px}#cm-itinerary-update .cm-count strong{font:30px/1 monospace}#cm-itinerary-update .cm-count span{font:9px/1.5 monospace;letter-spacing:.16em}#cm-itinerary-update .cm-note-top{font-size:12px;color:#77796c;padding:13px 0 8px}#cm-itinerary-update .cm-tabs{display:flex;gap:7px;flex-wrap:wrap;margin:14px 0 32px}#cm-itinerary-update .cm-tabs button{border:1px solid #bdb8aa;background:transparent;color:#34372f;padding:9px 14px;font:inherit;font-size:12px;cursor:pointer;border-radius:0}#cm-itinerary-update .cm-tabs button.active,#cm-itinerary-update .cm-tabs button:hover{background:#252923;color:#f5f0e6;border-color:#252923}#cm-itinerary-update .cm-day{margin:0 0 34px}#cm-itinerary-update .cm-day-head{display:flex;justify-content:space-between;gap:20px;padding:18px 0;border-bottom:1px solid #c7c1b4}#cm-itinerary-update .cm-date{font:11px/1.5 monospace;letter-spacing:.08em;color:#9a623f}#cm-itinerary-update h3{margin:5px 0;font-size:clamp(21px,3vw,30px);letter-spacing:-.025em}#cm-itinerary-update .cm-day-head p{margin:0;color:#747569;font-size:13px}#cm-itinerary-update .cm-day-num{font:11px monospace;color:#878879;white-space:nowrap;padding-top:5px}#cm-itinerary-update .cm-timeline{border-left:1px solid #c5beaf;margin:18px 0 0 7px;padding-left:22px}#cm-itinerary-update .cm-item{display:grid;grid-template-columns:130px minmax(0,1fr);gap:18px;padding:16px 0;position:relative;border-bottom:1px solid #ded8cb}#cm-itinerary-update .cm-item:before{content:"";position:absolute;left:-27px;top:23px;width:8px;height:8px;background:#b56e47;border:2px solid #f4f0e7;border-radius:50%;box-shadow:0 0 0 1px #b56e47}#cm-itinerary-update .cm-time{font:12px/1.6 monospace;color:#77796d}#cm-itinerary-update .cm-item-title{font-size:15px;font-weight:600;line-height:1.5}#cm-itinerary-update .cm-transport{display:inline-block;font:10px monospace;padding:3px 7px;border:1px solid #cbc4b6;color:#6d705f;margin-top:7px}#cm-itinerary-update .cm-detail{white-space:normal;font-size:12px;line-height:1.8;color:#66685d;margin:10px 0 0}#cm-itinerary-update .cm-links{display:flex;flex-wrap:wrap;gap:7px;margin-top:10px}#cm-itinerary-update .cm-link{display:inline-block;text-decoration:none;border:1px solid #c7c1b4;color:#555d4b;font-size:11px;padding:6px 9px}#cm-itinerary-update .cm-link:hover{background:#e4ddcf;border-color:#938b78}#cm-itinerary-update .cm-footer{border-top:1px solid #c7c1b4;padding-top:18px;font-size:13px;color:#686a5f}#cm-itinerary-update .cm-footer strong{color:#34372f}#cm-itinerary-update .cm-footer p{line-height:1.7}#cm-itinerary-update .cm-footer span{font:10px monospace;letter-spacing:.08em;color:#999687}@media(max-width:600px){#cm-itinerary-update{padding:28px 15px}#cm-itinerary-update .cm-item{grid-template-columns:1fr;gap:3px;padding:14px 0}#cm-itinerary-update .cm-time{font-size:11px}#cm-itinerary-update .cm-timeline{padding-left:16px}#cm-itinerary-update .cm-item:before{left:-21px}#cm-itinerary-update .cm-head{gap:10px}#cm-itinerary-update .cm-count{min-width:54px;padding:8px 10px}}';
  document.head.appendChild(style);
  const contentTerms = ["Pong Yang","กุ๊บกั๊บ","ผาสามเหลี่ยม","Tarnchevee","แม่ปั๋ง","อ่างแก้ว","ต้นฉำฉา","สวนสนแม่แตง"];
  const sections = Array.from(document.querySelectorAll("main, section, article, div"));
  const score = el => contentTerms.reduce((n,term)=>n+(el.textContent.toLowerCase().includes(term.toLowerCase())?1:0),0);
  const matches = sections.filter(el=>score(el)>=5 && el.textContent.length>700).sort((a,b)=>a.textContent.length-b.textContent.length);
  let inserted = false;
  if(matches.length && matches[0] !== document.body && matches[0] !== document.documentElement) {
    const target = matches[0];
    target.replaceWith(root);
    inserted=true;
  }
  if(!inserted) {
    const main = document.querySelector("main");
    if(main) {
      const first = main.querySelector(":scope > section, :scope > article, :scope > div");
      if(first) { first.after(root); inserted=true; }
      else { main.prepend(root); inserted=true; }
    }
  }
  if(!inserted) document.body.prepend(root);
  root.querySelectorAll(".cm-tabs button").forEach(btn=>btn.addEventListener("click",()=>{
    const value=btn.getAttribute("data-day");
    root.querySelectorAll(".cm-tabs button").forEach(b=>b.classList.toggle("active",b===btn));
    root.querySelectorAll(".cm-day").forEach(day=>day.hidden=value!=="all"&&day.getAttribute("data-day-section")!==value);
  }));
})();