import { ref, watch } from "vue";

export default function useValidations() {
    const form = {
        mb_id: ref(""),
        mb_password: ref(""),
        mb_password_cfm: ref(""),
    };
    const isFormValid = {
        mb_id: ref(false),
        mb_password: ref(false),
        mb_password_cfm: ref(false),
    };
    console.log(form.mb_id.value);
    const errorText = {
        //이거안됨
        mb_id: !isFormValid.mb_id.value ? "유효하지 않은 아이디입니다." : "d",
        mb_password: isFormValid.mb_password.value.length !== 0 ? "비밀번호는 영문, 숫자, 특수문자 조합 8자리 이상이어야 합니다." : "",
        mb_password_cfm: isFormValid.mb_password.value.length !== 0 ? "입력된 비밀번호와 동일하지 않습니다." : "",
    };
    const isPwdVisible = ref(false);
    const isPwdConfirmedVisible = ref(false);
    const exp = {
        mb_id: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
        mb_password: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/,
        mb_password_cfm: /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/,
    };
    watch(form.mb_id, () => {
        isFormValid.mb_id.value = exp.mb_id.test(form.mb_id.value);
    });
    watch(form.mb_password, () => {
        isFormValid.mb_password.value = exp.mb_password.test(form.mb_password.value);
        isFormValid.mb_password_cfm.value = false;
    });
    watch([form.mb_password_cfm, form.mb_password], () => {
        isFormValid.mb_password_cfm.value = form.mb_password.value === form.mb_password_cfm.value;
    });
    const nextCondition = () => {
        return Object.values(isFormValid).every((el) => {
            return el.value;
        });
    };
    const showPwd = () => {
        isPwdVisible.value = !isPwdVisible.value;
    };

    const showPwdConfirmed = () => {
        isPwdConfirmedVisible.value = !isPwdConfirmedVisible.value;
    };

    return { form, isFormValid, errorText, isPwdVisible, isPwdConfirmedVisible, nextCondition, showPwd, showPwdConfirmed };
}
