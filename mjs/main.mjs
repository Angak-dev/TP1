import {anim_entete} from "./anim_entete.mjs";
import { Slider } from "./Slider.mjs";
import { config_slider } from "./config_slider.mjs";
let elmEntete = document.querySelector("header .global");
const animEntete = new anim_entete(elmEntete);
animEntete.anim();
const elmSlider = document.querySelector('.mon-slider')
console.log(elmSlider.tagName)
let mon_slider = new Slider(elmSlider, config_slider)
mon_slider.creerSlider()
