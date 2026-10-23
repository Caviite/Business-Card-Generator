import { useMemo } from 'react'

function Template1({ data }) {
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
    blue: '#1E3A8A',
    red: '#DC2626',
    green: '#059669',
    yellow: '#D97706',
    purple: '#7C3AED',
    orange: '#EA580C',
  }

  const primaryColor = themeColors[color] || '#1E3A8A'

  const logoUrl = useMemo(() => {
    return logo ? URL.createObjectURL(logo) : null
  }, [logo])

  const contactItems = [
    {
      icon: '📞',
      label: number || '+00 123 456 789',
    },
    {
      icon: '✉️',
      label: email || 'email address goes here',
    },
    {
      icon: '🌐',
      label: website || 'website goes here',
    },
    {
      icon: '📍',
      label: address || 'address goes here, your city',
    },
  ]

  return (
    <div
      style={{
        width: '600px',
        height: '340px',
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 18px 40px rgba(15, 23, 42, 0.16)',
        fontFamily: 'Inter, Arial, sans-serif',
        backgroundColor: '#f8fafc',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '44%',
          height: '100%',
          backgroundColor: primaryColor,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: '-110px',
            top: '10%',
            width: '260px',
            height: '260px',
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            opacity: 0.18,
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '-90px',
            top: '22%',
            width: '200px',
            height: '200px',
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            opacity: 0.14,
          }}
        />
        <div
          style={{
            zIndex: 1,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            padding: '32px 28px 24px 32px',
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                color: '#ffffff',
                fontSize: '26px',
                lineHeight: 1.1,
                fontWeight: 700,
              }}
            >
              {fullName || 'YOUR NAME'}
            </h1>
            <p
              style={{
                margin: '12px 0 0 0',
                color: 'rgba(255, 255, 255, 0.84)',
                fontSize: '14px',
                lineHeight: 1.6,
              }}
            >
              {title || 'Job Position'}
            </p>
          </div>

          <div style={{ display: 'grid', gap: '12px' }}>
            {contactItems.map((item) => (
              <div
                key={item.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#ffffff',
                  fontSize: '14px',
                  lineHeight: 1.5,
                  opacity: 0.95,
                }}
              >
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255,255,255,0.18)',
                    borderRadius: '50%',
                  }}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '56%',
          height: '100%',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '30px 30px 24px 30px',
        }}
      >
        <div style={{ textAlign: 'center', paddingTop: '14px' }}>
          <div
            style={{
              width: '88px',
              height: '88px',
              margin: '0 auto',
              borderRadius: '24px',
              backgroundColor: '#F3F4F6',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            {logoUrl ? (
              <img
                src={logoUrl}
                alt="Logo"
                style={{
                  width: '70px',
                  height: '70px',
                  objectFit: 'contain',
                }}
              />
            ) : (
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: primaryColor,
                  display: 'grid',
                  placeItems: 'center',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '18px',
                }}
              >
                {company ? company.charAt(0) : 'L'}
              </div>
            )}
          </div>

          <p
            style={{
              margin: '18px 0 6px',
              fontSize: '12px',
              color: '#6B7280',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Your logo
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: '28px',
              color: '#111827',
              letterSpacing: '-0.04em',
            }}
          >
            {company || 'COMPANY NAME'}
          </h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '16px',
              backgroundColor: '#F3F4F6',
              border: '1px solid #E5E7EB',
              display: 'grid',
              placeItems: 'center',
              color: '#9CA3AF',
              fontSize: '10px',
              textAlign: 'center',
              padding: '8px',
              lineHeight: 1.2,
            }}
          >
            QR Code
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template1