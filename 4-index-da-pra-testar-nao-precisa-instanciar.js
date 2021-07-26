class Modulinho {
  f1 () {
    console.log('f1')
    this.f2()
    return 'f1'
  }
  f2 () {
    console.log('f2')
    this.f3()
    return 'f2'
  }
  f3 () {
    console.log('f3')
    return 'f3'
  }
}

module.exports = new Modulinho()
