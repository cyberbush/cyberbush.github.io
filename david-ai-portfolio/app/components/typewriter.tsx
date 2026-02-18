'use client'

import { useState, useEffect } from 'react'

const roles = ['AI/ML Engineer', 'GenAI Developer', 'Software Engineer']

export function Typewriter() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === currentRole) {
      // Pause at full word
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      // Move to next role
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else if (isDeleting) {
      // Delete one character
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1))
      }, 50)
    } else {
      // Type one character
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1))
      }, 100)
    }

    return () => clearTimeout(timeout)
  }, [displayText, roleIndex, isDeleting])

  return (
    <span className="text-[#60a5fa] font-mono">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  )
}
