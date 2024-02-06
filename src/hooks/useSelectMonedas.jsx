import React from 'react'
import styled from '@emotion/styled'


const Label = styled.label`
    color: #fff

`

const useSelectMonedas = (label, opciones) => {
  
    const SelectMonedas = () => (
        <>
            <Label> {label} </Label>

            <select>
                <option value='' >Seleccione</option>

                {opciones.map( op => (
                    <opcion
                        key={op.id}
                        value = {op.id}
                    >
                        {op.nombre}
                    </opcion>

                ))}


            </select>
        
        </>
    )

    return [SelectMonedas]

  
}

export default useSelectMonedas