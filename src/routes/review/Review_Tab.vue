<script setup></script>

<template>
    <ul class="filter-scroll">
        <li>거리순<span class="arrow"></span></li>
        <li>마이후기</li>
        <li><img src="@/assets/image/location.png" alt="" />서울시 강남구</li>
        <li>모든 지역</li>
        <li>관심 지역 +</li>
    </ul>
    <router-link to="/" class="review-induce">
        <!-- 
        후기를 모두 작성했다면,
        후기를 모두 작성했어요! 텍스트 노출 
    -->
        <p class="f-16-700">아직 작성하지 않은 후기 <span>2</span>건</p>
        <span class="arrow"></span>
    </router-link>
</template>
