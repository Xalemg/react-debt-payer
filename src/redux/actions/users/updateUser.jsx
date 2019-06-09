import {
    UPDATE_USER,
    baseUrl
} from '../types';
import axios from 'axios';

export const login = ({
    image,
    name,
    id
}, token) => {
    return (dispatch) => {
        return axios({
                method: "PATCH",
                url: baseUrl + "/debts/:debtID",
                params: {
                    userId: id,
                },
                data: {
                    userId: id,
                    image,
                    name
                },
                headers: {
                    Authorization: "Bearer " + token,
                    type: "application/json",
                },
            })
            .then(response => {
                dispatch(loginSuccess(response.data))
            })
            .catch(error => {
                console.log("Error login " + error);
                throw (error);
            });
    };
};

export const loginSuccess = ({
    message,
    token,
    id,
    image,
    name
}) => {
    console.log("message " + JSON.stringify(message));

    return {
        type: UPDATE_USER,
        payload: {
            message,
            image,
            name,
            online: true,
        }
    }
}