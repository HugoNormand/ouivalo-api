<template>
  <Header />    
  <div class="block-form">
    <main>
      <div class="cube-style"></div>
      <div class="send">
        <h1>Ouivalo, prenez-moi</h1>  
        <form action="" class="send__form">
        <input type="text" class="send__form__input" placeholder="E-mail" v-model="this.email">
        <input type="date" class="send__form__input" placeholder="Date" v-model="this.date">
        <input type="text" class="send__form__input" placeholder="Github" v-model="this.github">
        <textarea name="" id="" cols="30" rows="5" placeholder="Mot doux" v-model="this.motdoux"></textarea>
      </form>
      <button @click.prevent="postAPI">Send</button>
      </div>  
    </main>
  </div>
</template>

<script>
import Header from '../components/header.vue'  
import { postAPI } from '../services/apiService'  
export default {
    components: {
        Header
    },
    data() {
        return {
            email: '',
            date: '',
            github: '',
            motdoux: ''
        }
    },
    methods: {
        postAPI
    }
}
</script>

<style lang="scss">
@import '../assets/shared';    
  .block-form {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  main {
    width: 45%;
    height: 400px;
    border-radius: 60px;
    background-color: $secondary-color;
    font-family: $font;
    box-shadow: 1px 2px 3px black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    @media (max-width: 850px) {
        width: 60%;
    }
    @media (max-width: 630px) {
        width: 80%;
    }
    @media (max-width: 480px) {
        width: 100%;
        border-radius: 0;
    }
  }

  .cube-style {
    background-color: $tertiary-color;
    width: 230px;
    height: 100px;
    position: absolute;
    top: -10px;
    left: -130px;
    transform: rotate(-45deg);
    transition: all 0.3s;
    @media (max-width: 373px) {
        display: none;
    }
  }

  .send {
    height: 90%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 373px) {
      width: 80%;      
    }
    h1 {
        align-self: center;
        font-size: 25px;
        cursor: pointer;
    }
    &__form {
        display: flex;
        height: 260px;
        flex-direction: column;
        justify-content: space-around;
        &__input {
            font-family: $font;
            height: 30px;
            padding-left: 10px;
            border-radius: 30px;
            border: solid 1px black;
        }
        &__input:nth-child(2) {
            padding-right: 10px;
        }
        &__input::placeholder {
            font-family: $font;
        }
        &__input[type="date"] {
            font-family: $font;
        }
    }
    textarea {
        resize: none;
        font-family: $font;
        border-radius: 20px;
        border: solid 1px black;
        padding: 10px 0px 0px 10px;
    }
    button {
        cursor: pointer;
        font-family: $font;
        width: 50%;
        align-self: center;
        background-color: $secondary-color;
        border: solid 1px black;
        border-radius: 30px;
        padding: 5px;
        transition: all 0.2s ease-in-out;
    }
    button:hover {
        background-color: $tertiary-color;
        box-shadow: 1px 1px 1px black;
        transition: all 0.2s ease-in-out;
    }
  }

/* animation h1 */  

  h1::after {
    content: "please please please please please please please";
    display: block;
    width: 0%;
    height: 13px;
    overflow: hidden;
    white-space: nowrap;
    font-size: 11px;
    color: $quinte-color;
    transition: all 0.4s ease-in-out;
  }

  h1:hover::after {
    width: 100%;
    transition: all 0.4s ease-in-out;
  }

</style>