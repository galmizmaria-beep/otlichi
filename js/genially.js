/* Genially export helpers. Operates on a snapshot and never mutates the editor. */
(function(root){
'use strict';
async function compressPicture(source){
 if(!/^data:image\/(png|jpeg|webp);base64,/.test(source))return source;
 const image=new Image();image.src=source;await image.decode();
 const ratio=Math.min(1,1000/Math.max(image.naturalWidth,image.naturalHeight));
 const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(image.naturalWidth*ratio));canvas.height=Math.max(1,Math.round(image.naturalHeight*ratio));
 canvas.getContext('2d').drawImage(image,0,0,canvas.width,canvas.height);
 const result=canvas.toDataURL('image/webp',.76);return result.length<source.length?result:source;
}
async function optimize(project){
 const copy=structuredClone(project);
 const refs=[];for(const key of ['a','b'])if(copy.images[key])refs.push([copy.images[key],'source']);
 refs.push([copy.titleScreen,'image'],[copy.titleScreen,'logo'],[copy.taskStyle,'image'],[copy.hud,'lifeAsset'],[copy.finalScreens.win,'image'],[copy.finalScreens.lose,'image']);
 copy.assets=copy.assets.filter(a=>a.visible&&(copy.titleScreen.enabled||a.screen!=='title'));
 for(const a of copy.assets)refs.push([a,'source']);
 const cache=new Map();for(const [obj,key] of refs){const source=obj[key];if(!source)continue;if(!cache.has(source))cache.set(source,await compressPicture(source));obj[key]=cache.get(source)}
 return copy;
}
function iframe(html,title){const E=root.DiffCore.safe;return `<iframe title="${E(title)}" style="width:100%;aspect-ratio:16/9;border:0" sandbox="allow-scripts" srcdoc="${E(html)}"></iframe>`}
async function pack(html,title){
 const raw=iframe(html,title);if(typeof CompressionStream==='undefined')return {code:raw,packed:false};
 const stream=new Blob([html]).stream().pipeThrough(new CompressionStream('gzip'));
 const bytes=new Uint8Array(await new Response(stream).arrayBuffer());let binary='';for(let i=0;i<bytes.length;i+=8192)binary+=String.fromCharCode(...bytes.subarray(i,i+8192));
 const data=btoa(binary);
 const loader=`<!doctype html><meta charset="utf-8"><script>(async()=>{try{const b=Uint8Array.from(atob('${data}'),c=>c.charCodeAt(0));const s=new Blob([b]).stream().pipeThrough(new DecompressionStream('gzip'));const h=await new Response(s).text();document.open();document.write(h);document.close()}catch(e){(document.body||document.documentElement).textContent='Для этой версии игры нужен современный браузер.'}})()<\/script>`;
 const packed=iframe(loader,title);return packed.length<raw.length?{code:packed,packed:true}:{code:raw,packed:false};
}
root.DiffGenially={optimize,pack,iframe};
})(typeof window==='undefined'?globalThis:window);
