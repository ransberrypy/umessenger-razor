import bcrypt from 'bcryptjs'

const users = [
    {
        email:"Ransberrypy@gmail.com",
        password: bcrypt.hashSync('123456',10)
    },
    {
        email:"regiphipps@gmail.com",
        password: bcrypt.hashSync('123456',10)
    },
]

export default users