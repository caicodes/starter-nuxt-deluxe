<template>
  <div ref="hello" class="text-4xl font-extrabold text-primary-content bg-primary px-8 py-4 rounded-full shadow-2xl">
    Hello 🌼 Daisy
    and
    GSAP 🎉</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

export default {
  name: "hello",
  setup() {
    const hello = ref();
    const animation = gsap.timeline({});
    const sayHello = () => {
      animation.to(hello.value, { rotation: "+=360" });
      animation.to(hello.value, { rotation: "+=360" });
      animation.to(hello.value, { rotation: "+=720" });
    }

    onMounted(() => {
      sayHello()
    });

    return {
      hello, sayHello
    };
  },
};
</script>
