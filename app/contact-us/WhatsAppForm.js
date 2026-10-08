'use client'

import { useState } from 'react'

const WHATSAPP = '923331127830'

export default function WhatsAppForm() {
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = [
      'Online Nikah enquiry',
      '',
      `Name: ${form.get('name') || ''}`,
      `Country / city: ${form.get('country') || ''}`,
      `WhatsApp number: ${form.get('phone') || ''}`,
      `Preferred date: ${form.get('date') || 'Not fixed'}`,
      '',
      `Details: ${form.get('message') || ''}`
    ].join('\n')

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`
    setStatus('Your WhatsApp message has been prepared. Review it in WhatsApp and press Send; this website does not submit it automatically.')
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-grid">
      <label>Your Name<input required name="name" placeholder="Full name" autoComplete="name" /></label>
      <label>Country / City<input required name="country" placeholder="Where do you live?" autoComplete="country-name" /></label>
    </div>
    <div className="form-grid">
      <label>WhatsApp Number<input required name="phone" placeholder="Include country code" autoComplete="tel" /></label>
      <label>Preferred Date<input name="date" type="date" /></label>
    </div>
    <label>How Can We Help?<textarea required name="message" rows="6" placeholder="Tell us both parties’ locations, marital status and what you need the documents for." /></label>
    <button className="button" type="submit">Prepare WhatsApp Message <span aria-hidden="true">↗</span></button>
    <p className="form-note">Your details are not submitted by this form. It opens a WhatsApp draft for you to review and send. Do not send unnecessary identity documents before the team confirms what is required.</p>
    {status && <p className="form-status" role="status">{status}</p>}
  </form>
}
