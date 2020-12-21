
<template>

  <h1 style="margin-top:150px; text-transform:uppercase; font-weight:700">She's an influencer</h1>

<div v-for="(post, index) in blogposts" :key="index" class="row">
  <div class="w3-container w3-padding w3-border" style="margin-top:50px;" >
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
                    name: "Ten perfect gifts for your boss in 2020",
                    snippet: "I am not surprised.",
                    blogImg: require("../assets/travel-blog-cropped.jpg"),
                    content: "Of course I know her. On the first night I was at the theatre, the horrid old Jew came round to the box after the performance was over and offered to take me behind the scenes and introduce me to her. I was furious with him, and told him that Juliet had been dead for hundreds of years and that her body was lying in a marble tomb in Verona. I think, from his blank look of amazement, that he was under the impression that I had taken too much champagne, or something.",
                },
                {
                    name: "My trip to Amsterdam",
                    snippet: "I went to Amsterdam and drank mint tea with honey",
                    blogImg: require("../assets/travel-blog-2-cropped.jpg"),
                    content: "Here I proceeded to examine its contents. The powders were neatly enough made up, but not with the nicety of the dispensing chemist; so that it was plain they were of Jekyll’s private manufacture: and when I opened one of the wrappers I found what seemed to me a simple crystalline salt of a white colour. The phial, to which I next turned my attention, might have been about half full of a blood-red liquor, which was highly pungent to the sense of smell and seemed to me to contain phosphorus and some volatile ether. At the other ingredients I could make no guess."
                },
                {
                    name: "Going to London",
                    snippet: "Saff Londun m8",
                    blogImg: require("../assets/travel-blog-cropped.jpg"),
                    content: "Raindrops the size of bullets thundered on the castle windows for days on end; the lake rose, the flower beds turned into muddy streams, and Hagrid's pumpkins swelled to the size of garden sheds. Oliver Wood's enthusiasm for regular training sessions, however, was not dampened, which was why Harry was to be found, late one stormy Saturday afternoon a few days before Halloween, returning to Gryffindor Tower, drenched to the skin and splattered with mud. Even aside from the rain and wind it hadn't been a happy practice session. Fred and George, who had been spying on the Slytherin team, had seen for themselves the speed of those new Nimbus Two Thousand and Ones. They reported that the Slytherin team was no more than seven greenish blurs, shooting through the air like missiles."
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
  max-width: 35vw;
  padding: 20px;
  margin: auto;
}


/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.postcontent{
  max-width: 65vw;
  margin-bottom:5em;
  margin-inline: 20%;
  text-align: left;
}
      body, h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', Helvetica, Arial, sans-serif !important; 
}
h2{
  font-weight: 600;
}
</style>