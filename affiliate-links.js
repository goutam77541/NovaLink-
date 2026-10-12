/*
NOVALINK AFFILIATE CONFIGURATION
Only paste affiliate URLs issued to you by programs that have approved your account.
Empty values are intentional; this starter kit contains no invented affiliate URLs.
*/
const AFFILIATE_LINKS = {
  canva: "",
  adobe: "",
  figma: "",
  capcut: "",
  premiere: "",
  davinci: "",
  wordpress: "",
  webflow: "",
  hosting: "",
  notion: "",
  ai: "",
  marketing: ""
};
document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll(".affiliate-link").forEach(link=>{
    const url=AFFILIATE_LINKS[link.dataset.link];
    if(url && /^https?:\/\//i.test(url)){
      link.href=url;link.target="_blank";link.rel="sponsored noopener noreferrer";
    }else{
      link.href="about.html#affiliate-links";
      link.addEventListener("click",event=>{
        event.preventDefault();
        alert("This link is not configured yet. Add your approved affiliate URL in affiliate-links.js.");
        window.location.href="about.html#affiliate-links";
      });
    }
  });
});
