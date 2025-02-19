test('Test if Database Working', async () => {
  const response = await fetch('http://localhost:3000/api/v1/status/database')
  console.log(response)
  expect(response.status).toBe(200)
})
