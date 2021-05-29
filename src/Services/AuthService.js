import {fakeAuth} from "../helpers/fakeAuth";

class AuthService{
    async authenticate(personalId, password){
        return await fakeAuth({personalId, password})
    }

    async attemptLogin({personalId, password}) {
        return await this.authenticate(personalId, password)
    }
}

const authService = new AuthService()
export default authService;