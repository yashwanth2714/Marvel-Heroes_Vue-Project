<template>
    <div>
        <div v-if="Characters.length" class="card-deck1">
            <div  v-for="(character,index) in Characters" :key="index" class="header-gradient">
                <b-card  text-variant="white" class="text-center myCard" :header="character.name" >
                    <p v-if="character.description !== ''">{{shortDescription(character.description)}}</p>
                    <p v-else class="flash">Sorry! No Description available for this superhero now.. </p> 
                    <p class="card-text" v-html="count(character.id)"></p>
                    <router-link :to="`character/${character.id}`">View More</router-link>
                </b-card>
            </div>
        </div>
        <img v-else :src="loading" alt="...loading">
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    methods: {
        ...mapActions([
            'fetchCharacters'
        ]),
        getData() {
            this.fetchCharacters();
        },
        shortDescription(desc) {
            return `${desc.substring(0,50)}  .......` ;
        }
    },
    computed: {
        ...mapState([
            'Characters',
            'loading'
        ]),
        count() {
            return id => this.$store.getters.availabilityCount(id);
        }
    },
    mounted() {
        this.fetchCharacters();
    }
}
</script>


<style scoped>

    .card-header {
         background-color: #343a40;
         font-weight: 700
    }
    .card-deck1 {
        margin: 0 auto;
        justify-content: center;
        display: flex;
        flex-flow: row wrap;
    }
    .card-deck1 .card {
        flex: 1 0 0%;
        margin-right: none !important; 
        margin-bottom: 12px;
        margin-left: none !important;
        background: #100e17;
        border-bottom-right-radius: 100px;
    }
    .header-gradient {
        background-image: linear-gradient(90deg,#ff8a00,#e52e71);
        margin: 10px 10px;
    }
    a {
        color: #72e0d1;
        white-space: nowrap;
        border: 3px solid #28242f;
        border-radius: 2rem;
        padding: .2rem .85rem .25rem;
        font-family: Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif;
        font-style: normal;
        font-weight: 700;
    }
    .flash {
        animation: blinker 2s linear infinite;
    }
    @keyframes blinker {
        50% {
            opacity: 0;
        }
    }
</style>

