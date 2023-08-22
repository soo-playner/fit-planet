<script setup>
</script>

<template>
    <div class="ChangePassword_container main-layout notFooter-layout2">
        <div class="ChangePassword_container_inner mob-inner">
            <div class="ChangePassword-guide txt-box">
                <p class="f-14-400">기존에 사용했던 비밀번호를 입력해주세요</p>
                <div class="form-group">
                    <input type="text" name="mb-nick" id="mb-nick" placeholder="위즈위즈">
                </div>
            </div>
            <button class="changePassword-btn bott-btn f-16-700" @click="$router.push('/Change/Password/Confirm')">비밀번호 변경하기</button>
        </div>
    </div>
</template>