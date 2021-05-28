export const server = 'https://dummy.restapiexample.com/'
export const slugs={
    employees:'api/v1/employees'
}

export const url = server=> slug => `${server}${slug}`

export const employeeModel = {
    id:'id',
    employee_name: 'Name',
    employee_salary: 'Salary',
    employee_age:'Age',
    profile_image:'Profile Pic'
}
export const userKey = 'user'