<script>
    export default {
        name : 'EventNews_Tab',
        data(){
            return {
                // tabs : ['공지', '이벤트'],
                num : 1
            }
        },
        methods : {
            tab(idx){
                this.num = idx;
            }
        },
        props : {
            //data : Object,
            tabs : Array,
            targetTab : String
        }
    }
</script>

<template>
    <div class="EventNewsTab_container">
        <div class="EventNewsTab_container_inner mob-inner">
            <ul class="tab-list">
                <li 
                    v-for="(tabItem, idx) in tabs" 
                    :key="idx"
                    :class="{ active : tabItem == targetTab }"
                    @click="$emit('tabChange', tabItem)">
                        <button >{{ tabItem }}</button>
                </li>
            </ul>
        </div>
    </div>
</template>