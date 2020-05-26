<template>
    <div id="itemsBox">
        <Items :img="image(character.thumbnail)" :comics="comics" :series="series" :stories="stories" :description="character.description" :name="character.name"/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import Items from './Items.vue'

export default {
    data() {
        return {
        }
    },
    components: {
        Items
    },
    methods: {
        image(thumbnail) {
            let size = "portrait_uncanny";
            let extension = thumbnail.extension;
            let path = thumbnail.path;
            let url = `${path}/${size}.${extension}`;
            return url;
        },
        makeToast() {
        this.$bvToast.toast(`Click & Scroll inside the hero box to see the full list`, {
          title: 'Notification',
          autoHideDelay: 3000,
          toaster:  'b-toaster-top-right'
        })
      }
    },
    computed: {
        character() {
            return this.$store.getters.getCharacterById(this.$route.params.id)[0];
        },
        comics() {
            let items =  this.$store.getters.getComics(this.$route.params.id).items;
            return items.length > 0 ? items : [{resourceURI: "", name: "No Data"}];
        },
        series() {
            let series = this.$store.getters.getSeries(this.$route.params.id).items;
            return series.length > 0 ? series : [{resourceURI: "", name: "No Data"}];
        },
        stories() {
            let stories = this.$store.getters.getStories(this.$route.params.id).items;
            return stories.length > 0 ? stories : [{resourceURI: "", name: "No Data"}];
        }
    },
    mounted() {
        if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.makeToast();
        }
    },
}
</script>

<style scoped>
    #itemsBox {
        width: 100%;
        display: grid;
    }
</style>
