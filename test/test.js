const app = require('../server')
const supertest = require('supertest')
const request = supertest(app)

describe('Rendering content given that an invalid path is used', () => {
  it('Should respond with a 404', async done => {
    const response = await request.get('/this-is-an-invalid-path/')
  
    expect(response.status).toBe(404)
    done()
  })
})

describe('Rendering content given that a valid path is used', () => {
  const filepath = '/test-content/';
  
  it('Should respond with a 200', async done => {
    const response = await request.get(filepath)

    expect(response.status).toBe(200)
    done()
  })

  it('Should respond with html from the markdown file', async done => {
    const response = await request.get(filepath)

    const title = 'Test markdown file'
    const body = 'Test time'

    const responseText = JSON.stringify(response.text)
    const contentIsPresent = responseText.includes(title) && responseText.includes(body)

    expect(contentIsPresent).toBe(true)
    done()
  })
})
