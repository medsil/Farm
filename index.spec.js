// index.spec.js
const {Farm} = require('./index')

test('A new Farm can be created', () => {
  const farm = new Farm()
  expect(farm).toBeTruthy()
})

test('A Farm can have a name', () => {
  const farm = new Farm('TEST_NAME')
  expect(farm.name).toBe('TEST_NAME')
})

//******
test('We can add a crop to our farm', () => {
  const farm = new Farm('TEST_NAME')
  farm.addCrop(new Wheat(100))
})