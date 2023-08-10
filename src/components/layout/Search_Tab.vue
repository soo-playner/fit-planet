<script>
    export default {
        name : 'Search_Tab',
        data(){
            return {
                num : 1
            }
        },
        methods : {
            tab(idx){
                this.num = idx;
            }
        },
        props : {
            tabs : Array,
            targetTab : String
        }
    }
</script>

<template>
    <li 
        v-for="(tabItem, idx) in tabs" 
        :key="idx"
        :class="{ active : tabItem == targetTab }"
        @click="$emit('tabChange', tabItem)">
            <button >{{ tabItem }}</button>
    </li>
</template>