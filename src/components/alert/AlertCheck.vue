<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
    data: Object,
});

const isChecked = ref(false);
</script>

<template>
    <li>
        <label for="workAlert">
            <p class="f-14-700">{{ props.data.title }}</p>
            <span class="f-12-400">
                <span>{{ props.data.dsec1 }}</span>
                <span>{{ props.data.dsec2 }}</span>
            </span>
        </label>
        <div class="toggle-box" :class="{ active: isChecked }" @click="isChecked = !isChecked"><input type="checkbox" id="workAlert" name="workAlert" /><span></span></div>
    </li>
</template>
