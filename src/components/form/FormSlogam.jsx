import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Button from '../button/Button'
import Input from '../input/Input'
import Label from '../label/Label'
import Span from '../span/Span'

function FormSlogam() {

  const schemaSlogam = Yup.object().shape({
    slogam: Yup.string().min(10, 'Slogam deve conter mais de 10 caracteres').required(),
    subSlogam: Yup.string().min(6, 'O Sub-slogam deve conter mais de 6 caracteres').required()
  })

  const { register, handleSubmit, reset, formState } = useForm(
    {
      mode: 'onChange',
      resolver: yupResolver(schemaSlogam),
      defaultValues: {
        slogam: '',
        subSlogam: '',
        image: [],
      }
    }
  )
  const { errors, isSubmitting } = formState

  const sub = (data) => {
    console.log(data)
    reset()
  }

  return (

    <form onSubmit={handleSubmit(sub)} >
      <Span text='Modificar o slogam e imagen de fundo'></Span>

      <Label htmlFor="slogam" text='Digite o Slogam' />
      <Input type='text' {...register("slogam")} name='slogam' placeholder='Digite seu Slogam' />
      {errors && <Label status="error" text={errors.slogam?.message} />}

      <Label htmlFor="sub-slogam" text='Digite o Sub-Slogam' />
      <Input type="text" {...register('subSlogam')} name='subSlogam' placeholder='Digite o sub-slogam' />
      {errors && <Label status="error" text={errors.subSlogam?.message} />}

      <Label htmlFor="fundo-slogam" text='Escolha uma imagen' />
      <Input type='file' {...register('image')} name='image' placeholder='Banner, imagem de fundo' />
      <Button type='submit' >Enviar</Button>
    </form>

  )
}

export { FormSlogam }
