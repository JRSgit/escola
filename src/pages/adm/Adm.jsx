import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../components/button/Button'

import Input from '../../components/input/Input'
import Label from '../../components/label/Label'
import Span from '../../components/span/Span'
import Textarea from '../../components/textarea/Textarea'

import './Adm.scss'
import { FormSlogam } from '../../components/form/FormSlogam'
import FormMestre from '../../components/formMestre/FormMestre'
import FormYear from '../../components/formYear/FormYear'

function Adm() {




  return (
    <div className='adm'>
      <div className="header-adm">
        <h1>Sua Escola</h1>
        <div className="adm-date">
          <span>Nome</span>
          <span>Foto</span>
        </div>
      </div>

      <div className="adm-mainAll">

        <div className="aside-adm">
          <div className="adm-options">
            <h3>Clique nas opoções</h3>
            <ul>
              <li>
                <Button
                  type='button'
                  onClick={() => ('')}
                >
                  Home
                </Button>
              </li>

              <li>
                <Button
                  type='button'
                  onClick={() => ('')}
                >
                  Events
                </Button>
              </li>

              <li>
                <Button
                  type='button'
                  onClick={() => ('')}
                >
                  Calendar
                </Button>
              </li>

              <li>
                <Button
                  type='button'
                  onClick={() => ('')}
                >
                  Demais
                </Button>
              </li>

            </ul>


          </div>
          <Button
            type='button'
            onClick={() => ('')}>Log out</Button>
        </div>

        <div className="main-adm">
          <h2>Edite aqui as informações do site </h2>
          {/* Home */}
          <div className="form-home">

            <FormSlogam />

            <FormMestre />

            <div className="adm-form-year">
              <FormYear />

            </div>

            <div className="bests">
              <h2>Entre os Melhores</h2>
              {/* <Form action="">
                <Label htmlFor="titulo" text='Titulo' />
                <Input type="text" name='titulo' placeholder='Escreva o Titulo dessa seção' />
                <Textarea name="content" id="" rows="7" placeholder='Uma das melhores escolas de ....' />
                <Label htmlFor="image" text='Envie Imagens para o slide' />
                <Input type="file" name="image" id="" />

                <Button type="submit">Enviar</Button>
              </Form>
            </div>

            <div className="news">
              <h2>Jornal Escolar</h2>
              <Form action="">
                <Label htmlFor="titulo" text='Titulo da Noticia' />
                <Input type="text" name='titulo' placeholder='Escreva o Titulo da noticia' />
                <Textarea name="content" id="" rows="7" placeholder='Hoje teremos uma palesta sobre...'></Textarea>
                <Label htmlFor="image" text='Envie Imagens para o slide' />
                <Input type="file" name="image" id="" />

                <Button type="submit">Enviar</Button>

              </Form> */}
            </div>
          </div>
        </div>

      </div>

    </div >
  )
}

export { Adm }