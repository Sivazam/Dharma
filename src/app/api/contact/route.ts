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

    console.log('Received contact form data:', body)

    // Validate input
    const validatedData = contactSchema.parse(body)
    console.log('Validation successful:', validatedData)

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

    console.log('Attempting to save to Firestore...')

    // Save to Firestore 'formdata' collection
    const docRef = await addDoc(collection(db, 'formdata'), formData)

    console.log('Document saved successfully with ID:', docRef.id)

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
      data: {
        id: docRef.id,
        ...formData
      }
    })
  } catch (error) {
    console.error('Error in contact submission:', error)
    console.error('Error details:', JSON.stringify(error, null, 2))

    // Handle Zod validation errors
    if (error && typeof error === 'object' && 'issues' in error && Array.isArray(error.issues)) {
      console.log('Zod validation error:', error.issues)
      return NextResponse.json(
        { success: false, error: error.issues[0]?.message || 'Validation error' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Failed to submit message. Please try again.' },
      { status: 500 }
    )
  }
}
