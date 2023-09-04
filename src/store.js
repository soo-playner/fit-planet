import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            test:1 ,
            // 플레이스 리스트 배열
            placeInfo : [
                { 
                    placeName : '위즈짐1', 
                    placeScope : '4.3',
                    placeTotalScope : '12',
                    placeLocation : '서울 강남구 삼성로86길 11',
                    placeComment : '1운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.',
                    placeImg : require('@/assets/image/place1.png')
                },
                { 
                    placeName : '위즈짐2', 
                    placeScope : '4.3',
                    placeTotalScope : '12',
                    placeLocation : '서울 강남구 삼성로86길 11',
                    placeComment : '2운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.',
                    placeImg : require('@/assets/image/place1.png')
                },
                { 
                    placeName : '위즈짐3', 
                    placeScope : '4.3',
                    placeTotalScope : '12',
                    placeLocation : '서울 강남구 삼성로86길 11',
                    placeComment : '3운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.',
                    placeImg : require('@/assets/image/place1.png')
                },
                { 
                    placeName : '위즈짐4', 
                    placeScope : '4.3',
                    placeTotalScope : '12',
                    placeLocation : '서울 강남구 삼성로86길 11',
                    placeComment : '4운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.',
                    placeImg : require('@/assets/image/place1.png')
                },
            ],
            // 트레이너 리스트 배열
            trainerInfo : [
                {
                    trainerName : '김위즈1',
                    trainerScope : '4.3',
                    trainerTotalScope : '12',
                    trainerCenterName : '위즈짐',
                    trainerLocation : '서울 강남구 대치동',
                    trainerCommnet : '김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요'
                },
                {
                    trainerName : '김위즈2',
                    trainerScope : '4.3',
                    trainerTotalScope : '12',
                    trainerCenterName : '위즈짐',
                    trainerLocation : '서울 강남구 대치동',
                    trainerCommnet : '김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요'
                },
                {
                    trainerName : '김위즈3',
                    trainerScope : '4.3',
                    trainerTotalScope : '12',
                    trainerCenterName : '위즈짐',
                    trainerLocation : '서울 강남구 대치동',
                    trainerCommnet : '김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요'
                },
                {
                    trainerName : '김위즈4',
                    trainerScope : '4.3',
                    trainerTotalScope : '12',
                    trainerCenterName : '위즈짐',
                    trainerLocation : '서울 강남구 대치동',
                    trainerCommnet : '김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요'
                },
            ]
        }
    },
})

export default store