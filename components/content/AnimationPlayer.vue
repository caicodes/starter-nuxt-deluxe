<template>
    <div ref="box" class="w-24 h-24 flex ">
        <img src="@/assets/images/momocycle.png" alt="" />
    </div>
    <div class="btn-group rounded-full overflow-clip mx-auto">
        <button @click="pauseIt" class="btn btn-secondary" id="play">pause</button>
        <button @click="sayHello" class="btn btn-secondary" id="pause">say hello</button>
        <button @click="raceOff" class="btn btn-secondary" id="resume">race Off</button>
        <button @click="driftOff" class="btn btn-secondary" id="resume">drift Off</button>
    </div>
</template>

<script>

import { onMounted, ref } from "vue";
import { gsap } from "gsap";

export default {
    name: "box",
    setup() {
        const box = ref()
        const animation = gsap.timeline({ delay: 3, repeat: 3, repeatDelay: 1 })

        const sayHello = () => {
            animation.resume()
            animation.from(box.value, { x: -1000, duration: 1 })
            animation.to(box.value, { x: 2000, duration: 2 })
            animation.from(box.value, { x: -1000, duration: 2 })
            animation.to(box.value, { x: 2000, duration: 2 })
        }
        const raceOff = () => {
            animation.to(box.value, { opacity: 1, x: 2000 })
        }
        const driftOff = () => {
            animation.to(box.value, { opacity: 1, x: 2000, duration: 30 })
        }
        const pauseIt = () => {
            animation.pause()
        }

        onMounted(() => {
            sayHello()
        })

        return {
            box, sayHello, raceOff, driftOff, pauseIt
        };
    },
};
</script>
