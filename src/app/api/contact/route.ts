import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { z } from 'zod'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  mobileNumber: z.string().min(10, 'Mobile number must be at least 10 digits'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  organization: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = contactSchema.parse(body)

    // Create contact submission
    const submission = await db.contactSubmission.create({
      data: validatedData
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
      data: submission
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors[0].message },
        { status: 400 }
      )
    }

    console.error('Error creating contact submission:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit message' },
      { status: 500 }
    )
  }
}
