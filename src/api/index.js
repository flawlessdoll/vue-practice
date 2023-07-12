import axios from 'axios'

export const generatePasswordRequest = async ({ length, use_digits, use_specials }) => {
    const response = await axios.get('https://api.api-ninjas.com/v1/passwordgenerator', {
        headers: {
            'X-Api-Key': "KHP5c4h4uhecZODNTkoM9Q==PVXnSEJgfD0Tmsqa"
        },
        params: {
            length
        }
    })

    return response.data.random_password
}
