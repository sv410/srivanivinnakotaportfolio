'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold flex items-center gap-3"
      >
        Contact
        <div className="h-1 w-12 bg-purple-400"></div>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-zinc-900/60 p-4 rounded-lg flex items-center gap-3"
      >
        <MapPin className="w-5 h-5 text-purple-400" />
        <span className="text-purple-200">Hyderabad, Telangana, India</span>
      </motion.div>

      <div className="h-[300px] rounded-xl overflow-hidden mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.34203540524!2d78.24323045!3d17.412253249999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1704571006604!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-purple-300">Send Message</h2>
        <div className="grid grid-cols-1 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              required
              className="w-full px-4 py-3 bg-zinc-900/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 text-purple-200 placeholder-purple-200/50"
            />
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
              className="w-full px-4 py-3 bg-zinc-900/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 text-purple-200 placeholder-purple-200/50"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={6}
              className="w-full px-4 py-3 bg-zinc-900/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 text-purple-200 placeholder-purple-200/50 resize-none"
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 transition-all duration-300 disabled:opacity-50"
          >
            {status === 'loading' ? (
              'Sending...'
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </motion.button>
        </div>
      </motion.form>

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-purple-400 text-center"
        >
          Message sent successfully!
        </motion.p>
      )}
      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-400 text-center"
        >
          Failed to send message. Please try again.
        </motion.p>
      )}

      {/* Add GitHub and LeetCode links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-8"
      >
        <a
          href="https://github.com/sv410"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline block"
        >
          GitHub
        </a>
        <a
          href="https://leetcode.com/u/srivani401/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline block mt-2"
        >
          LeetCode
        </a>
      </motion.div>
    </div>
  )
}