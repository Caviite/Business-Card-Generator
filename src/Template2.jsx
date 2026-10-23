import { useMemo } from 'react'

function Template2({ data }) {
  const {
    fullName,
    title,
    company,
    website,
    number,
    address,
    email,
    color,
    logo,
  } = data

  const themeColors = {
    blue: '#0F172A',
    red: '#7C0A02',
    green: '#064E3B',
    yellow: '#713F12',
    purple: '#3F0F5C',
    orange: '#7C2D12',
  }

  const primaryColor = themeColors[color] || '#0F172A'

  const logoUrl = useMemo(() => {
    return logo ? URL.createObjectURL(logo) : null
  }, [logo])

  // Wavy background pattern for back side
  const WavePattern = ({ color }) => (
    <svg
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      }}
      viewBox="0 0 600 340"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="waves" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M0,40 Q20,20 40,40 T80,40" stroke={color} strokeWidth="2" fill="none" opacity="0.15" />
          <path d="M0,50 Q20,30 40,50 T80,50" stroke={color} strokeWidth="2" fill="none" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="600" height="340" fill={color} />
      <rect width="600" height="340" fill="url(#waves)" />
    </svg>
  )

  const contactItems = [
    {
      icon: '🌐',
      text: website || 'Your website name here',
    },
    {
      icon: '📍',
      text: address || 'Your Street Location here',
    },
    {
      icon: '📱',
      text: number || '14152150002252010',
    },
    {
      icon: '✉️',
      text: email || 'Your email address here',
    },
  ]

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Front of card */}
      <div
        style={{
          width: '600px',
          height: '340px',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(15, 23, 42, 0.18)',
          fontFamily: 'Inter, -apple-system, sans-serif',
          backgroundColor: '#ffffff',
          position: 'relative',
        }}
      >
      {/* Main content area */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Top section */}
        <div style={{ padding: '28px 32px' }}>
          <h1
            style={{
              margin: 0,
              fontSize: '24px',
              fontWeight: 800,
              color: '#000000',
              letterSpacing: '-0.02em',
            }}
          >
            {fullName || 'YOUR NAME'}
          </h1>
          <p
            style={{
              margin: '6px 0 12px 0',
              fontSize: '13px',
              color: '#6B7280',
              fontWeight: 500,
            }}
          >
            {title || 'Your Position/Brandname'}
          </p>
          {/* Underline divider */}
          <div
            style={{
              width: '40px',
              height: '3px',
              backgroundColor: primaryColor,
              borderRadius: '2px',
              marginBottom: '16px',
            }}
          />

          {/* Contact items */}
          <div style={{ display: 'grid', gap: '10px' }}>
            {contactItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '12px',
                  color: '#1F2937',
                  fontWeight: 500,
                }}
              >
                <div
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: '#ffffff' }}>●</span>
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom right logo area */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '160px',
            height: '120px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          {logoUrl ? (
            <img
              src={logoUrl}
              alt="Logo"
              style={{
                width: '48px',
                height: '48px',
                objectFit: 'contain',
              }}
            />
          ) : (
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: primaryColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '16px',
              }}
            >
              {company ? company.charAt(0) : 'L'}
            </div>
          )}
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                margin: 0,
                fontSize: '11px',
                fontWeight: 700,
                color: '#000000',
              }}
            >
              {company || 'COMPANY'}
            </p>
            <p
              style={{
                margin: '2px 0 0 0',
                fontSize: '9px',
                color: '#6B7280',
              }}
            >
              Logo
            </p>
          </div>
        </div>
      </div>

      {/* Curved wave background - bottom right */}
      <svg
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '220px',
          height: '140px',
          zIndex: 1,
        }}
        viewBox="0 0 220 140"
        preserveAspectRatio="none"
      >
        <path
          d="M 220 140 Q 180 100 120 100 T 0 140 L 220 140 Z"
          fill={primaryColor}
        />
      </svg>
        </div>

      {/* Back of card */}
      <div
        style={{
          width: '600px',
          height: '340px',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(15, 23, 42, 0.18)',
          fontFamily: 'Inter, -apple-system, sans-serif',
          backgroundColor: primaryColor,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <WavePattern color={primaryColor} />
        
        {/* Centered logo section */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            textAlign: 'center',
          }}
        >
          {logoUrl ? (
            <img
              src={logoUrl}
              alt="Company Logo"
              style={{
                width: '120px',
                height: '120px',
                objectFit: 'contain',
                filter: 'brightness(1.1)',
              }}
            />
          ) : (
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '48px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              {company ? company.charAt(0) : 'L'}
            </div>
          )}
          
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: '28px',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              {company || 'COMPANY NAME'}
            </h2>
            <p
              style={{
                margin: '8px 0 0 0',
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: 500,
              }}
            >
              Your Slogan here
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template2
