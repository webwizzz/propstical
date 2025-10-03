import React, { useState } from 'react'
import { CloseButton, Form, FormGroup, Input, Label, ModalContainer, ModalContent, ModalHeader, SubmitButton, SuccessMessage } from './style'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  phone: string
  purpose: string
}

function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    purpose: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const dataToSend = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        purpose: formData.purpose,
        timestamp: new Date().toISOString()
      }

      console.log('Sending data to SheetDB:', dataToSend)

      const response = await fetch('https://sheetdb.io/api/v1/5b2f0kf9rmv35', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      })

      const responseData = await response.json()
      console.log('SheetDB response:', responseData)

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: '', email: '', phone: '', purpose: '' })
        setTimeout(() => {
          setIsSuccess(false)
          onClose()
        }, 3000)
      } else {
        console.error('SheetDB error:', responseData)
        throw new Error(responseData.message || 'Failed to submit')
      }
    } catch (err) {
      console.error('Error submitting to SheetDB:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <ModalContainer onClick={handleBackdropClick}>
      <ModalContent>
        <ModalHeader>
          <h2>We&apos;re Still Under Development</h2>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        
        {isSuccess ? (
          <SuccessMessage>
            <h3>Thank you for joining our waitlist!</h3>
            <p>We&apos;ll reach out to you soon with updates.</p>
          </SuccessMessage>
        ) : (
          <>
            <p>Join the waitlist and we&apos;ll reach out to you soon!</p>
            
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="purpose">Purpose *</Label>
                <Input
                  as="select"
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select your purpose</option>
                  <option value="New Home Construction">New Home Construction</option>
                  <option value="Home Renovation">Home Renovation</option>
                  <option value="Architecture Consultation">Architecture Consultation</option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="Other">Other</option>
                </Input>
              </FormGroup>

              {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

              <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Join Waitlist'}
              </SubmitButton>
            </Form>
          </>
        )}
      </ModalContent>
    </ModalContainer>
  )
}

export default WaitlistModal