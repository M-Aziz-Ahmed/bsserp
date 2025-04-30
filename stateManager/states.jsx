'use client'
import { useState } from "react"

const States = () => {
    const [alert, setAlert] = useState({
        message: "this is a Alert",
        show: true,
        type: "success", // 'success' or 'error'
    })
  return {alert, setAlert}
}

export default States