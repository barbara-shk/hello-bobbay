
<template>
<div class="row">
  <div class="container">
    <div class="card">
      <h2>ABOUT ME</h2>
      <h5>Full-Stack Designer</h5>
      <div class="blogimg" style="height:200px;"></div>
      <p>This is real, this is me. This is my vue project.</p>
    </div>
  </div>

</div>
</template>

<script>
export default {
    name:"About",
    data(){
        return{}
    }
}
</script>

<style scoped>
.header {
  padding: 30px;
  font-size: 40px;
  text-align: center;
  background: white;
}


.blogimg {
  background-image: url("../assets/tokyonight.jpg");
  background-size: cover;
  background-position: center;
  width: 50%;
  padding: 20px;
  margin: auto;
}
      body, h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', Helvetica, Arial, sans-serif !important; 
}
h2{
  font-weight: 600;
}
</style>