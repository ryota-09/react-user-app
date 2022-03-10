import axios from "axios";
import { useCallback } from "react"

export const userAuth = () => {
  const login = useCallback( async (id: string) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return ()
  },[]);
  return {login}
}
