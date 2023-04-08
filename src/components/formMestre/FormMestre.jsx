import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Button from '../button/Button'
import Input from '../input/Input'
import Label from '../label/Label'
import Span from '../span/Span'
import Textarea from '../textarea/Textarea'



function FormMestre() {

  const schemaMestre = Yup.object().shape({
    mestre: Yup.string().min(6, 'Mestre deve conter mais de 6 caracteres').required(),
    conteudo: Yup.string().min(20, "Conteudo deve ter mais de 20 caracteres").required(),
  })

  const { register, handleSubmit, reset, formState } = useForm(
    {
      mode: 'onChange',
      resolver: yupResolver(schemaMestre),
      defaultValues: {
        mestre: '',
        conteudo: '',
        fundoSlogam: [],
      }
    }
  )
  const { errors, isSubmitting } = formState

  const sub = (data) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(sub)}>
      <Span text='Escreva seus Metres'></Span>
      <Label htmlFor="mestre" text='Mestre' />

      <Input type="text" {...register("mestre")} name='mestre' placeholder='Nome do Mestre' />
      {errors && <Label status="error" text={errors.mestre?.message} />}

      <Label htmlFor="conteudo" text='Conteudo' />

      <Textarea {...register("conteudo")} name="conteudo" placeholder='Formação, conpetencias, habilidades etc...'></Textarea>
      {errors && <Label status="error" text={errors.conteudo?.message} />}

      <Label htmlFor="imagen" text='Imagen do Mestre' />

      <Input type="file" {...register("fundoSlogam")} name='fundoSlogam' placeholder='Banner, imagem de fundo' />

      <Button type="submit">Enviar</Button>
    </form>
  )
}

export default FormMestre