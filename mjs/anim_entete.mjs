export class anim_entete {
constructor(elmEntete) {
  this.elmEntete = elmEntete
}

anim(){
    console.log('///////// animation //////////')
    //console.log(this.elmEntete.tagName)
    let elmTitre = this.elmEntete.children[0]
    console.log(elmTitre.tagName)
    elmTitre.classList.add('animEntete')
}

}