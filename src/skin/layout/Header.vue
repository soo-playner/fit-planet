<script>
    import Alert from './components/Alert';
    import Search from './components/Search';

    export default {
        name : 'Header',
        components : {
            Alert, Search
        },
        data(){
            return {
                AlertOpen : false,
                SearchOpen : false,
                visiableHeader_1 : [
                    "/", "Class", "NotClass"
                ],
                visiableHeader_2 : [
                    
                    "/place/list", "/place/detail"
                ],
            }
        },
        methods : {
            AlertOpenFnc : function(){
                this.AlertOpen = !this.AlertOpen
            },
            SearchOpenFnc : function(){
                this.SearchOpen = !this.SearchOpen
            }
        }
    }
</script>

<template>
    <header class="at-header">
        <div class="at-header-inner">
            <div class="logo">
                <img v-if="visiableHeader_1.includes($route.name)" src="@/assets/image/logo.png" alt="핏플래닛 로고">
                <p v-else-if="visiableHeader_2.includes($route.name)">발견</p>
            </div>
            <ul class="menu-ul">
                <li @click="AlertOpenFnc"><img src="@/assets/image/alarm.png" alt="알림"></li>
                <li @click="SearchOpenFnc"><span class="search"></span></li>
                <li><img src="@/assets/image/person.png" alt="마이페이지"></li> 
            </ul> 
        </div>

        <Alert :class="{ active : AlertOpen }" />
        <Search :class="{ active : SearchOpen }" />
    </header>
</template>

