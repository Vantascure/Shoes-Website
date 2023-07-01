  /*--- Each Item Description ---*/
  document.querySelector("#updateCart").addEventListener('click',function()
  {
    let valueOne = parseInt(localStorage.getItem("prod_value"))
    let valueTwo = parseInt(localStorage.getItem("prod_qty"))
    let total = valueOne * valueTwo
    document.querySelector('#prod_value').innerText = total

    
    document.querySelector('#prod_qty').innerText = localStorage.getItem("prod_qty")
    document.querySelector('#prod_size').innerText = localStorage.getItem("prod_size")
  })
  
  document.querySelector("#updateCart").addEventListener('click',function()
  {
    let valueOne = parseInt(localStorage.getItem("prod2_value"))
    let valueTwo = parseInt(localStorage.getItem("prod2_qty"))
    let total = valueOne * valueTwo
    
    document.querySelector('#prod2_value').innerText = total
    document.querySelector('#prod2_qty').innerText = localStorage.getItem("prod2_qty")
    document.querySelector('#prod2_size').innerText = localStorage.getItem("prod2_size")
  })
  
  document.querySelector("#updateCart").addEventListener('click',function()
  {
    let valueOne = parseInt(localStorage.getItem("prod3_value"))
    let valueTwo = parseInt(localStorage.getItem("prod3_qty"))
    let total = valueOne * valueTwo
    
    document.querySelector('#prod3_value').innerText = total
    document.querySelector('#prod3_qty').innerText = localStorage.getItem("prod3_qty")
    document.querySelector('#prod3_size').innerText = localStorage.getItem("prod3_size")
  })
 
  document.querySelector("#updateCart").addEventListener('click',function()
  {
    let valueOne = parseInt(localStorage.getItem("prod4_value"))
    let valueTwo = parseInt(localStorage.getItem("prod4_qty"))
    let total = valueOne * valueTwo
    
    document.querySelector('#prod4_value').innerText = total
    document.querySelector('#prod4_qty').innerText = localStorage.getItem("prod4_qty")
    document.querySelector('#prod4_size').innerText = localStorage.getItem("prod4_size")
  })

  document.querySelector("#updateCart").addEventListener('click',function()
  {
    let valueOne = parseInt(localStorage.getItem("prod5_value"))
    let valueTwo = parseInt(localStorage.getItem("prod5_qty"))
    let total = valueOne * valueTwo
    
    document.querySelector('#prod5_value').innerText = total
    document.querySelector('#prod5_qty').innerText = localStorage.getItem("prod5_qty")
    document.querySelector('#prod5_size').innerText = localStorage.getItem("prod5_size")
  })

  document.querySelector("#updateCart").addEventListener('click',function()
  {
    let valueOne = parseInt(localStorage.getItem("prod6_value"))
    let valueTwo = parseInt(localStorage.getItem("prod6_qty"))
    let total = valueOne * valueTwo
    
    document.querySelector('#prod6_value').innerText = total
    document.querySelector('#prod6_qty').innerText = localStorage.getItem("prod6_qty")
    document.querySelector('#prod6_size').innerText = localStorage.getItem("prod6_size")
  })

  document.querySelector("#updateCart").addEventListener('click',function()
  {
    let valueOne = parseInt(localStorage.getItem("prod7_value"))
    let valueTwo = parseInt(localStorage.getItem("prod7_qty"))
    let total = valueOne * valueTwo
    
    document.querySelector('#prod7_value').innerText = total
    document.querySelector('#prod7_qty').innerText = localStorage.getItem("prod7_qty")
    document.querySelector('#prod7_size').innerText = localStorage.getItem("prod7_size")
  })

  document.querySelector("#updateCart").addEventListener('click',function()
  {
    let valueOne = parseInt(localStorage.getItem("prod8_value"))
    let valueTwo = parseInt(localStorage.getItem("prod8_qty"))
    let total = valueOne * valueTwo
    
    document.querySelector('#prod8_value').innerText = total
    document.querySelector('#prod8_qty').innerText = localStorage.getItem("prod8_qty")
    document.querySelector('#prod8_size').innerText = localStorage.getItem("prod8_size")
  })
  
  /*--- Reset the localstorage ---*/
  document.querySelector("#clearCart").addEventListener('click',function(){
    window.localStorage.clear()

    window.localStorage.setItem('prod_name', 'NIKE MERCURIAL VAPOR 14 ACADEMY FG/MG');
window.localStorage.setItem('prod_value', '329.00')
window.localStorage.setItem('prod_qty', '0')
window.localStorage.setItem('prod_size', '0')

window.localStorage.setItem('prod2_name', 'NIKE MERCURIAL VAPOR 14 ACADEMY FG/MG');
window.localStorage.setItem('prod2_value', '329.00')
window.localStorage.setItem('prod2_qty', '0')
window.localStorage.setItem('prod2_size', '0')

window.localStorage.setItem('prod3_name', 'NIKE MERCURIAL VAPOR 14 ACADEMY FG/MG');
window.localStorage.setItem('prod3_value', '329.00')
window.localStorage.setItem('prod3_qty', '0')
window.localStorage.setItem('prod3_size', '0')

window.localStorage.setItem('prod4_name', 'NIKE MERCURIAL VAPOR 14 ACADEMY FG/MG');
window.localStorage.setItem('prod4_value', '329.00')
window.localStorage.setItem('prod4_qty', '0')
window.localStorage.setItem('prod4_size', '0')

window.localStorage.setItem('prod5_name', 'NIKE MERCURIAL VAPOR 14 ACADEMY FG/MG');
window.localStorage.setItem('prod5_value', '329.00')
window.localStorage.setItem('prod5_qty', '0')
window.localStorage.setItem('prod5_size', '0')

window.localStorage.setItem('prod6_name', 'NIKE MERCURIAL VAPOR 14 ACADEMY FG/MG');
window.localStorage.setItem('prod6_value', '329.00')
window.localStorage.setItem('prod6_qty', '0')
window.localStorage.setItem('prod6_size', '0')

window.localStorage.setItem('prod7_name', 'NIKE MERCURIAL VAPOR 14 ACADEMY FG/MG');
window.localStorage.setItem('prod7_value', '329.00')
window.localStorage.setItem('prod7_qty', '0')
window.localStorage.setItem('prod7_size', '0')

window.localStorage.setItem('prod8_name', 'NIKE MERCURIAL VAPOR 14 ACADEMY FG/MG');
window.localStorage.setItem('prod8_value', '329.00')
window.localStorage.setItem('prod8_qty', '0')
window.localStorage.setItem('prod8_size', '0')
  })
