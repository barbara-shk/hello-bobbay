
<template>
<div v-for="(post, index) in blogposts" :key="index" class="row">
  <div class="w3-container w3-card w3-padding" style="margin-top:200px;" >
      <h2>{{post.name}}</h2>
      <h5>{{post.snippet}}</h5>
      <img v-bind:src="post.blogImg" class="blogimg">
      <p class="postcontent">{{post.content}}</p>
  </div>

</div>
</template>

<script>
export default {
    name:"Blog",
    data(){
        return{
          blogposts: [
                {
                    name: "Fjord",
                    snippet: "I am not surprised.",
                    blogImg: require("../assets/travel-blog-cropped.jpg"),
                    content: "Of course I know her. On the first night I was at the theatre, the horrid old Jew came round to the box after the performance was over and offered to take me behind the scenes and introduce me to her. I was furious with him, and told him that Juliet had been dead for hundreds of years and that her body was lying in a marble tomb in Verona. I think, from his blank look of amazement, that he was under the impression that I had taken too much champagne, or something.",
                    attributes: {
                        type:"candle",
                        for:"spring",
                    }
                },
                {
                    name: "Skög",
                    snippet: 5,
                    blogImg: require("../assets/travel-blog-2-cropped.jpg"),
                    content: "Here I proceeded to examine its contents. The powders were neatly enough made up, but not with the nicety of the dispensing chemist; so that it was plain they were of Jekyll’s private manufacture: and when I opened one of the wrappers I found what seemed to me a simple crystalline salt of a white colour. The phial, to which I next turned my attention, might have been about half full of a blood-red liquor, which was highly pungent to the sense of smell and seemed to me to contain phosphorus and some volatile ether. At the other ingredients I could make no guess. The book was an ordinary version book and contained little but a series of dates. These covered a period of many years, but I observed that the entries ceased nearly a year ago and quite abruptly. Here and there a brief remark was appended to a date, usually no more than a single word: “double” occurring perhaps six times in a total of several hundred entries; and once very early in the list and followed by several marks of exclamation, “total failure!!!” All this, though it whetted my curiosity, told me little that was definite. Here were a phial of some salt, and the record of a series of experiments that had led (like too many of Jekyll’s investigations) to no end of practical usefulness. How could the presence of these articles in my house affect either the honour, the sanity, or the life of my flighty colleague? If his messenger could go to one place, why could he not go to another? And even granting some impediment, why was this gentleman to be received by me in secret? The more I reflected the more convinced I grew that I was dealing with a case of cerebral disease; and though I dismissed my servants to bed, I loaded an old revolver, that I might be found in some posture of self-defence.",
                    attributes: {
                        type:"candle",
                        for:"autumn",
                    }
                },
                {
                    name: "Hygge",
                    snippet: 15,
                    blogImg: require("../assets/travel-blog-cropped.jpg"),
                    content: 25,
                    attributes: {
                        type: "candle",
                        for: "winter",
                    }
                }
            ],
        }
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
  /* background-image: url("../assets/travel-blog-cropped.jpg"); */
  background-size: cover;
  background-position: center;
  width: 50vw;
  padding: 20px;
  margin: auto;
}

/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 20px;
  max-width:65vw;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.postcontent{
  margin-left:10%;
  margin-right:10%;
  margin-bottom:5em;
}
      body, h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', Helvetica, Arial, sans-serif !important; 
}
h2{
  font-weight: 600;
}
</style>