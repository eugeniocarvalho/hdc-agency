$(function() {
  const containerA = document.getElementById('circleA')
  const containerB = document.getElementById('circleB')
  const containerC = document.getElementById('circleC')
  const containerD = document.getElementById('circleD')

  const circleA = new ProgressBar.Circle(containerA, {
    color: '#64daf9',
    strokeWidth: 8,
    duration: 1400,
    from: {color: '#AAA'},
    to: {color: '#65daf9'},

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color)

      const value = Math.round(circle.value() * 160);

      circle.setText(value)
    }
  })
  
  const circleB = new ProgressBar.Circle(containerB, {
    color: '#64daf9',
    strokeWidth: 8,
    duration: 1800,
    from: {color: '#aaa'},
    to: {color: '#65daf9'},

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color)

      const value = Math.round(circle.value() * 7093)

      circle.setText(value)
    }
  })

  const circleC = new ProgressBar.Circle(containerC, {
    color: '#64daf9',
    strokeWidth: 8,
    duration: 2200,
    from: {color: '#aaa'},
    to: {color: '#65daf9'},

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color)

      const value = Math.round(circle.value() * 430)

      circle.setText(value)
    }
  })

  const circleD = new ProgressBar.Circle(containerD, {
    color: '#64daf9',
    strokeWidth: 8,
    duration: 2600,
    from: {color: '#aaa'},
    to: {color: '#65daf9'},

    step: function(state, circle){
      circle.path.setAttribute('stroke', state.color)

      const value = Math.round(circle.value() * 10320)

      circle.setText(value)
    }
  })

  //iniciando a animação somente quando o usuario chegar
  const dataAreaOffset = $('#data-area').offset()
  let stop = 0

  $(window).scroll(function(e) {
    const scroll = $(window).scrollTop()

    if (scroll > (dataAreaOffset.top - 500) && stop === 0) {
      circleA.animate(1.0)
      circleB.animate(1.0)
      circleC.animate(1.0)
      circleD.animate(1.0)
      stop = 1
    }
  })

  // Parallax
  setTimeout(function(){
    $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'})
    $('#apply-area').parallax({imageSrc: 'img/pattern.png'})
  }, 250)
})