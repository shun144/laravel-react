import{b as a}from"./app-BSo6kXZY.js";const p=async i=>{try{let o=function(n){let t=0;return u.forEach(r=>{t+=n.salespoint_ids.includes(r[0])?r[1]:0}),{...n,earn_point:t}};const l=window.location.origin,[w,c,f]=window.location.pathname.split("/"),_=(await a.get(`${l}/${c}/${f}/cityheaven`)).data.girlsData,e={};i.map(n=>n.salesPointNos).forEach(n=>{n.forEach(t=>{e[t]?e[t]++:e[t]=1})});const u=Object.entries(e),s=[];return _.forEach(n=>{s.push(o(n))}),s.sort((n,t)=>t.today_work_flg!==n.today_work_flg?t.today_work_flg?1:-1:t.earn_point!==n.earn_point?t.earn_point-n.earn_point:t.diary_flg!==n.diary_flg?t.diary_flg?1:-1:t.review_flg!==n.review_flg?t.review_flg?1:-1:t.w_shukkin.filter(r=>r!==null).length-n.w_shukkin.filter(r=>r!==null).length),s}catch{return[]}},y=async(i,o)=>{(async()=>await a.post(i,{result:o}))()};export{y as c,p as f};
