import { GET, OPTIONS } from '@/app/api/portfolio/getPortfolios/route'
import { NextResponse } from 'next/server'

// filepath: /workspaces/portfolio.dev/app/api/portfolio/getPortfolios/route.test.ts

jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn()
  }
}))

describe('GET', () => {
  const headers = new Headers()
  headers.set('Access-Controll-Allow-Origin', '*')
  headers.set('Access-Controll-Allow-Methods', 'GET, POST, PUT, DELETE')
  headers.set('Access-Controll-Allow-Headers', 'Content-Type')

  it('should return 400 if user parameter is missing', async () => {
    const request = new Request(
      `${process.env.NEXT_PUBLIC_API_URL}/api/portfolio/getPortfolios`
    )
    await GET(request)
    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: 'Invalid user parameter' },
      { status: 400, headers }
    )
  })

  it('should return 200 if user exists', async () => {
    const request = new Request(
      `${process.env.NEXT_PUBLIC_API_URL}/api/portfolio/getPortfolios?user=Joao%20Vitor%20Ferreira`
    )
    await GET(request)
    expect(NextResponse.json).toHaveBeenCalledWith(expect.any(Object), {
      status: 200,
      headers
    })
  })

  it('should return 404 if user does not exist', async () => {
    const request = new Request(
      `${process.env.NEXT_PUBLIC_API_URL}/api/portfolio/getPortfolios?user=NonExistentUser`
    )
    await GET(request)
    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: 'User not found' },
      { status: 404, headers }
    )
  })
})

describe('OPTIONS', () => {
  it('should return 204 with correct headers', async () => {
    const response = await OPTIONS()
    expect(response.status).toBe(204)
    expect(response.headers.get('Access-Control-Allow-Origin')).toBe('*')
    expect(response.headers.get('Access-Control-Allow-Methods')).toBe(
      'GET, POST, PUT, DELETE'
    )
    expect(response.headers.get('Access-Control-Allow-Headers')).toBe(
      'Content-Type'
    )
  })
})
