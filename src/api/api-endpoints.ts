export const apiEndpoints = {
    episodes() {
        return 'https://rickandmortyapi.com/api/episode'
    },
    episodesByPage(page: number) {
        return `https://rickandmortyapi.com/api/episode?page=${page}`
    },
    episode(id: number) {
        return `https://rickandmortyapi.com/api/episode/${id}`
    },
    characters() {
        return 'https://rickandmortyapi.com/api/character'
    },
    charactersByPage(page: number) {
        return `https://rickandmortyapi.com/api/character?page=${page}`
    },
    character(id: number) {
        return `https://rickandmortyapi.com/api/character/${id}`
    },
    locations() {
        return 'https://rickandmortyapi.com/api/location'
    },
    locationsByPage(page: number) {
        return `https://rickandmortyapi.com/api/location?page=${page}`
    },
    location(id: number) {
        return `https://rickandmortyapi.com/api/location/${id}`
    },
}