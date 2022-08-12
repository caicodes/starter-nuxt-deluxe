<template>
    <div id="hello-pinia">
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
        <!-- todos -->
        <div class="bg-base-300 flex flex-col items-start p-14 rounded-3xl">
            <div class="text-2xl font-extrabold mb-6">Todos:</div>
            <ul class="flex flex-col items-start gap-2">
                <li v-for="todo in todos" :key="todo.id">
                    {{ todo.name }} - done? {{ todo.completed }}

                    <label class="btn btn-circle swap swap-rotate">

                        <!-- this hidden checkbox controls the state -->
                        <input class="hidden" type="checkbox" v-model="todo.completed" />

                        <!-- not done icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="swap-off h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>

                        <!-- done icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="swap-on h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </label>

                    <button @click="handleDeleteTodoClick(todo.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </li>
            </ul>
            <div class="text-2xl font-extrabold mb-6 mt-10">Completed Todos:</div>
            <ul class="flex flex-col items-start gap-2">
                <li v-for="todo in completedTodos" :key="todo.id">
                    {{ todo.name }}

                    <button @click="handleDeleteTodoClick(todo.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </li>
            </ul>
        </div>

        <!-- actions -->
        <!-- add a todo -->
        <div class="form-control mb-8 gap-2">
            <label class="input-group px-16 mt-4 mx-auto ">
                <span class="bg-primary text-primary-content font-bold uppercase flex-none whitespace-nowrap">
                    TODO</span>
                <input v-model="todoInput" type="text" placeholder="Enter a New Todo"
                    class="input input-bordered flex w-full" />
            </label>
            <button :disabled="todoInput === ''" class="btn btn-accent btn-xl w-48 mx-auto mt-4 "
                @click="handleTodoInputSubmit">enter todo</button>

        </div>



        <!-- check a todo as done -->



    </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore, useTodosStore } from '../data/store'
const storeCounter = useCounterStore()
const { todos, completedTodos } = storeToRefs(useTodosStore())
const todoInput = ref('')
const todosStore = useTodosStore()

const handleTodoInputSubmit = async () => {
    console.log('yo, submit...')
    await todosStore.addTodo(todoInput.value)
    todoInput.value = ''
}

const handleDeleteTodoClick = (todoID) => {
    todosStore.deleteTodo(todoID)
}


</script>