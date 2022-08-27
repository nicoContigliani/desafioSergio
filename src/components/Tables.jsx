import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserAction } from '../features/Redux/userDucks'
import Table from '../utils/Table'

const Tables = () => {
  //   useEffect(() => {
  //     getAllUserAction()
  // }, []);
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
  console.log(user)
  useEffect(() => {
       disparo()
  }, [])

const disparo = ()=>{
  dispatch(getAllUserAction())
}

  return (
    <div>
      <Table user={user}/>
      {/* <div className="btn btn-primary" onClick={disparo}>hola</div> */}
    </div>
  )
}

export default Tables