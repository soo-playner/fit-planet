import { ref } from "vue";

export default function useUploadFile(type, size, length) {
    const fileData = ref([]);

    const uploadFile = (e) => {
        let copy = [...fileData.value];
        for (let i = 0; i < e.target.files.length; i++) {
            const file = e.target.files[i];
            const url = URL.createObjectURL(file);
            if (type && !type.includes(file.type.split("/")[1])) {
                return alert(`${type.join(",")} 형식의 파일만 업로드 할 수 있습니다.`);
            }
            if (size && file.size > size * 1024000) {
                return alert(`하나의 파일당 ${size}MB까지 첨부 할 수 있습니다.`);
            }
            if (length && copy.length >= 3) {
                return alert(`파일은 최대 ${length}개까지 첨부 할 수 있습니다.`);
            }
            if (length === 1) {
                return (fileData.value = [{ file, url }]);
            }
            copy.push({ file, url });
        }
        fileData.value = copy;
    };

    const deleteFile = (e) => {
        let copy = [...fileData.value];
        const deleteIndex = copy.findIndex((el) => el.url == e.target.dataset.url);
        copy.splice(deleteIndex, 1);
        fileData.value = copy;
    };

    return { fileData, uploadFile, deleteFile };
}
