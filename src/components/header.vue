<template>
  <header>
    <div class="block-title">
      <p>Je cherche une alternance, je suis sympas.</p>
    </div> 
  </header>
</template>

<script>

</script>

<style lang="scss">
@import "../assets/shared";
    header {
      width: 100%;
      height: 100px;
      background-color: $primary-color;
      .block-title {
        display: flex;
        align-items: center;    
        height: 100%;
        p {
        margin-left: 20px;
        width: 100%;
        padding: 10px;
        font-size: 28px;
        font-family: $font;
        color: $quinte-color;
        overflow: hidden;
        white-space: nowrap;
        transition: all 0.3s;
        animation: 
        typing 4s steps(25, end);
        @media (max-width: 560px) {
            font-size: 23px;
        }
        @media (max-width: 465px) {
            font-size: 19px;
            margin-left: 0px;;
        }
        @media (max-width: 373px) {
          display: none; 
        }
        }  
      }    
    }

    @keyframes typing {
    from { width: 0% }
    to { width: 100% }
    }
</style>