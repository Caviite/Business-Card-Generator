import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ContactForm({ onSave }) {
    const [fullName, setFullName] = useState('')
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [website, setWebsite] = useState('')
    const [color, setColor] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [logo, setLogo] = useState(null)
    const [twitter, setTwitter] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [instagram, setInstagram] = useState('')
    const [tiktok, setTiktok] = useState('')
    const [logoPreview, setLogoPreview] = useState(null)

    const navigate = useNavigate()

    const handleLogoChange = (e) => {
        const file = e.target.files[0] || null
        setLogo(file)
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => setLogoPreview(reader.result)
            reader.readAsDataURL(file)
        } else {
            setLogoPreview(null)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSave({ fullName, title, company, website, number, address, email, color, logo, twitter, linkedin, instagram, tiktok })
        navigate('/Card')
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

    const inputStyle = {
        width: '100%',
        padding: '12px 16px',
        border: `1.5px solid ${colors.border}`,
        borderRadius: '10px',
        fontSize: '14px',
        color: colors.primary,
        backgroundColor: colors.white,
        outline: 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        boxSizing: 'border-box',
        fontFamily: "'Raleway', sans-serif",
    }

    const labelStyle = {
        display: 'block',
        marginBottom: '6px',
        fontSize: '13px',
        fontWeight: 600,
        color: colors.primary,
        letterSpacing: '0.02em',
        fontFamily: "'Raleway', sans-serif",
    }

    const socialIconStyle = {
        position: 'absolute',
        left: '14px',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '16px',
        pointerEvents: 'none',
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

                .form-input:focus {
                    border-color: #2563EB !important;
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12) !important;
                }
                .form-input::placeholder { color: #93C5FD; font-weight: 400; }
                .form-select:focus {
                    border-color: #2563EB !important;
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12) !important;
                    outline: none;
                }
                .submit-btn:hover {
                    background: #1d4ed8 !important;
                    transform: translateY(-2px) !important;
                    box-shadow: 0 8px 24px rgba(37,99,235,0.4) !important;
                }
                .submit-btn:active { transform: translateY(0px) !important; }
                .file-upload-area:hover {
                    border-color: #2563EB !important;
                    background: #DBEAFE !important;
                }
                .section-card {
                    background: white;
                    border-radius: 16px;
                    padding: 28px 32px;
                    margin-bottom: 20px;
                    border: 1px solid #BFDBFE;
                    box-shadow: 0 2px 12px rgba(30,58,138,0.05);
                }
                .section-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 15px;
                    font-weight: 700;
                    color: #1E3A8A;
                    margin: 0 0 20px 0;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .section-title::after {
                    content: '';
                    flex: 1;
                    height: 1px;
                    background: #BFDBFE;
                }
                .back-btn:hover { background: #EFF6FF !important; }
            `}</style>

            {/* Navbar */}
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {['Choose Template', 'Fill Details', 'Get Card'].map((step, i) => (
                        <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: '6px',
                                padding: '5px 14px',
                                borderRadius: '20px',
                                backgroundColor: i === 1 ? colors.secondary : i < 1 ? '#DBEAFE' : colors.lightBg,
                                color: i === 1 ? colors.white : i < 1 ? colors.secondary : colors.lightText,
                                fontSize: '12px',
                                fontWeight: 600,
                            }}>
                                <span style={{
                                    width: '18px', height: '18px',
                                    borderRadius: '50%',
                                    backgroundColor: i === 1 ? 'rgba(255,255,255,0.25)' : i < 1 ? colors.secondary : colors.border,
                                    color: i < 1 ? colors.white : i === 1 ? colors.white : colors.lightText,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '10px', fontWeight: 700,
                                }}>
                                    {i < 1 ? '✓' : i + 1}
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
                    ✦ Step 2 — Fill In Your Details
                </div>
                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(28px, 4vw, 42px)',
                    fontWeight: 800,
                    color: colors.primary,
                    margin: '0 0 12px 0',
                    letterSpacing: '-0.02em',
                }}>
                    Build Your Business Card
                </h1>
                <p style={{
                    fontSize: '15px',
                    color: colors.lightText,
                    maxWidth: '460px',
                    margin: '0 auto',
                    lineHeight: 1.7,
                }}>
                    Fill in your details below and we'll generate a stunning, print-ready card instantly.
                </p>
            </div>

            {/* Form */}
            <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 20px' }}>
                <form onSubmit={handleSubmit}>

                    {/* Personal Info */}
                    <div className="section-card">
                        <div className="section-title">👤 Personal Information</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div>
                                <label style={labelStyle}>Full Name <span style={{ color: '#EF4444' }}>*</span></label>
                                <input
                                    className="form-input"
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="e.g. Alexandra Osei"
                                    required
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>Job Title <span style={{ color: '#EF4444' }}>*</span></label>
                                <input
                                    className="form-input"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="e.g. Product Designer"
                                    required
                                    style={inputStyle}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Company Details */}
                    <div className="section-card">
                        <div className="section-title">🏢 Company Details</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div>
                                <label style={labelStyle}>Company Name <span style={{ color: '#EF4444' }}>*</span></label>
                                <input
                                    className="form-input"
                                    type="text"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    placeholder="e.g. GEC Designs"
                                    required
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>Website</label>
                                <div style={{ position: 'relative' }}>
                                    <span style={{ ...socialIconStyle, fontSize: '14px', color: colors.accentLight }}>🌐</span>
                                    <input
                                        className="form-input"
                                        type="text"
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                        placeholder="yourwebsite.com"
                                        style={{ ...inputStyle, paddingLeft: '38px' }}
                                    />
                                </div>
                            </div>
                            <div style={{ gridColumn: '1 / -1' }}>
                                <label style={labelStyle}>Address <span style={{ color: '#EF4444' }}>*</span></label>
                                <input
                                    className="form-input"
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="e.g. 12 Marina Street, Lagos"
                                    required
                                    style={inputStyle}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="section-card">
                        <div className="section-title">📞 Contact Information</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div>
                                <label style={labelStyle}>Phone Number <span style={{ color: '#EF4444' }}>*</span></label>
                                <div style={{ position: 'relative' }}>
                                    <span style={{ ...socialIconStyle, fontSize: '14px', color: colors.accentLight }}>📱</span>
                                    <input
                                        className="form-input"
                                        type="text"
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
                                        placeholder="+00 123 456 789"
                                        required
                                        style={{ ...inputStyle, paddingLeft: '38px' }}
                                    />
                                </div>
                            </div>
                            <div>
                                <label style={labelStyle}>Email Address <span style={{ color: '#EF4444' }}>*</span></label>
                                <div style={{ position: 'relative' }}>
                                    <span style={{ ...socialIconStyle, fontSize: '14px', color: colors.accentLight }}>✉️</span>
                                    <input
                                        className="form-input"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your.email@example.com"
                                        required
                                        style={{ ...inputStyle, paddingLeft: '38px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="section-card">
                        <div className="section-title">
                            🔗 Social Media
                            <span style={{ fontSize: '11px', fontWeight: 400, color: colors.lightText, fontFamily: "'Raleway', sans-serif" }}>optional</span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            {[
                                { label: 'Twitter / X', icon: '𝕏', value: twitter, setter: setTwitter, placeholder: '@yourhandle' },
                                { label: 'LinkedIn', icon: 'in', value: linkedin, setter: setLinkedin, placeholder: 'linkedin.com/in/you' },
                                { label: 'Instagram', icon: '📸', value: instagram, setter: setInstagram, placeholder: '@yourhandle' },
                                { label: 'TikTok', icon: '♪', value: tiktok, setter: setTiktok, placeholder: '@yourhandle' },
                            ].map(({ label, icon, value, setter, placeholder }) => (
                                <div key={label}>
                                    <label style={labelStyle}>{label}</label>
                                    <div style={{ position: 'relative' }}>
                                        <span style={{
                                            ...socialIconStyle,
                                            fontSize: '13px',
                                            fontWeight: 700,
                                            color: colors.secondary,
                                            fontFamily: "'Raleway', sans-serif",
                                        }}>{icon}</span>
                                        <input
                                            className="form-input"
                                            type="text"
                                            value={value}
                                            onChange={(e) => setter(e.target.value)}
                                            placeholder={placeholder}
                                            style={{ ...inputStyle, paddingLeft: '36px' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Logo & Theme */}
                    <div className="section-card">
                        <div className="section-title">🎨 Logo & Theme Color</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start' }}>

                            {/* Logo Upload */}
                            <div>
                                <label style={labelStyle}>Upload Your Logo</label>
                                <label
                                    htmlFor="logo"
                                    className="file-upload-area"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px',
                                        padding: '24px',
                                        border: `2px dashed ${colors.border}`,
                                        borderRadius: '12px',
                                        cursor: 'pointer',
                                        backgroundColor: colors.lightBg,
                                        transition: 'border-color 0.2s, background 0.2s',
                                        minHeight: '120px',
                                    }}
                                >
                                    {logoPreview ? (
                                        <img
                                            src={logoPreview}
                                            alt="Logo preview"
                                            style={{ maxHeight: '80px', maxWidth: '100%', objectFit: 'contain', borderRadius: '6px' }}
                                        />
                                    ) : (
                                        <>
                                            <div style={{ fontSize: '28px' }}>🖼️</div>
                                            <div style={{ fontSize: '13px', color: colors.lightText, textAlign: 'center', lineHeight: 1.6 }}>
                                                <span style={{ color: colors.secondary, fontWeight: 600 }}>Click to upload</span><br />
                                                PNG, JPG or SVG
                                            </div>
                                        </>
                                    )}
                                </label>
                                <input
                                    type="file"
                                    id="logo"
                                    accept="image/*"
                                    onChange={handleLogoChange}
                                    style={{ display: 'none' }}
                                />
                                {logo && (
                                    <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#16A34A', fontWeight: 500 }}>
                                        ✓ {logo.name}
                                    </p>
                                )}
                            </div>

                            {/* Theme Color */}
                            <div>
                                <label style={labelStyle}>Theme Color <span style={{ color: '#EF4444' }}>*</span></label>
                                <select
                                    className="form-select"
                                    id="color"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    required
                                    style={{
                                        ...inputStyle,
                                        cursor: 'pointer',
                                        appearance: 'none',
                                        WebkitAppearance: 'none',
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%232563EB' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 14px center',
                                        paddingRight: '40px',
                                    }}
                                >
                                    <option value="">Choose theme color</option>
                                    <option value="blue">🌊 Blue</option>
                                    <option value="red">🔥 Red</option>
                                    <option value="green">🌿 Green</option>
                                    <option value="yellow">☀️ Yellow</option>
                                    <option value="purple">💜 Purple</option>
                                    <option value="orange">🧡 Orange</option>
                                </select>

                                {color && (
                                    <div style={{
                                        marginTop: '14px',
                                        padding: '14px 16px',
                                        backgroundColor: colors.lightBg,
                                        borderRadius: '10px',
                                        border: `1px solid ${colors.border}`,
                                    }}>
                                        <div style={{ fontSize: '11px', color: colors.lightText, marginBottom: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                                            Color palette preview
                                        </div>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            {(() => {
                                                const palettes = {
                                                    blue: ['#1E3A8A', '#2563EB', '#93C5FD', '#EFF6FF'],
                                                    red: ['#7F1D1D', '#DC2626', '#FCA5A5', '#FEF2F2'],
                                                    green: ['#14532D', '#16A34A', '#86EFAC', '#F0FDF4'],
                                                    yellow: ['#713F12', '#CA8A04', '#FDE68A', '#FEFCE8'],
                                                    purple: ['#3B0764', '#7C3AED', '#C4B5FD', '#F5F3FF'],
                                                    orange: ['#7C2D12', '#EA580C', '#FDBA74', '#FFF7ED'],
                                                }
                                                return (palettes[color] || []).map((c, i) => (
                                                    <div key={i} style={{
                                                        flex: 1,
                                                        height: '36px',
                                                        borderRadius: '8px',
                                                        backgroundColor: c,
                                                        border: '1px solid rgba(0,0,0,0.06)',
                                                    }} />
                                                ))
                                            })()}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Submit */}
                    <div style={{ textAlign: 'center', paddingTop: '8px', paddingBottom: '20px' }}>
                        <p style={{ fontSize: '13px', color: colors.lightText, marginBottom: '20px' }}>
                            Fields marked <span style={{ color: '#EF4444' }}>*</span> are required
                        </p>
                        <button
                            type="submit"
                            className="submit-btn"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '16px 52px',
                                backgroundColor: colors.secondary,
                                color: colors.white,
                                border: 'none',
                                borderRadius: '12px',
                                fontWeight: 700,
                                fontSize: '16px',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                fontFamily: "'Raleway', sans-serif",
                                boxShadow: '0 4px 16px rgba(37,99,235,0.3)',
                                letterSpacing: '0.02em',
                            }}
                        >
                            <span>Generate My Card</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <p style={{ marginTop: '14px', fontSize: '12px', color: colors.lightText }}>
                            🔒 Your data is only used to generate your card and is never stored.
                        </p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ContactForm
