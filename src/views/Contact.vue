
<template>
  <div class="w3-container w3-padding-32 w3-center" style="margin:0 auto; max-width:50%;" id="contact">
    <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
    <p>Call me !</p>
    <form action="/" target="_blank">
      <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name">
      <input class="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email">
      <input class="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject">
      <input class="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment">
      <button class="w3-button w3-black w3-section" type="submit">
        SEND MESSAGE
      </button>
    </form>
  </div>
  
</template>

<script>
export default {
    name:"Contact",
    data(){
        return{}
    }
}
</script>

<style lang="stylus" scoped>

</style>