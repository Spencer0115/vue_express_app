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
    async loginCheck(){
        let userRetrun = {}
        userRetrun = await axios
                                .get("api/user/loginCheck")
                                .then((response) => {
                                    return response.data
                                })
        return userRetrun
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
    }
  }