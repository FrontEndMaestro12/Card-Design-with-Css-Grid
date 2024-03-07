let timeline = gsap.timeline();
timeline.from("#headertop h2 ,#headertop p",{
    duration:1,
    opacity:0,
    y:-80,
    stagger:0.6
    
});

timeline.from("#main div ",{
    duration:1,
    opacity:0,
    y:-0.4,
    stagger:0.03
})
