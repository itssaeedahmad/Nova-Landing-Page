const scroll=new LocomotiveScroll({el:document.querySelector('[data-scroll-container]'),smooth:true})


const t=["Great communication and amazing results.","Professional team and fast delivery.","Our website looks fantastic now."]
let i=0
setInterval(()=>{i=(i+1)%t.length;document.getElementById('testimonial').textContent=t[i]},4000)


const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){entry.target.classList.add('active')}
})
},{threshold:.2})


document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))


document.querySelectorAll('a[href^="#"]').forEach(link=>{
link.addEventListener('click',e=>{
const id=link.getAttribute('href')
if(id.length>1){e.preventDefault();scroll.scrollTo(document.querySelector(id))}
})
})