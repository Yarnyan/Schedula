import React from 'react'
import Burger from '../ui/burger'
import { useForm } from "react-hook-form"
export default function ReceptionComponents() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  return (
    <div className='Reception__container'>
      <div className="Reception__container-content">
        <div className="Reception__content-header">
          <Burger />
        </div>
      </div>
    </div>
  )
}
