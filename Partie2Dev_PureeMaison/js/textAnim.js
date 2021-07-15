
const paragraphSecondPart = document.querySelector('#paragraphPart')
const mySplitparagraph = new SplitText(paragraphSecondPart, { type: 'words,lines,chars' });
const paragraphLine = mySplitparagraph.lines;


const h1TextPrev = document.querySelectorAll('#animH1Previous')
const mySplitTextH1 = new SplitText(h1TextPrev, { type: 'words,lines,chars' });
const h1PrevChars = mySplitTextH1.chars;

const h1TextNext = document.querySelectorAll('#animH1Next')
const mySplitTextH1Next = new SplitText(h1TextNext, { type: 'words,lines,chars' });
const h1NextChars = mySplitTextH1Next.chars;


TweenMax.staggerFrom(".textH3", 1, {
    delay: 0.5,
    y: 80,
    ease : "power1.inOut",
}, 0.1);

TweenMax.staggerFrom(h1PrevChars, 0.6, {
    delay: 0.5,
    y: 200,
    x: 20,
    opacity: 0,
    ease : "Circ.easIn",
}, 0.1);

TweenMax.staggerFrom(h1NextChars, 0.6, {
    delay: 1.5,
    y: -140,
    x: 70, 
    opacity: 0,
    ease : "Circ.easIn",
}, 0.2);

TweenMax.from("#underlineTitle", 1, {
    delay: 2,
    width: 0,
    x : -450,
    ease : "power4.inOut",
})

gsap.registerPlugin(ScrollTrigger);

gsap.from(".txtSecondPart1", {
    y: 40,
    opacity: 0,
    duration: 1,
    scrollTrigger: "#ImgPart",
})
gsap.from(".txtSecondPart2", {
    delay:0.1,
    y: 40,
    opacity: 0,
    duration: 1,
    scrollTrigger: "#ImgPart",
})
gsap.from(".txtSecondPart3", {
    delay:0.2,
    y: 40,
    opacity: 0,
    duration: 1,
    scrollTrigger: "#ImgPart",
})

gsap.from(paragraphLine, {
    delay: 0.2,
    y: 40,
    opacity: 0,
    duration: 1,
    scrollTrigger: "#ImgPart",
})

gsap.from("#btnListen",{
    duration: 1,
    opacity: 0,
    y:100,
    scrollTrigger: "#ImgPart",
})

gsap.from(".btnInner1", {
    y: 40,
    delay: 0.2,
    opacity:0,
    duration: 1,
    scrollTrigger: "#ImgPart",
})

gsap.from(".btnInner2", {
    y: 40,
    delay: 0.3,
    opacity:0,
    duration: 1,
    scrollTrigger: "#ImgPart",
})