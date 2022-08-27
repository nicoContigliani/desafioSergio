import React from 'react'

const Table = (props) => {
    const data = props.user.array
    console.log("🚀 ~ file: Table.jsx ~ line 5 ~ Table ~ data", data)
    
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nopmbre</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Carrera</th>
                        <th scope="col">Hobbie</th>
                        {/* <th scope="col">Acción</th> */}
                    </tr>
                </thead>
                <tbody>
                 {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.nombre}</td>
                        <td>{item.edad}</td>
                        <td>{item.carrera}</td>
                        <td>{item.hobbie}</td>
                        {/* <td><tr>
                            <td className='btn btn-primary'>hola</td>
                            <td className='btn btn-dark'>otro</td>
                            </tr></td> */}
                    </tr>
))} 
                   
                </tbody>
            </table>
        </div>
    )
}

export default Table