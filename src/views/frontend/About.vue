<template>
  <div id="about" class="">
    <div class="d-flex container justify-content-center align-items-center">
      <div id="brand_story" class="w-50  my-5 text-light">
        <h1>品牌故事</h1>
        <p>
          <span class="h2">熊樂</span>
          一個關於家與夢想的故事<br>
          提供咖啡、鬆餅、早午餐、飯料理、帕尼尼、三明治<br>
          提供免費wi-fi上網、舒適溫馨的用餐環境<br>
          提供包場服務，並有投影機音響設備<br>
          歡迎來電洽詢<br>
        </p>
      </div>
    <iframe  class="w-50" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.6315530281695!2d120.67392241536717!3d24.114449280687534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693cfb5ffaf55f%3A0x73a3386e2b3a89fe!2z54aK5qiC5ZKW5ZWh5bua5oi_!5e0!3m2!1szh-TW!2stw!4v1618755563516!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
  #about{
    background-color: rgba(0, 0, 0, .6);
    background-blend-mode: multiply;
    background-image:  url(~@/assets/bg-flower.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 5rem 0;
  }
</style>
