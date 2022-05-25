<script setup>
import { reactive, computed } from 'vue';

const state = reactive({
  pokemon: [],
  idLookup: {},
  search: "",
  filteredPokemon: computed(() => updatePokemon())
});

function updatePokemon() {
  if (!state.search) return [];
  return state.pokemon.filter(poke => poke.name.includes(state.search.toLowerCase()));
}

function toUpper(string) {
  return string.split(" ").map(s => s.slice(0, 1).toUpperCase() + s.slice(1)).join(" ")
}

(async () => {
  const pokeData = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`).then(r => r.json())

  state.pokemon = await pokeData.results;
  state.idLookup = await pokeData.results.reduce((prev, curr, i) => {
    return { ...prev, [curr.name]: i + 1 }
  }, {});
})()
</script>

<template>
  <h2 class="mb-5 text-center text-xl italic">Let's find some pokemon!</h2>
  <form class="mb-7 w-80 flex justify-center">
    <input type="text" v-model="state.search" placeholder="Enter Pokemon Name"
      class="p-2 px-3 w-full outline-0 font-mono text-lg rounded-xl bg-gray-100 border-2 border-gray-300 focus:bg-white focus:border-emerald-400">
  </form>
  <section v-if="state.pokemon" class="w-80">
    <TransitionGroup tag="ul" mode="out-in" name="list"
      class="relative gap-4 text-3xl text-emerald-600 font-light max-h-96 overflow-hidden after:content-[''] after:bg-gradient-to-t after:from-emerald-50 after:to-transparent after:absolute after:top-0 after:left-0 after:w-full after:h-96 after:pointer-events-none">
      <li v-for="(poke) in state.filteredPokemon" :key="poke.name" class="mb-3 ml-5">
        <router-link :to="`/profile/${state.idLookup[poke.name]}`">{{ toUpper(poke.name) }}</router-link>
      </li>
    </TransitionGroup>
  </section>
</template>

<style>
</style>