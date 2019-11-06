import Axios from 'axios';

const KEY = 'AIzaSyCP5MPmPWgMTHp3j2GN8OqQpt02KdeMPQU';

export default Axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 20,
    key: KEY,
  }
})
