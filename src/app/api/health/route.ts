import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const users = await prisma.user.findMany()
  console.log(users[0].email)

  return NextResponse.json(users[0].email, { status: 200 })
}
