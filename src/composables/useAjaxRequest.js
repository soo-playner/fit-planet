import { ref } from "vue";
import axios from "axios";

export default function useAjaxRequest() {
    const resData = ref(null);
    const postData = async (apiName, body) => {
        let apiFullName = "" + apiName;
        try {
            const res = await axios.post(apiFullName, body, { header: { loginsession: this.$cookies.get("loginsession") } });
            const data = res.data;
            this.$cookies.set("accessToken", data.token, 3);
        } catch (err) {
            console.log(err);
        }
    };

    return { postData, resData };
}
