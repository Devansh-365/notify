import React from 'react'
import styles from './toast.module.css'


const Toast = ({mode, onClose, title, subTitle}) => {

  const classes = [styles.toast, styles[mode]].join(' ')

  const classesIcon = [styles.toast_icon, styles[`${mode}_toast_icon`]].join(' ')

  console.log(`styles.${mode}_toast_icon`)

  return (
    <div onClick={onClose} className={classes} >
      <div>
        <div className={classesIcon}></div>
      </div>
      <div>
        <h5 className={styles.toast_title}>{title}</h5>
        <h5 className={styles.toast_subTitle}>{subTitle}</h5>
      </div>
      <div>
          <img src='./images/x.svg' onClick={onClose} alt="close icon" id="close_icon" />
      </div>
    </div>
  )
}

export default Toast