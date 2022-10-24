<template>
  <h1 v-if="!pokemon">Espere porfavor ...</h1>  
  <div v-if="pokemon">
    <h1>¿quien este pokemon?</h1>
    <pokemon-picture v-bind:pokemonId="pokemon.id" :showPokemon="showPokemon" ></pokemon-picture>
    <pokemon-option v-bind:pokemons="pokemonArr" @selection-pokemon="checkAnswer" ></pokemon-option>
    <template v-if="showAnswer">
        <h2 class="fade-in">{{message}}</h2>
        <button v-on:click="newGame">Nuevo Juego</button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOption from '@/components/PokemonOption.vue'
import getPokemonOption from '@/helpers/getPokemonOption'

export default {
  components: { PokemonPicture, PokemonOption },
  data() {
    return {
        pokemonArr: [],
        pokemon: null,
        showPokemon: false,
        showAnswer: false,
        message: ''
    }
  },
  methods: {
    async mixPokemonArray(){
        this.pokemonArr = await getPokemonOption()
        const rndInt = Math.floor(Math.random()*4)
        this.pokemon = this.pokemonArr[rndInt]
    },
    checkAnswer(pokemonId){
        this.showPokemon = true
        this.showAnswer = true
       if(this.pokemon.id === pokemonId){
        this.message = `Correcto, ${this.pokemon.name}`
       }else{
        this.message = `Opps, era ${this.pokemon.name}`
       }
    },
    newGame(){
        this.pokemonArr = [],
        this.showPokemon = false,
        this.showAnswer = false,
        this.pokemon =  null,
        this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>

<style>

</style>