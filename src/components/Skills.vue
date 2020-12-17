
<template>
<div class="content-container">
    <h1 style="margin-top:3em;">
        Skills
    </h1>
        <!-- content -->
        <div class="w3-container w3-center" style="max-width:100vw">
            <h1>{{ title }}</h1>
            <!-- skills -->
            <div class="w3-row w3-padding-32">

                <!-- single skill -->
                <div v-for="(skill, index) in skills" :key="index" class="w3-col l2 m12 w3-padding">
                    <img :src="skill.image"/>
                    <div class="w3-container w3-center">
                        <h3>{{ skill.name }}</h3>
                        <h4>{{ skill.description }}</h4>
                        <p><strong>{{ skill.tools }}</strong></p>
                        <p>
                            <span v-for="(value, name) in skill.tags" :key="name"><strong>{{ name }}:</strong>{{ value }} </span>
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Skills",
    data(){
        return{
skills: [{},
                {
                    name: "Front-End development",
                    tools: "HTML, CSS, Javascript",
                    image: require("../assets/skills-webdev.svg"),
                    description: "I do this and that",
                    attributes: {
                        type:"candle",
                        for:"spring",
                    }
                },
                {
                    name: "Webdesign",
                    tools: "Figma, Adobe",
                    image: require("../assets/skills-webdesign.svg"),
                    description: "I do this and that",
                    attributes: {
                        type:"candle",
                        for:"autumn",
                    }
                },
                {
                    name: "Ideas",
                    tools: "UX research",
                    image: require("../assets/skills-idea.svg"),
                    description: "I do this and that",
                    attributes: {
                        type:"candle",
                        for:"autumn",
                    }
                },
                {
                    name: "Vision",
                    tools: "Trello, Notion, Evernote",
                    image: require("../assets/skills-vision.svg"),
                    description: "I do this and that",
                    attributes: {
                        type: "candle",
                        for: "winter",
                    }
                },
                {}
            ],
        }
    }
}
</script>

<style scoped>
img{
    width:100%;
}
.content-container{
    height: 65vh;
}
</style>