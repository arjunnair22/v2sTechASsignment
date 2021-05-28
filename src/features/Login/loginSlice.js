import {createSlice} from "@reduxjs/toolkit";
import {validate} from "../../helpers/validations";
import UserService from "../../Services/UserService";
import {isNotBlank} from "../../helpers/utils";

const personalIdIsNotBlank = personalId => isNotBlank(personalId) ? true : 'Email or username cannot be blank'
const passwordIdIsNotBlank = password => isNotBlank(password) ? true : 'Password cannot be blank'

const loginValidations = {
    personalId: [personalIdIsNotBlank],
    password: [passwordIdIsNotBlank]
}

function loginUser(isLoggedIn, state, validationMessage) {
    if (isLoggedIn) UserService.login({user: state.personalId});
    state.personalId = '';
    state.password = '';
    state.isLoggedIn = isLoggedIn;
    state.validationMessage = validationMessage;
}

export const loginSlice = createSlice({
    name:'login',
    initialState:{
        personalId:UserService.getUserName(),
        password:'',
        isLoggedIn:UserService.isLoggedIn(),
        validationMessage:[]
    },
    reducers:{
        updateValue: (state, action) => {
            state[action.payload.property] = action.payload['propertyValue'];
        },
        login:state=>{
            const [isLoggedIn, validationMessage] = validate(state, loginValidations);
            loginUser(isLoggedIn, state, validationMessage);
        },
        logout:state=>{
          UserService.logout()
          state.isLoggedIn = false
        }
    }
})

export const {updateValue, login, logout} = loginSlice.actions
export default loginSlice.reducer