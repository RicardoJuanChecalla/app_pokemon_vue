import pokemonApi from '../api/pokemonApi'

const getPokemons = () => {
    const pokemonArr = Array.from(Array(650))
    return pokemonArr.map(( _, index) => index + 1 )
}

const getPokemonOption = async () => {
    const mixedPokemons = getPokemons().sort(()=>Math.random()- 0.5 )
    const pokemons = await getPokemonNames(mixedPokemons.slice(0,4))
    return pokemons
}

const getPokemonNames = async ([a,b,c,d] = []) => {
    // const resp = await pokemonApi.get(`1`)
    // console.log(resp.data.name)

    const arrPromises = [
        pokemonApi.get(`${a}`),
        pokemonApi.get(`${b}`),
        pokemonApi.get(`${c}`),
        pokemonApi.get(`${d}`),
    ]
    const [r1, r2, r3, r4] = await Promise.all(arrPromises)
    return [
        { name: r1.data.name, id: r1.data.id},
        { name: r2.data.name, id: r2.data.id},
        { name: r3.data.name, id: r3.data.id},
        { name: r4.data.name, id: r4.data.id},
    ]
}

export default getPokemonOption 