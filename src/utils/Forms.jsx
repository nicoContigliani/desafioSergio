import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Resultante from './Resultante';

const Forms = () => {
  const [numeros, setNumero] = useState([1,2,3,4,5,6])
  const [dataUser, setDataUser] = useState({
    nombre: "Nico",
    edad: 34,
    carrera: "analisis de sistemas",
    hobbie: "desarrollo"
  })
  const [resultante, setResultante] = useState([
    // {
    //   nombre: "Nico",
    //   edad: 34,
    //   carrera: "analisis de sistemas",
    //   hobbie: "desarrollo"
    // }
  ])


  const changeData = (e) => {
    e.preventDefault()
    
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value
    }
    
    )
    
    console.log(dataUser,"??????????????")
  }
  const agregar = (e) => {
    e.preventDefault()
     setResultante([
      ...resultante,
      dataUser
     ])
  }

   console.log("🚀 ~ file: Forms.jsx ~ line 18 ~ Forms ~ resultante", resultante)


  return (
    <div>
      <h3>Formulario de creación</h3>
      <Form onSubmit={agregar}>

        <Form.Group className="mb-3" >
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese nombre" name="nombre" onChange={changeData}
          // defaultValue={dataUser.nombre}
          />

        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Edad</Form.Label>
          <Form.Control type="number" placeholder="Ingrese Edad" name="edad" onChange={changeData}
          // defaultValue={dataUser.edad}
          />

        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Carrera</Form.Label>
          <Form.Control type="text" placeholder="Carrera" name="carrera" onChange={changeData}
          //  defaultValue={dataUser.carrera}
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Hobbie</Form.Label>
          <Form.Control type="text" placeholder="Hobbie" name="hobbie" onChange={changeData}
          // defaultValue={dataUser.hobbie}
          />

        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>


           

      {
        (resultante.length==0)?(""):( <Resultante resultante={resultante}/>)
      }

    </div>
  )
}

export default Forms