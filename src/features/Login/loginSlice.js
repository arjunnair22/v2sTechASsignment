import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {validate} from "../../helpers/validations";
import UserService from "../../Services/UserService";
import { isNotBlank} from "../../helpers/utils";
import authService from "../../Services/AuthService";


const personalIdIsNotBlank = personalId => isNotBlank(personalId) ? true : 'Email or username cannot be blank'
const passwordIdIsNotBlank = password => isNotBlank(password) ? true : 'Password cannot be blank'

const loginValidations = {
    personalId: [personalIdIsNotBlank],
    password: [passwordIdIsNotBlank]
}

export const login=createAsyncThunk('user/authenticate', async (state)=>{
    const [isValidated, validationMessage] = validate(state, loginValidations);
    return isValidated ? await authService.attemptLogin(state) : {authenticated: false, message: validationMessage};
});


function loginUser(isLoggedIn, state, message) {
    if (isLoggedIn) UserService.login({user: state.personalId});
    state.personalId = '';
    state.password = '';
    state.isLoggedIn = isLoggedIn;
    state.validationMessage = isLoggedIn ? [] : message;
}

export const loginSlice = createSlice({
    name:'login',
    initialState:{
        personalId:UserService.getUserName(),
        password:'',
        isLoggedIn:UserService.isLoggedIn(),
        validationMessage:[],
        status:'idle'
    },
    reducers:{
        updateValue: (state, action) => {
            state[action.payload.property] = action.payload['propertyValue'];
        },
        logout:state=>{
          UserService.logout()
          state.isLoggedIn = false
        }
    },
    extraReducers:{
        [login.pending]: (state) => {
            state.status = 'loading'
        },
        [login.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            loginUser(action.payload.authenticated, state, action.payload.message);
        },
        [login.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export const {updateValue, logout} = loginSlice.actions
export default loginSlice.reducer