import axios from 'axios'

const instance = axios.create({
    baseURL: ' https://script.google.com/macros/s/AKfycby-TJmFFUFTfiNUbMoSIZx8LVtiskQ-bUt4xO6hmrU0XQpJS8IPUBow/'
})

export function postAPI() {
    instance.post('/exec')
}