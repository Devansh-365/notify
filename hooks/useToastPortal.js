import { useEffect, useState } from "react"
import { getId } from "../helpers/getId"


export const useToastPortal = () => {
  const [loaded, setLoaded] = useState(false)
  const [portalId] = useState(`toast-${getId()}`)

  useEffect(() => {
    const div = document.createElement('div')
    div.id = portalId
    div.style = 'position:fixed; top: 10px; right: 10px; '
    document.getElementsByTagName('body')[0].prepend(div)

    setLoaded(true)

    return () => document.getElementsByTagName('body')[0].removeChild
  }, [portalId])

  return { loaded, portalId}
}