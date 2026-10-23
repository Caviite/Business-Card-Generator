
import { useNavigate } from 'react-router-dom'
import Template1 from './Template1.jsx'
import Template2 from './Template2.jsx'

function Card({ data, template }) {
  const navigate = useNavigate()

  const renderTemplate = () => {
    switch (template) {
      case 'template1':
        return <Template1 data={data} />
      case 'template2':
        return <Template2 data={data} />
      default:
        return <Template1 data={data} />
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '40px 20px',
      gap: '30px',
    }}>
      {renderTemplate()}

      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6B7280',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Back Home
        </button>
        <button
          onClick={() => navigate('/form')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#9CA3AF',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Edit Card
        </button>
        <button
          onClick={() => navigate('/templates')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#9CA3AF',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Change Template
        </button>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#10B981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Download Card
        </button>
      </div>
    </div>
  )
}

export default Card
