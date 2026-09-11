// import React from 'react'

function Home() {
  const buttons = [
    { label: 'View Students', bg: '#860808', left: 36 },
    { label: 'View Classroom', bg: '#5B058D', left: 27 },
    { label: 'View Rewards', bg: '#2A1480', left: 39 },
    { label: 'Settings', bg: '#008B18', left: 71 },
  ]

  return (
    <div style={{
      minHeight: '100vh',
      background: '#101010',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 23,
      color: 'white',
      fontFamily: 'Inter',
    }}>
      <h2 style={{ fontSize: 32, fontWeight: 400 }}>Welcome to DL's Classroom</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 23 }}>
        {buttons.map((b) => (
          <div key={b.label} style={{
            width: 237,
            height: 77,
            background: b.bg,
            borderRadius: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            cursor: 'pointer',
          }}>
            {b.label}
          </div>
        ))}
      </div>
      <p style={{ marginTop: 'auto', paddingBottom: 20 }}>Created by: TGWDM</p>
    </div>
  )
}

export default Home