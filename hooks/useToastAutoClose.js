import { useEffect, useState } from 'react';

export const useToastAutoClose = ({
  toasts,
  setToasts,
  autoClose,
  autoCloseTime,
}) => {
  const [removing, setRemoving] = useState('')

  useEffect(() => {
    if (removing) {
      setToasts(toast => toast.filter(_toast => _toast.id !== removing))
    }
  }, [removing, setToasts])

  useEffect(() => {
    if (autoClose && toasts.length) {
      const id = toasts[toasts.length - 1].id;
      setTimeout(() => setRemoving(id), autoCloseTime)
    }
  }, [toasts, autoClose, autoCloseTime])
}