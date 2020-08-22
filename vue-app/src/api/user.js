const axios = require("axios")

export default {
    async addUser(user) {
        let userRetrun = {}
        userRetrun = await axios
                            .post("api/user/addUser", user)
                            .then((response) => {
                                if(response.data.status){
                                    return response.data.data
                                }else{
                                    throw(response.data.error)
                                }
                            })
        return userRetrun
    },
    getUser(){
        return {userId:12}
    },
    async login(user){
        let userRetrun = {}
        userRetrun = await axios
                            .post("api/user/login", user)
                            .then((response) => {
                                return response.data
                            })
        return userRetrun
    },
    async logout(user){
        let userRetrun = {}
        userRetrun = await axios
                            .post("api/user/logout", user)
                            .then((response) => {
                                return response.data
                            })
        return userRetrun
    },
    updateUser (user) {
        axios
        .post("api/updateUser", user)
        .then((response)=> {
            console.log(response);
        })
    }
  }