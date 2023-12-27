import axios from 'axios';

export default {
    execute: (port) => {
        axios.post("http://localhost:" + port + "/v1/seeds");
    }
}
