<template>
    <div ref="box" class="bg-primary w-24 h-24 p-8 flex">box</div>
    <div class="btn-group rounded-full overflow-clip mx-auto">
        <button @click="reSet" class="btn btn-secondary" id="play">reset</button>
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
        const animation = gsap.timeline({ delay: 3, repeat: 2, repeatDelay: 1 })

        const sayHello = () => {
            animation.to(box.value, { x: 0, rotation: "+=360" })
            animation.to(box.value, { x: 0, rotation: "+=360" })
            animation.to(box.value, { x: 0, rotation: "+=720" })
        }
        const raceOff = () => {
            animation.to(box.value, { opacity: 1, x: 2000 })
        }
        const driftOff = () => {
            animation.to(box.value, { opacity: 1, x: 2000, duration: 30 })
        }
        const reSet = () => {
            animation.seek(0)
            animation.to(box.value, { opacity: 1, x: 0 })
        }

        onMounted(() => {
            sayHello()
        })

        return {
            box, sayHello, raceOff, driftOff, reSet
        };
    },
};
</script>
