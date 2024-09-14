let btn = document.getElementById("btn");




let nav = document.querySelector('nav')



window.addEventListener('scroll',function(){
  if(scrollY >50){
    btn.style.display="block";
  }else{
    btn.style.display="none";
  }
  window.addEventListener('scroll',function(){
    if(scrollY >=80){
      nav.style.background="#000"
  }else{
       nav.style.background="transparent"
  }
  });
  btn.addEventListener('click',function(){
    scrollTo({
      top:0,
      right:0,
      behavior:"smooth"
    })
  })
})

// 