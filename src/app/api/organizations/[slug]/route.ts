import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const organization = await db.organization.findUnique({
      where: { slug: params.slug },
      include: {
        category: true
      }
    })

    if (!organization) {
      return NextResponse.json(
        { success: false, error: 'Organization not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, data: organization })
  } catch (error) {
    console.error('Error fetching organization:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch organization' },
      { status: 500 }
    )
  }
}
