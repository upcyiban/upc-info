import {UserData} from '../util/getYibanData'
const userData =  {
    data() {
        return {
            userData: {}
        }
    },
    created() {
        if (!UserData.haveLocalUserData()) {
            UserData.fetchUserData().then(userData => this.userData = userData)
        } else {
            this.userData = UserData.getLocalUserData()
        }
    }
}

export default userData
