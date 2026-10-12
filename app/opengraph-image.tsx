import { BUSINESS_NAME } from '@/lib/constants'
import { ADDRESS, CITY, REGION } from '@/lib/seo'
import { ImageResponse } from 'next/og'

export const alt = `${BUSINESS_NAME} - Klinik Kecantikan di ${CITY}, ${REGION}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #fff4f7 0%, #fde4ec 100%)',
        border: '16px solid #1b3c73',
        color: '#1b3c73',
        textAlign: 'center',
        padding: 64,
      }}
    >
      <div
        style={{
          fontSize: 28,
          letterSpacing: 10,
          textTransform: 'uppercase',
          color: '#c8a781',
        }}
      >
        Klinik Kecantikan
      </div>
      <div style={{ fontSize: 148, letterSpacing: 16, marginTop: 8 }}>
        ARISTÉE
      </div>
      <div style={{ fontSize: 40, color: '#f4538a' }}>by dr. Linda</div>
      <div
        style={{
          width: 160,
          height: 2,
          background: '#c8a781',
          margin: '36px 0',
        }}
      />
      <div style={{ fontSize: 36 }}>
        Facial, Acne, Flek &amp; Melasma, Peremajaan Kulit
      </div>
      <div style={{ fontSize: 28, marginTop: 20, color: '#5b6b8c' }}>
        {`${ADDRESS.street}, ${CITY}, ${REGION}`}
      </div>
    </div>,
    size,
  )
}
