import { useEffect, useState } from "react"

export const useMount = (callback) => {
  useEffect(() => {
    callback()
  }, [])
}

export const useDebouce = (value, delay) => {
  const [ debouceValue, setDebouceValue ] = useState(value) 
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouceValue(value)
    }, delay);
    return () => { clearTimeout(timer) };
  }, [value, delay])
  return debouceValue;
}