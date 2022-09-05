import { forwardRef, useImperativeHandle,  useState } from 'react'
import ReactDOM from 'react-dom'
import { getId } from '../../helpers/getId'
import { useToastAutoClose } from '../../hooks/useToastAutoClose'
import { useToastPortal } from '../../hooks/useToastPortal'
import Toast from '../Toast'
import styles from './toastPortal.module.css'


const ToastPortal = forwardRef(({autoClose = false, autoCloseTime = 4000}, ref) => {

  const [toasts, setToasts] = useState([])
  const { loaded, portalId } = useToastPortal()

  useToastAutoClose({
    toasts,
    setToasts,
    autoClose,
    autoCloseTime
  })

  const removeToast = id => {
    setToasts(toasts.filter(toast => toast.id !== id))
  }

  useImperativeHandle(ref, () => ({
    addToasts(toast) {
      setToasts([...toasts, {...toast, id: getId()}])
    }
  }))

  return loaded ? ReactDOM.createPortal(
  <div className={styles.toastContainer}>{toasts.map((toast) => (
    <Toast 
    key={toast.id} 
    onClose={() => removeToast(toast.id)}
    mode={toast.mode}
    title={toast.title}
    subTitle={toast.subTitle} />
  ))}</div>,
  document.getElementById(portalId)) : <></>
})

export default ToastPortal