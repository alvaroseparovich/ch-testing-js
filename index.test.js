const moduleo = require('./index-1')

// const moduleo = new Modulinho()
describe('1', ()=>{
  it('11', () => {
    expect.assertions(1)
    jest.spyOn(moduleo, 'f2').mockReturnValue(1)
    // console.log('jest ->', handler)

    const r = moduleo.f1()
    // expect(handler.f2).toHaveBeenCalled()
    expect(r).toBe('f1')
  })
})