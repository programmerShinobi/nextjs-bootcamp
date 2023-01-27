import config from '../Config/config'
import axios from 'axios'

const apiUsers = {
    getUser: async () => {
        let option = {
            url: 'http://localhost:3005/users',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        try {
            let result = await axios(option)
            return result

        } catch (error) {
            return error
        }
    }
}

export default apiUsers
