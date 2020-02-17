export class Slider {
    constructor(elmMonSlider, config_slider){
        this.elmMonSlider = elmMonSlider;
        this.list_slide = config_slider.list_slide;
        console.log('slider')

    }

    creerSlider() {

        console.log(this.elmMonSlider.tagName)
        console.log(this.list_slide)
        let elmSlider = document.createElement('div')
        elmSlider.classList.add('slider')
        let elmSlides = document.createElement('div')
        elmSlides.classList.add('slides')
        let k=1
        for (let unSlide of this.list_slide){
            let elmSlide = document.createElement('div')
            elmSlide.id = 'slides-' + k
            k++
            elmSlides.appendChild(elmSlide)

            let elmSlideh2 = document.createElement('h2');
            let elmSlidep = document.createElement('p');
            let elmSlideImg = document.createElement('img');

            elmSlideh2.innerHTML = unSlide.titre;
            elmSlidep.innerHTML = unSlide.sousTitre;
            elmSlideImg.src = unSlide.img;

            elmSlideh2.style.zIndex = "1";
            elmSlideh2.style.color = "white";
            elmSlidep.style.zIndex = "1";
            elmSlidep.style.color = "white";
            
            elmSlide.appendChild(elmSlideh2);
            elmSlide.appendChild(elmSlidep);
            elmSlide.appendChild(elmSlideImg);
        }
        elmSlider.appendChild(elmSlides)
        this.elmMonSlider.appendChild(elmSlider)

        

    }


}