var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true },
  
    loop: true });
    


    // 

// BANNER


const circular_slider = document.querySelector('.wrapper'),
character_name = document.querySelector('.character-name'),
 slides  = document.querySelectorAll('.slides'),
 descriptions_items = document.querySelectorAll('.descriptions_item'),
 images = document.querySelectorAll('.slides img');

 slides.forEach((slide, i)=>{
	slide.onclick = ()=>{
    circular_slider.style.transform = `rotateZ(-${360 / 5 * (i + 4)}deg)`;
    character_name.textContent = descriptions_items[i].querySelector('h1').textContent;
		

		images.forEach((img, i)=>{
			img.style.setProperty('--img-no', 2);
      img.classList.remove('active');
      descriptions_items[i].classList.remove('active');
		})
    descriptions_items[i].classList.add('active');
    slide.querySelector('img').classList.add('active');

	}
 })

