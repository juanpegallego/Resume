gsap.registerPlugin(ScrollTrigger);

const sections = ['.container-about', '.container-tech', '.container-projects', '.container-contact']

sections.forEach(item => {

    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top bottom-=200'
        },
        duration: 1,
        opacity: 1,
        delay: 0,
        ease: Power4.easeOut,
        x: 0
    })
})


