import { NextResponse } from 'next/server'
import { information, getVersion, getAllInformations } from '@/infra/database'

export async function GET() {
  const dbVersion = await getVersion()
  const dbInformation = await information()
  const allDbInformation = await getAllInformations()
  return NextResponse.json({
    status: 'success',
    message: 'Welcome to the API',
    dbVersion: dbVersion,
    dbInformation: dbInformation,
    allDbInformation: allDbInformation
  })
}
