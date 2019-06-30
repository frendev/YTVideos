import axios from 'axios';

const KEY='AIzaSyAiK0I1XVA8EI5LtwiUqiZOHMxVV2DMysY'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:
    {
        part:'snippet',
        maxResults:5,
        key: KEY,
        
    }
})