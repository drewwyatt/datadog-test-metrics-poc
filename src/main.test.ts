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
})
