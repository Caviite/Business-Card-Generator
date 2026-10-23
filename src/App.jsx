import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Landing.jsx'
import ContactForm from './form.jsx'
import Templates from './Templates.jsx'
import Card from './Card.jsx'

function App() {
  const [cardData, setCardData] = useState({
    fullName: '',
    title: '',
    company: '',
    website: '',
    address: '',
    number: '',
    email: '',
    color: '',
    logo: null,
    twitter: '',
    instagram: '',
    tiktok: '',
  })

  const [selectedTemplate, setSelectedTemplate] = useState(null)

  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/templates" element={<Templates data={cardData} onSelectTemplate={setSelectedTemplate} />} />
        <Route path="/form" element={<ContactForm onSave={setCardData} template={selectedTemplate} />} />
        <Route path="/Card" element={<Card data={cardData} template={selectedTemplate} />} />
      </Routes>
    </main>
  )
}

export default App