import axios from 'axios';
import base from '../../dataDB.json'

//contantes 
const dataInitial = {
    array: [],
    nombre: "Pedro",
    edad: 20,
    carrera: "Ingenieria",
    hobbie: "Futbol",
    loading: true,
    error: null
}

//types

const GET_ALL_USERS = 'GET_ALL_USERS';
const ERROR_GET_ALL_USERS = 'ERROR_GET_ALL_USERS';

const LOG_USER_SUCCES = 'LOG_USER_SUCCES'
const LOG_USER_ERROR = 'LOG_USER_ERROR'
const REGISTER_USER_SUCCES = 'REGISTER_USER_SUCCES'
const CERRAR_SESION = 'CERRAR_SESION'

const REG_USER_SUCCES = 'REG_USER_SUCCES'
const REG_USER_ERROR = 'REG_USER_ERROR'




//reducer
export default function userReducer(state = dataInitial, action) {
    switch (action.type) {
        case GET_ALL_USERS:
            return { ...state, array: action.payload };

        case ERROR_GET_ALL_USERS:
            return { ...state }

        case LOG_USER_SUCCES:
            return { ...state, array: action.payload };
        case LOG_USER_ERROR:
            return { ...state }
        case CERRAR_SESION:
            return { ...state }

        case REG_USER_SUCCES:
            return { ...state, array: action.payload };
        case REG_USER_ERROR:
            return { ...state }
        default:
            return state;
    }
}




//acciones
export const getUserAction = (valor) => async (dispatch, getState) => {


}




export const getUserActions = (valor) => async (dispatch, getStates) => {


}

export const getAllUserAction = (valor) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_ALL_USERS,
            payload: base,

        })
    } catch (error) {
        dispatch({
            type: ERROR_GET_ALL_USERS,
            payload: "error",

        })
    }
}




