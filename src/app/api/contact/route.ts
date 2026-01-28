import { NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = contactSchema.parse(body)

    // Create a unique document ID using timestamp + random string
    const uniqueId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Prepare document data
    const formData = {
      uid: uniqueId, // Using the unique document ID as a form of UID
      name: validatedData.name,
      email: validatedData.email,
      subject: validatedData.subject,
      message: validatedData.message,
      timestamp: serverTimestamp(),
      createdAt: new Date().toISOString(),
    }

    // Save to Firestore 'formdata' collection
    const docRef = await addDoc(collection(db, 'formdata'), formData)

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
      data: {
        id: docRef.id,
        ...formData
      }
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
