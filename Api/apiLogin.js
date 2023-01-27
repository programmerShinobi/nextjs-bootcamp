import config from '../Config/config'
import axios from 'axios'

const apiLogin = {
    login: async (userEmail, userPassword) => {
        let option = {
            url: config.apiLogin,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                userEmail: userEmail,
                userPassword: userPassword
            }
        }

        try {
            let result = await axios(option)

            return result

        } catch (error) {
            return error
        }
    }
}

export default apiLogin
