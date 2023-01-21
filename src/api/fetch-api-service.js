import axios from "axios"
import config from "../config"

async function getTopics() {
    const url = config.API_ENDPOINT
    
    try {
        const res = await axios.get(url)
        return res
    }
    catch (error) {
        console.error()
    }
}

export default getTopics