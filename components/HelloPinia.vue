<template>

    <div>
        <div>🍍🍍🍍🍍{{ storeCounter.title }}🍍🍍🍍🍍</div>
        <div class="font-extrabold text-2xl">🍍🍍🍍🍍 {{ storeCounter.count }} 🍍🍍🍍🍍</div>
        <!-- storeCounter actions -->
        <div class="btn-group justify-center my-4">
            <button @click="storeCounter.decreaseCounter(2)" class="btn btn-sm ">--</button>
            <button @click="storeCounter.decrementCount" class="btn btn-sm ">-</button>
            <button @click="storeCounter.incrementCount" class="btn btn-sm">+</button>
            <button @click="storeCounter.increaseCounter(2)" class="btn btn-sm">++</button>
        </div>

        <!-- title edit -->
        <div class="form-control mb-8 gap-2">
            <label class="input-group px-16 mt-4 mx-auto ">
                <span class="bg-primary text-primary-content font-bold uppercase flex-none whitespace-nowrap">Page
                    Title</span>
                <input v-model="storeCounter.title" type="text" placeholder="New App title..."
                    class="input input-bordered flex w-full" />
            </label>
        </div>
    </div>

</template>

<script setup>
import { useCounterStore } from '../data/store'
const storeCounter = useCounterStore()
</script>