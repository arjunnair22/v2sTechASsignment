import {userKey} from "../helpers/constants";

const localCache = {}
export default class UserService{
    static login=(user)=>{
        localCache[userKey] = user
        localStorage.setItem(userKey,JSON.stringify(user))
    }

    static isLoggedIn=()=>{
        return this.getUser() != null;
    }

    static getUserName=()=>{
        let userObj = this.getUser() || {}
        console.log(userObj)
        return userObj.user || '';
    }

    static getUser=()=>{
        try{
            return localCache[userKey]==null ? JSON.parse(localStorage.getItem(userKey)) :localCache[userKey];
        }
        catch (e){
            return null
        }
    }

    static logout=()=>{
        localCache[userKey] = null
        localStorage.removeItem(userKey)
    }
}