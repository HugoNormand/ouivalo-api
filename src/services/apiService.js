import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://script.google.com/macros/s/AKfycby-TJmFFUFTfiNUbMoSIZx8LVtiskQ-bUt4xO6hmrU0XQpJS8IPUBow/'
})

export function postAPI() {
    let post = {
        cle: "CLE-TEST-IOT",
        donnees: {
            id: this.email,
            date: JSON.stringify(this.date),
            urlRelais: this.github,
            message: this.motdoux
        }
    }
    instance.post('/exec', post, {
        headers: {
            'Content-Type': 'application / json',
        }
    })
    .then(() => console.log('Message envoyé'))
}