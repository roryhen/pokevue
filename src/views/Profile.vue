<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const state = reactive({ pokemon: null });

const pokeTypes = {
  grass: 'bg-green-500',
  poison: 'bg-purple-500',
  water: 'bg-blue-500',
  fire: 'bg-red-500',
  flying: 'bg-sky-500',
  bug: 'bg-teal-500',
  normal: 'bg-yellow-800',
  electric: 'bg-yellow-500',
  ground: 'bg-amber-500',
  fairy: 'bg-pink-300',
  fighting: 'bg-orange-200',
  psychic: 'bg-fuchsia-500',
  rock: 'bg-stone-500',
  steel: 'bg-slate-500',
  ice: 'bg-cyan-300',
  dragon: 'bg-rose-300'
};

function setTypeColor(name) {
  return pokeTypes[name] || "bg-gray-400";
}

function toUpper(string) {
  return string.split(" ").map(s => s.slice(0, 1).toUpperCase() + s.slice(1)).join(" ")
}

(async () => {
  const pokeData = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.slug}`).then(r => r.json())
  state.pokemon = pokeData
})();
</script>

<template>
  <h2 class="font-extrabold text-2xl text-gray-500 mb-5">PokeProfile</h2>
  <Transition name="fade">
    <div v-if="state.pokemon">
      <article class="relative p-10 pt-16 bg-white rounded-3xl border-2 border-gray-200 max-w-xs w-full text-center">
        <div class="absolute inline-block py-2 px-3 rounded-xl font-bold font-mono text-white bg-gray-500 left-4 top-4">
          #{{
              state.pokemon.id
          }}</div>
        <div class="flex justify-center gap-5 mb-4">
          <img :src="state.pokemon.sprites.front_default" alt="front view" width="96" height="96">
          <img :src="state.pokemon.sprites.back_default" alt="back view" width="96" height="96">
        </div>
        <h3 class="inline-block py-2 px-5 mb-5 font-bold text-3xl rounded-xl text-white bg-emerald-500">{{
            toUpper(state.pokemon.name)
        }}</h3>
        <div class="flex gap-7">
          <div class="flex-grow">
            <h4 class="pb-2 mb-2 border-b-2 font-bold">Abilities</h4>
            <ul>
              <li v-for="({ ability }, i) in state.pokemon.abilities" :key="i"
                class="mb-1 font-mono text-left text-sm text-gray-400">{{ ability.name }}</li>
            </ul>
          </div>
          <div class="flex-grow">
            <h4 class="pb-2 mb-2 border-b-2 font-bold">Types</h4>
            <ul>
              <li v-for="({ type }, i) in state.pokemon.types" :key="i"
                class="mb-1 font-mono text-left text-sm text-gray-400 whitespace-nowrap">
                <span class="inline-block mr-2 h-3 w-3 align-middle rounded-full"
                  :class="setTypeColor(type.name)"></span>{{
                      type.name
                  }}
              </li>
            </ul>
          </div>
        </div>
      </article>
      <div class="mt-10 flex justify-center gap-7">
        <template v-if="+route.params.slug - 1 > 0">
          <router-link :to="`/profile/${+route.params.slug - 1}`"
            class="py-2 px-5 rounded-xl bg-white font-medium text-gray-500 hover:text-emerald-500 border-2 border-gray-200 hover:border-emerald-300 active:border-emerald-500">
            Prev</router-link>
        </template>
        <template v-if="+route.params.slug + 1 < 152">
          <router-link :to="`/profile/${+route.params.slug + 1}`"
            class="py-2 px-5 rounded-xl bg-white font-medium text-gray-500 hover:text-emerald-500 border-2 border-gray-200 hover:border-emerald-300 active:border-emerald-500">
            Next</router-link>
        </template>
      </div>
    </div>
  </Transition>
</template>

<style>
</style>