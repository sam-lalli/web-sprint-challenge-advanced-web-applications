import axiosWithAuth from "../utils/axiosWithAuth"

 export const fetchColors = () => {
    return axiosWithAuth()
    .get('/colors')
    .then(res => {
        return res
    })
}
