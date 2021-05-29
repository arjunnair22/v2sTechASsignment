import {fakeUsers} from "./fakeUsers";

const authMessages = {
    true:'Login Successful',
    false:' Username or password is incorrect'
}

export async function fakeAuth(user){
    let authenticated = fakeUsers.findIndex((obj)=>{
        return obj.personalId === user.personalId && obj.password === user.password;
    })!==-1;
    return {
        authenticated,
        message:[authMessages[authenticated]]
    }
}


