
function f1 () {
  console.log('f1')
  f2()
  return 'f1'
}

function f2 () {
  console.log('f2')
  f3()
  return 'f2'
}

function f3 () {
  console.log('f3')
  return 'f3'
}


module.exports = {
  f1,f2,f3
} 