<template>
    <div class="pokemon-container">
        <img :src="imgSrc"
        class="hidden-pokemon"
        alt="pokemon">
        <img v-if="showPokemon" :src="imgSrc"
        class="fade-in"
        alt="pokemon">
    </div>
</template>

<script>
export default {
    props: {
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        },
        pokemonId: {
            type: Number,
            required: true,
            default: 1,
            validator(value){
                return value > 0
            }
        }
    },
    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }
}
</script>

<style scoped>
    .pokemon-container {
        height: 200px;
    }
    img {
        height: 200px;
        position: absolute;
        right: 32%;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }
    .hidden-pokemon {
        filter: brightness(0);
    }
</style>