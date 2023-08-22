import { ref, watch } from "vue";

export default function useValidations(option) {
    const form = {
        mb_id: ref(""),
        mb_password: ref(""),
        mb_password_cfm: ref(""),
        mb_nickname: ref(""),
        mb_phone: ref(""),
    };
    const isFormValid = {
        mb_id: ref(false),
        mb_password: ref(false),
        mb_password_cfm: ref(false),
        mb_nickname: ref(false),
        mb_nickname_dup: ref(false),
        mb_phone: ref(false),
    };
    console.log(form.mb_id.value);
    const errorText = {
        mb_id: "유효하지 않은 아이디입니다.",
        mb_nickname: "유효하지 않은 닉네임 입니다.",
        mb_phone: "유효하지 않은 휴대폰번호 형식입니다.",
        mb_password: "비밀번호는 영문, 숫자, 특수문자 조합 8자리 이상이어야 합니다.",
        mb_password_cfm: "입력된 비밀번호와 동일하지 않습니다.",
    };
    const isPwdVisible = ref(false);
    const isPwdConfirmedVisible = ref(false);
    const exp = {
        mb_id: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
        mb_nickname: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/,
        // 2자 이상 10자 이하, 영어 또는 숫자 또는 한글로 구성
        mb_phone: /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/,
        mb_password: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/,
        mb_password_cfm: /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/,
    };
    watch(form.mb_id, (newValue) => {
        isFormValid.mb_id.value = exp.mb_id.test(newValue);
    });
    watch(form.mb_nickname, (newValue) => {
        isFormValid.mb_nickname.value = exp.mb_nickname.test(newValue);
    });
    watch(form.mb_phone, (newValue) => {
        isFormValid.mb_phone.value = exp.mb_phone.test(newValue);
    });
    watch(form.mb_password, (newValue) => {
        isFormValid.mb_password.value = exp.mb_password.test(newValue);
        isFormValid.mb_password_cfm.value = false;
    });
    watch([form.mb_password_cfm, form.mb_password], () => {
        isFormValid.mb_password_cfm.value = form.mb_password.value === form.mb_password_cfm.value;
    });
    const nextCondition = () => {
        if (!option)
            return Object.values(isFormValid).every((el) => {
                return el.value;
            });
        else
            return option.every((el) => {
                return isFormValid[el].value;
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
