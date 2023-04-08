import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Button from '../button/Button'
import Input from '../input/Input'
import Label from '../label/Label'


const years = [
  {
    id: 1,
    year: 1,
    seq: '',
    ter: '',
    qua: '',
    qui: '',
    sex: '',
    sab: '',
  },
  {
    id: 2,
    year: 2,
    seq: '',
    ter: '',
    qua: '',
    qui: '',
    sex: '',
    sab: '',
  },
  {
    id: 3,
    year: 3,
    seq: '',
    ter: '',
    qua: '',
    qui: '',
    sex: '',
    sab: '',
  },
  {
    id: 4,
    year: 4,
    seq: '',
    ter: '',
    qua: '',
    qui: '',
    sex: '',
    sab: '',
  },
]


function FormYear() {
  const [yearSelected, setYearSelected] = useState('')
  const [year, setYear] = useState('')
  const [seq, setSeq] = useState('')
  const [ter, setTer] = useState('')
  const [qua, setQua] = useState('')
  const [qui, setQui] = useState('')
  const [sex, setSex] = useState('')
  const [sab, setSab] = useState('')

  const selectYear = (year) => {
    setYear(year)
    setYearSelected(year + 'º Ano Selecionado')
  }

  const sub = () => {
    const data = {
      year,
      seq,
      ter,
      qua,
      qui,
      sex,
      sab
    }
    if (!data) {
      console.log("Não vou não!!!")
    }
    console.log(data)

  }

  return (
    <form >
      <h2>Clique em cada ano e insira as informações</h2>
      <div className="button-form">

        {
          years && years.map((year) => (
            <Button type='button' onclick={() => selectYear(year.year)}> {year.year.toString()}º Ano</Button>

          ))
        }

        {/* <Button type='button' onclick={() => selectYear(0)}> 0˚ Ano</Button>
        <Button type='button' onclick={() => selectYear(1)}> 1˚ Ano</Button>
        <Button type='button' onclick={() => selectYear(2)}> 2˚ Ano</Button>
        <Button type='button' onclick={() => selectYear(3)}> 3˚ Ano</Button>
        <Button type='button' onclick={() => selectYear(4)}> 4˚ Ano</Button>
        <Button type='button' onclick={() => selectYear(5)}> 5˚ Ano</Button>
        <Button type='button' onclick={() => selectYear(6)}> 6˚ Ano</Button>
        <Button type='button' onclick={() => selectYear(7)}> 7˚ Ano</Button>
        <Button type='button' onclick={() => selectYear(8)}> 8˚ Ano</Button>
        <Button type='button' onclick={() => selectYear(9)}> 9˚ Ano</Button> */}
      </div>

      <span>Isira as informações de cada dia</span>
      {
        yearSelected && <strong>{yearSelected}</strong>

      }
      <div className="input-form">
        <div className="firstDays">
          <Label htmlFor="seg" text='Segunda-feira' />
          <Input type="text" onChange={(e) => setSeq(e.target.value)} name='seq' placeholder='Havera aula, não havera, aula até ás' />

          <Label htmlFor="ter" text='Terça-feira' />
          <Input type="text" onChange={(e) => setTer(e.target.value)} name='ter' placeholder='Havera aula, não havera, aula até ás' />

          <Label htmlFor="qua" text='Quarta-feira' />
          <Input type="text" onChange={(e) => setQua(e.target.value)} name='qua' placeholder='Havera aula, não havera, aula até ás' />
        </div>

        <div className="secondaryDays">
          <Label htmlFor="qui" text='Quinta-feira' />
          <Input type="text" onChange={(e) => setQui(e.target.value)} name='qui' placeholder='Havera aula, não havera, aula até ás' />
          <Label htmlFor="sex" text='Sexta-feira' />
          <Input type="text" onChange={(e) => setSex(e.target.value)} name='sex' placeholder='Havera aula, não havera, aula até ás' />
          <Label htmlFor="sab" text='Sábabo' />
          <Input type="text" onChange={(e) => setSab(e.target.value)} name='sab' placeholder='Havera aula, não havera, aula até ás' />
        </div>
      </div>
      {!yearSelected && <Label status="error" text="Selecione um ano ou serie" />}
      {yearSelected && <Button type="button" onclick={sub} >Enviar</Button>}

    </form>
  )
}

export default FormYear