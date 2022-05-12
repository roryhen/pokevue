<script setup>
import Loader from "./components/Loader.vue";
</script>

<template>
  <h1 class="py-10 font-sans font-bold text-5xl text-emerald-600 text-center">PokeApp</h1>
  <nav class="flex justify-center gap-5">
    <router-link to="/"
      class="py-2 px-5 rounded-xl bg-white font-medium text-gray-500 hover:text-emerald-500 border-2 border-gray-200 hover:border-emerald-300 active:border-emerald-500">
      Search
    </router-link>
  </nav>
  <main class="py-10 grid justify-items-center">
    <router-view :key="$route.fullPath" v-slot="{ Component }">
      <template v-if="Component">
        <KeepAlive>
          <Suspense>
            <component :is="Component"></component>
            <template #fallback>
              <div class="grid place-content-center p-20">
                <Loader />
              </div>
            </template>
          </Suspense>
        </KeepAlive>
      </template>
    </router-view>
  </main>
</template>

