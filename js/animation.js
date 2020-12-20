const PROFILE_PIC = '#Profile_Pic';
const PROFILE_NAME = '#name';
const PROFILE_CONTENT = '#about_text'

let t1 = gsap.timeline();

t1.to(PROFILE_PIC, { x:300, duration: 1, ease: 'power3.inOut'});
t1.to(PROFILE_NAME, {x: 300, duration: 1, ease:'power3.inOut', delay: -1});
t1.to(PROFILE_CONTENT, {x:-50, duration: 1, ease:'power3.inOut', delay: -1});
