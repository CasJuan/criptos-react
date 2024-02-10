import {useState} from 'react'
import styled from '@emotion/styled'


const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 24px;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    padding: 14px;
    border-radius: 10px;
    font-size: 18px;
`

const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('')
  
    const SelectMonedas = () => (
        <>
            <Label> {label} </Label>

            <Select 
                value={state} 
                onChange={ e => setState(e.target.value)}
            >
                
                <option value='' >Seleccione</option>

                {opciones.map( op => (
                    <opcion
                        key={op.id}
                        value={op.id}
                    > {op.nombre} </opcion>
                ))}


            </Select>
        
        </>
    )

    return [state, SelectMonedas]

  
}

export default useSelectMonedas