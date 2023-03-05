

let courses=document.querySelectorAll();

courses.forEach((el) {
    const minperslide=4
    let next= el.nextElementSibling
    for(var i=1;i<minPerSlide;i++)
    {
        if(!next){
            next=courses[0]

        }
        let clonechild=next.CloneNode(true)
        el.appendchild(clonechild.children[0])
        next=next.nextElementSibling
    }
})