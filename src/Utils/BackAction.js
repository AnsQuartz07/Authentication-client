import axios from 'axios'; // Import Axios

const BackAction = {
    uploadFile: async (formData) => {
        try {
            const response = await axios.post('http://localhost:9000/api/v1/drive/upload', formData); // Use Axios for POST request
            console.log({response})
            if(response.data.status === 'Success') {
                return response.data.data;
            }
            else {
                console.log('[Error]', response.data.message)
                return 'anshukumar/g20';
            }
        }
        catch (e) {
            console.log('[uploadFile]', e);
            throw new Error(e);
        }
    },
    downloadUrl: async (url) => {
        try {
            const response = await axios.get(`http://localhost:9000/api/v1/drive/download/`);

        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    },
    register: async (payload) => {
        try {
            const response = await axios.post(`http://localhost:9000/api/user/register/`, payload);
            return true;
        }
        catch (e) {
            console.log('[register API]', e);
            return false;
        }
    },
    login: async (payload) => {
        try {
            const response = await axios.post(`http://localhost:9000/api/user/login/`, payload);
            return true;
        }
        catch (e) {
            console.log('[register API]', e);
            return false;
        }
    },
    verify: async (payload) => {
        try {
            const response = await axios.post(`http://localhost:9000/api/user/verify/`, payload);
            return true;
        }
        catch (e) {
            console.log('[register API]', e);
            return false;
        }
    },
}


export default BackAction;
