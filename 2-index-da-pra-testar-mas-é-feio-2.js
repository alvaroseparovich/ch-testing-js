
function f1 () {
  console.log('f1')
  module.exports.f2()
  return 'f1'
}
function f2 () {
  console.log('f2')
  module.exports.f3()
  return 'f2'
}
function f3 () {
  console.log('f3')
  return 'f3'
}

module.exports = {f1,f2,f3}