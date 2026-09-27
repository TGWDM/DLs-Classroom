// import React from 'react'
import styles from '../css/Home.module.css'
import ghLogo from '../assets/ghLogo.svg'
import linkedIn from '../assets/Linkedin.svg'
import NavBtn from '../components/NavBtn'

function Home() {
  const buttons = [
    { label: 'View Classroom', bg: '#5B058D', to: '/classroom', left: 27 },
    { label: 'View Standings', bg: '#2A1480', to: '/standings', left: 39 },
    { label: 'Settings', bg: '#008B18', to: '/settings', left: 71 },
    { label: 'Close App', bg: '#860808', to: '/', left: 36 }
  ]

  return (
    <div className={styles.root}>
      <h2>Welcome to DL's Classroom</h2>
      <div className={styles.content}>
        <div data-testid='optionsButtons' className={styles.options}>
          {buttons.map((b) => (
            <NavBtn
              label={b.label}
              to={b.to}
              className={styles.optionButtons}
              bg={b.bg}
            >

            </NavBtn>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <p >Created by: TGWDM</p>
        <div className={styles.logos}>
          <a id='linkToLI' href='https://www.linkedin.com/in/tyrell-grant-williams-b46a0a1a1/' target='_blank' rel='noopener noreferrer'>
            <img src={linkedIn} alt='linkedIn-logo' className={styles.logo} ></img>
          </a>
          <a id='linkToGH' href='https://github.com/TGWDM/DLs-Classroom' target='_blank' rel='noopener noreferrer'>
            <img src={ghLogo} alt='github-logo' className={styles.logo} ></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home