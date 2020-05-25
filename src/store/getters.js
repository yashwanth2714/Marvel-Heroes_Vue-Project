export default {
    getCharacterById: (state) => (id) => {
        return state.Characters.filter(character => character.id == id)
    },
    availabilityCount: (state,getters) => (id) => {
        let character = getters.getCharacterById(id)[0];
        let comicVal = character.comics.available;
        let seriesVal = character.series.available;
        let storiesVal = character.stories.available;
        let finalStr = `<div class="items">
                            <div> Comics:  ${comicVal} </div>
                            <div> Series:  ${seriesVal} </div>
                            <div> Stories: ${storiesVal} </div>
                        </div>`
        return finalStr;
    },
    getComics: (state,getters) => (id) => {
        let character = getters.getCharacterById(id)[0];
        return character.comics;
    },
    getSeries: (state,getters) => (id) => {
        let character = getters.getCharacterById(id)[0];
        return character.series;
    },
    getStories: (state,getters) => (id) => {
        let character = getters.getCharacterById(id)[0];
        return character.stories;
    }

}