// import React from 'react'
import styles from '../css/Home.module.css'
import ghLogo from '../assets/ghLogo.svg'

function Home() {
  const buttons = [
    { label: 'View Students', bg: '#860808', left: 36 },
    { label: 'View Classroom', bg: '#5B058D', left: 27 },
    { label: 'View Rewards', bg: '#2A1480', left: 39 },
    { label: 'Settings', bg: '#008B18', left: 71 },
  ]

  return (
    <div className={styles.root}>
      <h2>Welcome to DL's Classroom</h2>
      <div className={styles.content}>
        <div data-testid='optionsButtons' className={styles.options}>
          {buttons.map((b) => (
            <div role="optionButton" key={b.label}  className={styles.optionButtons} style={{ backgroundColor: b.bg }}>
              {b.label}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <p >Created by: TGWDM</p>
        <a id='linkToGH' href='https://github.com/TGWDM/DLs-Classroom' target='_blank' rel='noopener noreferrer'>
          <img src={ghLogo} alt='github-logo' className={styles.ghLogo} ></img>
        </a>
      </div>
    </div>
  )
}

export default Home