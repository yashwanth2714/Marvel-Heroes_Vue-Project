<template>
    <div id="box">
        <div id="innerBox">
            <div id="desc">
                <p>{{description}}</p>
            </div>
            <div id="list"> 
                <div id="comics">
                    <Header :title='headers[0]' />
                    <List :items="comics" />  
                </div>
                <div id="series">
                    <Header :title='headers[1]' />
                    <List :items="series" />                      
                </div>
                <div id="stories">
                    <Header :title='headers[2]' />
                    <List :items="stories" />
                </div>
            </div>
            <div id="image">
                <div>
                    <img :src="img" alt="No Preview">
                </div>
                <div id="back">
                    <router-link to="/">Back</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue'
    import List from './List.vue'

    import { mapState } from 'vuex'

    export default {
        props: ['img','comics','series','stories','description'],
        components: {
            Header,
            List
        },
        computed: {
            ...mapState([
                'headers'
            ])
        }
    }
</script>

<style scoped>
    #box {
        background-image: linear-gradient(270deg,#ff8a00,#e52e71);
        width: 96%;
        height: 700px;
        overflow: hidden;
        position: relative;
        margin: 2%;
    }
    #innerBox {
         background-color: #28242f;
         width: 100%;
         height: 660px;
         border-top-right-radius: 160px;
         border-bottom-left-radius: 160px;
         top: 20px;
         bottom: 20px;
         position: absolute;
         display: grid;
         grid-template-columns: 1fr;
         grid-template-areas: 
         "image"
         "desc"
         "list";
         /* grid-auto-rows: auto; */
         grid-row-gap: 20px;
         padding-top: 30px;
         word-wrap: break-word;
         overflow: auto;
    }
    #list {
        grid-area: list;
    }
    #image {
        grid-area: image;
        height: 100%;
    }
    #desc {
        grid-area: desc;
    }
    #back {
        padding-top: 25px;
    }
    img {
        width: 50%;
        /* height: 50%; */
        border-radius:20px;
    }
    div#innerBox::-webkit-scrollbar {
        display: none;
    }
    #series,#stories {
        padding-top: 20px;
    }
    #stories {
        padding-bottom: 45px;
    }
    #desc p {
        color: #f5d67b;
        font-weight: 600;
    }
    a {
        color: #72e0d1;
        white-space: nowrap;
        border: 3px solid white;
        border-radius: 2rem;
        margin-top: 20px;
        padding: .2rem .85rem .25rem;
        font-family: Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif;
        font-style: normal;
        font-weight: 700;
    }
    @media screen and (min-width:760px) {
        #innerBox {
        background-color: #28242f;
        width: 100%;
        height: 660px;
        border-top-right-radius: 160px;
        border-bottom-left-radius: 160px;
        top: 20px;
        bottom: 20px;
        position: absolute;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-areas: 
        "desc ."
        "list image";
        padding: 50px;
        }
        img {
            width: 70%;
            /* height: 70%; */
        }
    }
</style>
