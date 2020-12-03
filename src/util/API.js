
import axios from "axios"


export default{

    getUserData: function (){
        return axios.get("https://randomuser.me/api/1.3/");

        // 
        
    },

    // getUserPhoto: function(){
    //     return axios.get("https://randomuser.me/api/?inc=picture")
    // }




};



//https://randomuser.me/