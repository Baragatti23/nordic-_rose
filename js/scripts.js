function show_hide_nav(){
   let nav=document.querySelector('nav');
   if(!nav.classList.contains("visible")){
      nav.classList.add("visible");
      document.body.classList.add("hidden");
   }else{
      nav.classList.remove("visible");
      document.body.classList.remove("hidden");
   }
}