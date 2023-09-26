import { ref } from "vue";
import axios from "axios";
import { serverUrl } from "@/variables/serverUrl";

export default function useAjaxRequest() {
    const resData = ref(null);
    const postData = async (apiName, body, tokenSkip) => {
        let apiFullName = serverUrl + apiName;
        try {
            const res = tokenSkip ? await axios.post(apiFullName, body) : await axios.post(apiFullName, body, { header: { loginsession: this.$cookies.get("loginsession") } });
            const data = res.data;
            this.$cookies.set("accessToken", data.token, 3);
            return res;
        } catch (err) {
            return alert(err);
        }
    };

    return { postData, resData };
}
