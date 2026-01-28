'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast({
          title: 'Message Sent!',
          description: 'Thank you for contacting us. We will get back to you soon.',
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to send your message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-24 md:py-28 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 space-y-6">
            <div className="text-6xl md:text-7xl mb-6">📬</div>
            <h2 className="text-4xl md:text-5xl font-normal text-foreground">
              Get in Touch
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Have questions or want to partner with us? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <Card className="bg-card border-border/30 hover:border-primary/40 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-foreground mb-2">Email</h3>
                <p className="text-base md:text-lg text-foreground/70">info@7ideasstrust.com</p>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="bg-card border-border/30 hover:border-primary/40 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-foreground mb-2">Phone</h3>
                <p className="text-base md:text-lg text-foreground/70">7997178888</p>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-card border-border/30 hover:border-primary/40 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-foreground mb-2">Location</h3>
                <p className="text-base md:text-lg text-foreground/70">India</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card className="bg-card border-border/30 rounded-2xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl md:text-3xl font-normal text-foreground">
                  {isSubmitted ? 'Thank You!' : 'Send us a Message'}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 md:px-8 pb-6">
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-2xl font-medium text-foreground mb-2">
                      Message Successfully Sent!
                    </h3>
                    <p className="text-lg text-foreground/70">
                      We appreciate your interest and will get back to you as soon as possible.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({ name: '', email: '', subject: '', message: '' })
                      }}
                      variant="outline"
                      className="mt-6 rounded-full"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-base font-normal text-foreground">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="border-border/30 bg-background focus:border-primary/50 h-12 text-base"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-base font-normal text-foreground">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="border-border/30 bg-background focus:border-primary/50 h-12 text-base"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="subject" className="text-base font-normal text-foreground">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="How can we help you?"
                        className="border-border/30 bg-background focus:border-primary/50 h-12 text-base"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-base font-normal text-foreground">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more..."
                        rows={6}
                        className="border-border/30 bg-background focus:border-primary/50 resize-none text-base"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/95 hover:to-primary/85 rounded-full px-10 py-5 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Heart className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
