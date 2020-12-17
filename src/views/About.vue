
<template>
<div class="row">
  <div class="container">
    <div class="card">
      <h2>ABOUT ME</h2>
      <h5>Full-Stack Designer</h5>
      <div class="blogimg" style="height:200px;">Image</div>
      <p>Some text..</p>
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
/* Header/Blog Title */
.header {
  padding: 30px;
  font-size: 40px;
  text-align: center;
  background: white;
}


/* Fake image */
.blogimg {
  background-color: #aaa;
  width: 50%;
  padding: 20px;
  margin: auto;
}

/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
      body, h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', Helvetica, Arial, sans-serif !important; 
}
h2{
  font-weight: 600;
}
</style>