'use client'
import { useState } from 'react'
import styles from './Chatbot.module.scss'

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return
    setMessages(prev => [...prev, { sender: 'user', text: input }])
    setLoading(true)

    const res = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: input })
    })

    const data = await res.json()
    setMessages(prev => [...prev, { sender: 'bot', text: data.response }])
    setInput('')
    setLoading(false)
  }

  return (
    <div className={styles.wrapper}>
      {open && (
        <div className={styles.chatbox}>
          <div className={styles.header}>Campus Bot</div>
          <div className={styles.messages}>
            {messages.map((msg, i) => (
              <div key={i} className={styles[msg.sender]}>
                {msg.text}
              </div>
            ))}
            {loading && <div className={styles.bot}>Typing...</div>}
          </div>
          <div className={styles.inputArea}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me anything..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
      <button className={styles.fab} onClick={() => setOpen(!open)}>
        💬
      </button>
    </div>
  )
}
