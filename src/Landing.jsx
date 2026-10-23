import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Template1 from './Template1.jsx'
import Template2 from './Template2.jsx'

function Landing() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(null)

  // Blue and white theme
  const colors = {
    primary: '#1E3A8A',       // deep navy blue
    secondary: '#2563EB',     // vivid blue
    accent: '#3B82F6',        // medium blue
    accentLight: '#93C5FD',   // light blue
    white: '#FFFFFF',
    offWhite: '#F0F6FF',      // very light blue-white
    lightBg: '#EFF6FF',       // light blue background
    darkBg: '#1E3A8A',        // navy for dark sections
    darkerBg: '#172554',      // deeper navy
    text: '#1E3A8A',          // navy text
    lightText: '#4B6FA8',     // muted blue
    subtleText: '#6B8FC5',    // lighter muted blue
    border: '#BFDBFE',        // light blue border
    gold: '#2563EB',          // replaces gold → vivid blue
    darkGold: '#93C5FD',      // replaces darkGold → light blue
    black: '#172554',         // replaces black → deepest navy
    darkGray: '#1E3A8A',      // replaces darkGray → navy
    lightGray: '#BFDBFE',     // replaces lightGray → light blue
  }

  const templates = [
    { name: 'Modern Split', component: Template1, color: 'blue' },
    { name: 'Modern Split', component: Template1, color: 'red' },
    { name: 'Curved Wave', component: Template2, color: 'blue' },
    { name: 'Curved Wave', component: Template2, color: 'green' },
    { name: 'Modern Split', component: Template1, color: 'purple' },
    { name: 'Curved Wave', component: Template2, color: 'orange' },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Marketing Director',
      text: 'This tool made creating professional business cards incredibly easy. Our team loves it!',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      title: 'Startup Founder',
      text: 'Best business card generator out there. Beautiful templates and super intuitive.',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      title: 'Creative Designer',
      text: 'Finally a tool that understands design. The customization options are endless.',
      rating: 5,
    },
  ]

  const faqItems = [
    {
      q: 'Is it really free?',
      a: 'Yes! You can create unlimited business cards for free. Premium features are available in our Pro plan.',
    },
    {
      q: 'Can I download my card?',
      a: 'Absolutely! Download your cards as PDF, PNG, or print-ready formats directly from the editor.',
    },
    {
      q: 'Do you have pre-made templates?',
      a: 'We offer 100+ professionally designed templates that you can customize to match your brand.',
    },
    {
      q: 'Can I use my own logo?',
      a: 'Yes! Upload your logo in PNG, JPG, or SVG format and it will integrate seamlessly.',
    },
    {
      q: 'What about team collaboration?',
      a: 'Our Team plan allows unlimited team members to collaborate and manage templates together.',
    },
    {
      q: 'How do I print my cards?',
      a: 'Download in print-ready format (CMYK) and send to any local printer, or use our printing partner network.',
    },
  ]

  return (
    <div style={{ backgroundColor: colors.white, color: colors.text, fontFamily: "'Playfair Display', 'Georgia', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Raleway:wght@400;500;600;700&display=swap');
        
        body, html { font-family: 'Raleway', sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Playfair Display', serif; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      {/* Navbar */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 40px',
          backgroundColor: colors.white,
          boxShadow: `0 2px 12px rgba(30, 58, 138, 0.1)`,
          position: 'sticky',
          top: 0,
          zIndex: 100,
          borderBottom: `2px solid ${colors.accent}`,
        }}
      >
        <div style={{ fontSize: '28px', fontWeight: 900, color: colors.primary, fontFamily: "'Playfair Display', serif" }}>
          CardPro
        </div>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="#templates" style={{ textDecoration: 'none', color: colors.primary, fontWeight: 500 }}>
            Templates
          </a>
          <a href="#features" style={{ textDecoration: 'none', color: colors.primary, fontWeight: 500 }}>
            Features
          </a>
          <a href="#pricing" style={{ textDecoration: 'none', color: colors.primary, fontWeight: 500 }}>
            Pricing
          </a>
        </div>
        <button
          onClick={() => navigate('/templates')}
          style={{
            padding: '10px 24px',
            backgroundColor: colors.secondary,
            color: colors.white,
            border: 'none',
            borderRadius: '4px',
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Start Free
        </button>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          padding: '80px 40px',
          textAlign: 'center',
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
          borderBottom: `2px solid ${colors.accentLight}`,
        }}
      >
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 900,
            color: colors.white,
            margin: '0 0 20px 0',
            letterSpacing: '-0.02em',
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Professional Business Cards
          <br />
          <span style={{ color: colors.accentLight, fontSize: '56px' }}>In Minutes</span>
        </h1>
        <p
          style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
          }}
        >
          Create stunning, professional business cards with our easy-to-use designer. Choose from 100+ templates or start from scratch.
        </p>
        <button
          onClick={() => navigate('/templates')}
          style={{
            padding: '14px 32px',
            backgroundColor: colors.white,
            color: colors.primary,
            border: 'none',
            borderRadius: '4px',
            fontWeight: 700,
            fontSize: '16px',
            cursor: 'pointer',
            marginRight: '16px',
          }}
        >
          Choose Your Template
        </button>
        <button
          style={{
            padding: '14px 32px',
            backgroundColor: 'transparent',
            color: colors.white,
            border: `2px solid rgba(255,255,255,0.6)`,
            borderRadius: '4px',
            fontWeight: 700,
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          View Demo
        </button>

        {/* Card mockup animation placeholder */}
        <div
          style={{
            marginTop: '60px',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: '120px',
                height: '70px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.4)',
                borderRadius: '4px',
                boxShadow: `0 10px 20px rgba(0,0,0,0.2)`,
                transform: `rotate(${(i - 2) * 8}deg) translateY(${(i - 2) * 10}px)`,
                animation: `float 3s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
          padding: '60px 40px',
          backgroundColor: colors.lightBg,
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '32px', fontWeight: 800, color: colors.secondary }}>80K+</div>
          <div style={{ fontSize: '14px', color: colors.lightText, marginTop: '8px' }}>Cards Created</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '32px', fontWeight: 800, color: colors.secondary }}>100+</div>
          <div style={{ fontSize: '14px', color: colors.lightText, marginTop: '8px' }}>Templates</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '32px', fontWeight: 800, color: colors.secondary }}>4.9★</div>
          <div style={{ fontSize: '14px', color: colors.lightText, marginTop: '8px' }}>Avg Rating</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '32px', fontWeight: 800, color: colors.secondary }}>Free</div>
          <div style={{ fontSize: '14px', color: colors.lightText, marginTop: '8px' }}>To Start</div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '80px 40px', backgroundColor: colors.white }}>
        <h2
          style={{
            fontSize: '48px',
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: '60px',
            color: colors.primary,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          How It Works
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {[
            { num: '1', title: 'Choose Template', desc: 'Pick from our 100+ professionally designed templates' },
            { num: '2', title: 'Customize', desc: 'Add your info, colors, and logo in seconds' },
            { num: '3', title: 'Download', desc: 'Get your card in PDF, PNG, or print format' },
          ].map((step) => (
            <div key={step.num} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '4px',
                  backgroundColor: colors.secondary,
                  color: colors.white,
                  fontSize: '28px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {step.num}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 12px 0', color: colors.primary, fontFamily: "'Playfair Display', serif" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '14px', color: colors.lightText, margin: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Template Gallery */}
      <section id="templates" style={{ padding: '80px 40px', backgroundColor: colors.lightBg }}>
        <h2
          style={{
            fontSize: '48px',
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: '60px',
            color: colors.primary,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Explore Templates
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {templates.map((template, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: colors.white,
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                border: `2px solid ${colors.border}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(37,99,235,0.15)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              onClick={() => navigate('/templates')}
            >
              <div style={{ height: '120px', backgroundColor: colors.lightBg, borderRadius: '8px', marginBottom: '12px' }}>
                [Card Preview]
              </div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600, color: colors.primary, fontFamily: "'Playfair Display', serif" }}>
                {template.name}
              </h4>
              <p style={{ margin: 0, fontSize: '12px', color: colors.lightText }}>
                Premium Design
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '80px 40px', backgroundColor: colors.white }}>
        <h2
          style={{
            fontSize: '48px',
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: '60px',
            color: colors.primary,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Powerful Features
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {[
            { icon: '🎨', title: 'Easy Customization', desc: 'Drag-and-drop editor with real-time preview' },
            { icon: '🖼️', title: 'Custom Logo', desc: 'Upload your logo and it integrates perfectly' },
            { icon: '📱', title: 'Mobile Friendly', desc: 'Design from any device, anytime' },
            { icon: '⬇️', title: 'Multiple Formats', desc: 'Download as PDF, PNG, or print-ready files' },
            { icon: '🎭', title: '100+ Templates', desc: 'Choose from professionally designed options' },
            { icon: '✨', title: 'Premium Support', desc: 'Get help from our design experts' },
          ].map((feature) => (
            <div key={feature.title} style={{ textAlign: 'center', padding: '32px 24px', borderRadius: '12px', backgroundColor: colors.lightBg, border: `1px solid ${colors.border}` }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px 0', color: colors.primary, fontFamily: "'Playfair Display', serif" }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '14px', color: colors.lightText, margin: 0 }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 40px', backgroundColor: colors.lightBg }}>
        <h2
          style={{
            fontSize: '48px',
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: '60px',
            color: colors.primary,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          What Our Users Say
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              style={{
                backgroundColor: colors.white,
                borderRadius: '12px',
                padding: '24px',
                border: `1px solid ${colors.border}`,
                boxShadow: '0 4px 16px rgba(30,58,138,0.07)',
              }}
            >
              <div style={{ marginBottom: '12px', color: colors.secondary }}>
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p style={{ fontSize: '14px', color: colors.lightText, margin: '0 0 16px 0', lineHeight: 1.6 }}>
                "{testimonial.text}"
              </p>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 700, color: colors.primary, fontFamily: "'Playfair Display', serif" }}>
                {testimonial.name}
              </h4>
              <p style={{ margin: 0, fontSize: '12px', color: colors.subtleText }}>
                {testimonial.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: '80px 40px', backgroundColor: colors.white }}>
        <h2
          style={{
            fontSize: '48px',
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: '60px',
            color: colors.primary,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Simple Pricing
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {[
            {
              name: 'Free',
              price: '0',
              desc: 'Perfect to get started',
              features: ['Unlimited cards', '20 templates', 'Basic customization'],
              popular: false,
            },
            {
              name: 'Pro',
              price: '9.99',
              desc: 'For professionals',
              features: ['Unlimited cards', '100+ templates', 'Advanced customization', 'Priority support'],
              popular: true,
            },
            {
              name: 'Team',
              price: '19.99',
              desc: 'For teams',
              features: ['Unlimited cards', '100+ templates', 'Team collaboration', 'Admin controls'],
              popular: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              style={{
                backgroundColor: plan.popular ? colors.primary : colors.lightBg,
                borderRadius: '12px',
                padding: '30px',
                border: plan.popular ? `2px solid ${colors.secondary}` : `1px solid ${colors.border}`,
                position: 'relative',
                transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {plan.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: colors.secondary,
                    color: colors.white,
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 700,
                  }}
                >
                  MOST POPULAR
                </div>
              )}
              <h3
                style={{
                  margin: '0 0 12px 0',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: plan.popular ? colors.white : colors.primary,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {plan.name}
              </h3>
              <p
                style={{
                  margin: '0 0 20px 0',
                  fontSize: '12px',
                  color: plan.popular ? colors.accentLight : colors.lightText,
                }}
              >
                {plan.desc}
              </p>
              <div
                style={{
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '4px',
                }}
              >
                <span
                  style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    color: plan.popular ? colors.white : colors.secondary,
                  }}
                >
                  ${plan.price}
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    color: plan.popular ? colors.accentLight : colors.lightText,
                  }}
                >
                  /month
                </span>
              </div>
              <button
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: plan.popular ? colors.white : colors.secondary,
                  color: plan.popular ? colors.primary : colors.white,
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  marginBottom: '24px',
                }}
                onClick={() => navigate('/templates')}
              >
                Get Started
              </button>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      fontSize: '14px',
                      color: plan.popular ? colors.accentLight : colors.lightText,
                      marginBottom: '12px',
                      paddingLeft: '24px',
                      position: 'relative',
                    }}
                  >
                    <span style={{ position: 'absolute', left: 0, color: plan.popular ? colors.white : colors.secondary }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 40px', backgroundColor: colors.lightBg }}>
        <h2
          style={{
            fontSize: '48px',
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: '60px',
            color: colors.primary,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Frequently Asked Questions
        </h2>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                borderBottom: `1px solid ${colors.border}`,
                marginBottom: '16px',
                backgroundColor: colors.white,
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                style={{
                  width: '100%',
                  padding: '20px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: colors.primary,
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {item.q}
                <span
                  style={{
                    transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                    color: colors.secondary,
                  }}
                >
                  ▼
                </span>
              </button>
              {openFaq === idx && (
                <div style={{ padding: '0 20px 20px 20px' }}>
                  <p style={{ margin: 0, color: colors.lightText, lineHeight: 1.6 }}>
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          padding: '80px 40px',
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
          textAlign: 'center',
          color: colors.white,
        }}
      >
        <h2 style={{ fontSize: '48px', fontWeight: 900, margin: '0 0 20px 0', color: colors.white, fontFamily: "'Playfair Display', serif" }}>
          Ready to Create?
        </h2>
        <p
          style={{
            fontSize: '18px',
            maxWidth: '600px',
            margin: '0 auto 30px',
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          Join 80,000+ users creating beautiful business cards. Get started free today.
        </p>
        <button
          onClick={() => navigate('/templates')}
          style={{
            padding: '14px 40px',
            backgroundColor: colors.white,
            color: colors.primary,
            border: 'none',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Start Creating Now
        </button>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: colors.darkerBg,
          color: colors.white,
          padding: '40px',
          textAlign: 'center',
          fontSize: '14px',
          borderTop: `1px solid rgba(255,255,255,0.1)`,
        }}
      >
        <p style={{ margin: '0 0 12px 0', color: 'rgba(255,255,255,0.7)' }}>
          © 2026 CardPro. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <a href="#" style={{ color: colors.accentLight, textDecoration: 'none' }}>
            Privacy
          </a>
          <a href="#" style={{ color: colors.accentLight, textDecoration: 'none' }}>
            Terms
          </a>
          <a href="#" style={{ color: colors.accentLight, textDecoration: 'none' }}>
            Contact
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Landing
