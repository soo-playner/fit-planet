const EMAIL_REGEX = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
const NICKNAME_REGEX = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;

export function validateEmail(email) {
    return EMAIL_REGEX.test(email);
}

// 일반 비밀번호 유효성 검사
export function validatePassword(pwd) {
    return PASSWORD_REGEX.test(pwd);
}

// 입력된 비밀번호와 동일성 검사
// originalPwd:  입력된 비밀번호
// pwdConfirmed: 비밀번호 확인
export function comparePassword(originalPwd, pwdConfirmed) {
    return originalPwd === pwdConfirmed;
}