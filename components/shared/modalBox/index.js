import styles from './modal.module.scss'

const ModalBox = ({children, title, isShowing, handleClose}) => {

  if (!isShowing) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.modalTitle}>
          <h3>{title}</h3>
          <button onClick={() => handleClose(false)}>Close</button>
        </div>
        <div className={styles.modalContent}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ModalBox