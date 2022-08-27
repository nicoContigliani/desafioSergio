import React from 'react'

const Resultante = (props) => {
   
    const res = props.resultante
    console.log("🚀 ~ file: Resultante.jsx ~ line 6 ~ Resultante ~ res", res)

  return (
    <div>

<h3>Resultante</h3>

              <ul>
                {
                    res.map((item) => 
                        <li key={item.nombre}>
                            {item.nombre}-{item.edad}-{item.carrera}-{item.hobbie}
                        </li>
                    )
                }
            </ul> 
    </div>
  )
}

export default Resultante