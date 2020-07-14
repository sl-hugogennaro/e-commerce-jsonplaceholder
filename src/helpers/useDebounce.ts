import { useState, useEffect } from 'react'

export const useDebounce = <T extends unknown>(val: T, delay: number = 150): T => {
  const [dbdVal, setDbdVal] = useState(val)

  useEffect(() => {
    const handleDebounce = setTimeout(() => {
      setDbdVal(val)
    }, delay)

    return () => {
      clearTimeout(handleDebounce)
    }
  }, [val, delay])

  return dbdVal
}
