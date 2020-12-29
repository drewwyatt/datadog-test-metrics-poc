import main from './main'

describe('main', () => {
  it('does not return anything', () => {
    expect(main()).toBeUndefined()
  })

  it('has another test', () => {
    expect(true).toEqual(true)
  })

  it('has a third test that should always pass', () => {
    expect(null).toBeFalsy()
  })

  it('has a test that fails sometimes', () => {
    expect(Math.floor(Math.random() * 10) % 2).toEqual(0)
  })
})
