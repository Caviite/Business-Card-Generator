import { useNavigate } from 'react-router-dom'
import Template1 from './Template1.jsx'
import Template2 from './Template2.jsx'

function Templates({ data, onSelectTemplate }) {
  const navigate = useNavigate()

  const handleSelectTemplate = (templateName) => {
    onSelectTemplate(templateName)
    navigate('/form')
  }

  const colors = {
    primary: '#1E3A8A',
    secondary: '#2563EB',
    accentLight: '#93C5FD',
    white: '#FFFFFF',
    lightBg: '#EFF6FF',
    lightText: '#4B6FA8',
    border: '#BFDBFE',
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(160deg, ${colors.lightBg} 0%, #DBEAFE 50%, ${colors.lightBg} 100%)`,
      fontFamily: "'Raleway', sans-serif",
      padding: '0 0 60px 0',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Raleway:wght@300;400;500;600;700&display=swap');

        body, html { font-family: 'Raleway', sans-serif; }
        h1, h2, h3 { font-family: 'Playfair Display', serif; }

        .back-btn:hover { background: #EFF6FF !important; }

        .template-card {
          background: white;
          border-radius: 16px;
          padding: 28px 24px;
          box-shadow: 0 2px 12px rgba(30,58,138,0.06);
          border: 1.5px solid #BFDBFE;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
          cursor: pointer;
        }
        .template-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(37,99,235,0.16);
          border-color: #2563EB;
        }
        .use-btn:hover {
          background: #1d4ed8 !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 6px 18px rgba(37,99,235,0.35) !important;
        }
        .use-btn:active { transform: translateY(0) !important; }
      `}</style>

      {/* Navbar — identical structure to form.jsx, Step 1 active */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 40px',
        background: colors.white,
        boxShadow: '0 2px 12px rgba(30,58,138,0.1)',
        borderBottom: `2px solid #3B82F6`,
        marginBottom: '40px',
      }}>
        <div
          onClick={() => navigate('/')}
          style={{ fontSize: '24px', fontWeight: 900, color: colors.primary, fontFamily: "'Playfair Display', serif", cursor: 'pointer' }}
        >
          CardPro
        </div>

        {/* Step progress — Step 1 is active here */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {['Choose Template', 'Fill Details', 'Get Card'].map((step, i) => (
            <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '5px 14px',
                borderRadius: '20px',
                backgroundColor: i === 0 ? colors.secondary : colors.lightBg,
                color: i === 0 ? colors.white : colors.lightText,
                fontSize: '12px',
                fontWeight: 600,
              }}>
                <span style={{
                  width: '18px', height: '18px',
                  borderRadius: '50%',
                  backgroundColor: i === 0 ? 'rgba(255,255,255,0.25)' : colors.border,
                  color: i === 0 ? colors.white : colors.lightText,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '10px', fontWeight: 700,
                }}>
                  {i + 1}
                </span>
                {step}
              </div>
              {i < 2 && <span style={{ color: colors.border, fontSize: '16px' }}>›</span>}
            </div>
          ))}
        </div>

        <button
          className="back-btn"
          onClick={() => navigate('/')}
          style={{
            padding: '8px 20px',
            backgroundColor: 'transparent',
            color: colors.secondary,
            border: `1.5px solid ${colors.secondary}`,
            borderRadius: '8px',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '13px',
            fontFamily: "'Raleway', sans-serif",
            transition: 'background 0.2s',
          }}
        >
          ← Back
        </button>
      </nav>

      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px', padding: '0 20px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#DBEAFE',
          color: colors.secondary,
          padding: '6px 18px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          ✦ Step 1 — Pick Your Design
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 800,
          color: colors.primary,
          margin: '0 0 12px 0',
          letterSpacing: '-0.02em',
        }}>
          Choose Your Template
        </h1>
        <p style={{
          fontSize: '15px',
          color: colors.lightText,
          maxWidth: '460px',
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          Select a design that fits your brand. You can fully customise colours and details in the next step.
        </p>
      </div>

      {/* Template Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '28px',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 20px',
      }}>

        {/* Template 1 */}
        <div
          className="template-card"
          onClick={() => handleSelectTemplate('template1')}
        >
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{
                margin: '0 0 4px 0',
                fontSize: '18px',
                fontWeight: 700,
                color: colors.primary,
                fontFamily: "'Playfair Display', serif",
              }}>
                Modern Split
              </h3>
              <span style={{
                display: 'inline-block',
                padding: '2px 10px',
                borderRadius: '10px',
                fontSize: '11px',
                fontWeight: 600,
                backgroundColor: '#DBEAFE',
                color: colors.secondary,
                fontFamily: "'Raleway', sans-serif",
              }}>
                Clean &amp; Bold
              </span>
            </div>
            <span style={{
              fontSize: '11px',
              fontWeight: 600,
              color: colors.lightText,
              backgroundColor: colors.lightBg,
              padding: '4px 12px',
              borderRadius: '20px',
              border: `1px solid ${colors.border}`,
            }}>
              Template 1
            </span>
          </div>

          {/* Preview */}
          <div style={{
            width: '100%',
            height: '200px',
            overflow: 'hidden',
            borderRadius: '12px',
            backgroundColor: '#f8fafc',
            border: `1px solid ${colors.border}`,
            position: 'relative',
          }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: 2 }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(0.42)',
              transformOrigin: 'center center',
              width: '700px',
              pointerEvents: 'none',
            }}>
              <Template1 data={data} />
            </div>
          </div>

          <button
            className="use-btn"
            onClick={(e) => { e.stopPropagation(); handleSelectTemplate('template1') }}
            style={{
              width: '100%',
              padding: '13px 24px',
              backgroundColor: colors.secondary,
              color: colors.white,
              border: 'none',
              borderRadius: '10px',
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: '14px',
              fontFamily: "'Raleway', sans-serif",
              transition: 'all 0.2s',
              boxShadow: '0 4px 14px rgba(37,99,235,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            Use This Template
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Template 2 */}
        <div
          className="template-card"
          onClick={() => handleSelectTemplate('template2')}
        >
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{
                margin: '0 0 4px 0',
                fontSize: '18px',
                fontWeight: 700,
                color: colors.primary,
                fontFamily: "'Playfair Display', serif",
              }}>
                Curved Wave
              </h3>
              <span style={{
                display: 'inline-block',
                padding: '2px 10px',
                borderRadius: '10px',
                fontSize: '11px',
                fontWeight: 600,
                backgroundColor: '#DBEAFE',
                color: colors.secondary,
                fontFamily: "'Raleway', sans-serif",
              }}>
                Elegant &amp; Modern
              </span>
            </div>
            <span style={{
              fontSize: '11px',
              fontWeight: 600,
              color: colors.lightText,
              backgroundColor: colors.lightBg,
              padding: '4px 12px',
              borderRadius: '20px',
              border: `1px solid ${colors.border}`,
            }}>
              Template 2
            </span>
          </div>

          {/* Preview */}
          <div style={{
            width: '100%',
            height: '200px',
            overflow: 'hidden',
            borderRadius: '12px',
            backgroundColor: '#f8fafc',
            border: `1px solid ${colors.border}`,
            position: 'relative',
          }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: 2 }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(0.42)',
              transformOrigin: 'center center',
              width: '700px',
              pointerEvents: 'none',
            }}>
              <Template2 data={data} />
            </div>
          </div>

          <button
            className="use-btn"
            onClick={(e) => { e.stopPropagation(); handleSelectTemplate('template2') }}
            style={{
              width: '100%',
              padding: '13px 24px',
              backgroundColor: colors.secondary,
              color: colors.white,
              border: 'none',
              borderRadius: '10px',
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: '14px',
              fontFamily: "'Raleway', sans-serif",
              transition: 'all 0.2s',
              boxShadow: '0 4px 14px rgba(37,99,235,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            Use This Template
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Templates
