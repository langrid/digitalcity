gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.js-parallax').forEach(wrap => {
  const y = wrap.getAttribute('data-y') || -100;

  gsap.to(wrap, {
    y: y,
    scrollTrigger: {
      trigger: wrap,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.5
      //markers: true
    }
  });

});

const fades = gsap.utils.toArray('.fadeup');

fades.forEach((fade, i) => {
  const anim = gsap.fromTo(fade, { autoAlpha: 0, y: 50 }, { duration: 1, autoAlpha: 1, y: 0 });
  ScrollTrigger.create({
    trigger: fade,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
    start: 'top center+=10%',
    //markers: true,
  });
});


window.onload = function(){
  const load = document.getElementById('loading');
  load.classList.add('loaded');
}