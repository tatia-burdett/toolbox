import axios from "axios"
import config from "../config"

async function getTopics() {
    url = config.API_ENDPOINT
    
    try {
        const res = await axios.get(url)
        console.log(res)
        return res
    }
    catch (error) {
        console.error()
    }
}

export default getTopics