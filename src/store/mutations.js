export default {
    Set_Characters: (state,charactersData) => {
        state.Characters = charactersData
    },
    Set_Loading_Status: (state,loadingStatus) => {
        state.loading = loadingStatus
    },
    Set_Comics: (state,comicsData) => {
        state.Comics = comicsData
    }
}