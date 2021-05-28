import {validate} from "../validations";
import {isNotBlank} from "../utils";

const personalIdIsNotBlank = personalId => isNotBlank(personalId) ? true : 'email or username cannot be blank'
const passwordIdIsNotBlank = password => isNotBlank(password) ? true : 'Password cannot be blank'

const valMessages = [
    'email or username cannot be blank',
    'Password cannot be blank'
]

const loginValidations = {
    id: [personalIdIsNotBlank],
    password: [passwordIdIsNotBlank]
}


test('gives validation errors for id and password',()=>{
    const objToValidate = {
        id:'',
        password: ''
    }
    const result = validate(objToValidate, loginValidations)
   expect(result[1]).toHaveLength(2)
    expect(result[1]).toContain(valMessages[0])
    expect(result[1]).toContain(valMessages[1])
});


test('does not gives validation errors for id and password',()=>{
    const objToValidate = {
        id:'A',
        password: 'A'
    }
    const result = validate(objToValidate, loginValidations)
    expect(result[1]).toHaveLength(0)
});

test('gives validation errors for id alone',()=>{
    const objToValidate = {
        id:'',
        password: 'A'
    }
    const result = validate(objToValidate, loginValidations)
    expect(result[1]).toHaveLength(1)
    expect(result[1]).toContain(valMessages[0])
});

test('gives validation errors for password alone',()=>{
    const objToValidate = {
        id:'A',
        password: ''
    }
    const result = validate(objToValidate, loginValidations)
    expect(result[1]).toHaveLength(1)
    expect(result[1]).toContain(valMessages[1])
});