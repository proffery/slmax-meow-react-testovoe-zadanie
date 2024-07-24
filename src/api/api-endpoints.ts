export const apiEndpoints = {
    episodesByPage(page: number) {
        return `https://rickandmortyapi.com/api/episode?page=${page}`
    },
    episodeById(id: number) {
        return `https://rickandmortyapi.com/api/episode/${id}`
    },
    charactersByPage(page: number) {
        return `https://rickandmortyapi.com/api/character?page=${page}`
    },
    characterById(id: number) {
        return `https://rickandmortyapi.com/api/character/${id}`
    },
    locationsByPage(page: number) {
        return `https://rickandmortyapi.com/api/location?page=${page}`
    },
    locationById(id: number) {
        return `https://rickandmortyapi.com/api/location/${id}`
    },
}