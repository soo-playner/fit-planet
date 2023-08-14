<script>
    import Alert from '../alert/Alert.vue';

    export default {
        name : 'Header',
        components : {
            Alert,
        },
        data(){
            return {
                AlertOpen : false,
            }
        },
        methods : {
            AlertOpenFnc : function(){
                this.AlertOpen = !this.AlertOpen
            }
        }
    }
</script>

<template>
    <header class="at-header">
        <div class="at-header-inner">
            <div class="logo">
                <img src="@/assets/image/logo.png" alt="핏플래닛 로고">
            </div>
            <ul class="menu-ul">
                <li @click="AlertOpenFnc"><img src="@/assets/image/alarm.png" alt="알림"></li>
                <li><span class="search"></span></li>
                <li><img src="@/assets/image/person.png" alt="마이페이지"></li> 
            </ul> 
        </div>

        <Alert :class="{ active : AlertOpen }"/>
    </header>
</template>

