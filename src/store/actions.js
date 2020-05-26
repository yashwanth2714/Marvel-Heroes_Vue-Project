import axios from 'axios'
import { publicKey, privateKey } from '../Keys'
import md5 from 'crypto-js/md5'

let ts = Date.now();
let hashStr = ts + privateKey + publicKey;
let hashKey = md5(hashStr).toString();
let loading = require('@/assets/loading1.svg')
let params = {
    "apikey": publicKey,
    "ts": ts,
    "hash": hashKey,
};

export default {
    fetchCharacters: (context) => {
        context.commit('Set_Loading_Status',loading);
        axios
            .all(
                [
                    axios.get(`https://gateway.marvel.com/v1/public/characters`, {
                    params: params
                    }),
                    axios.get(`https://gateway.marvel.com/v1/public/comics`, {
                    params
                    })
                ]
            )
            .then(
                axios.spread((characters,comics) => {
                    context.commit('Set_Loading_Status','');
                    context.commit('Set_Characters',characters.data.data.results);
                    context.commit('Set_Comics',comics.data.data.results);
                })
            )
        .catch(err => console.log(err.message));
    }
}
