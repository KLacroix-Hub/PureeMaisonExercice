const timelineNumber = gsap.timeline({
  defaults: { duration: 5 },
  onUpdate: updatePercentage,
  onComplete: hideLoading,
})

function updatePercentage() {
  newPercent = (this.progress() * 100).toFixed()
  document.querySelector('.loading').textContent = newPercent
}
function hideLoading() {
  const loading = document.querySelector('.loading')
  loading.split = new SplitText(loading, {
    type: 'chars'
  })
  gsap.to(
    loading.split.chars,
    {
      duration: 0.8,
      ease: Power2.easeIn,
      y: 100,
      stagger: {
        each: 0.3,
        from: 'end',
      },
    }
  )
  gsap.to('.loading', {
    duration: 1,
    ease: Power2.easeIn,
    x: -200,
  })
}

timelineNumber.to('.loading', {
  x: '0vw',
  ease: Power3.easeInOut,
  duration: 3
})
const timeline = gsap.timeline({
  defaults: { duration: 3, delay: 0.5 },
})
timeline.to(
  '.background',
  {
    backgroundSize: '100vw auto',
    ease: Power1.easeOut,
    filter: 'opacity(100%)',
    duration: 2.5,
  }
)

timeline.to(
  '.background',
  {
    backgroundSize: '120vw auto',
    ease: Power1.easeOut,
    filter: 'opacity(100%)',
    clipPath: 'polygon(0vw 0vh, 100vw 0vh, 100vw 100vh, 0vw 100vh)',
    duration: 1,
  },
  2.5
)
