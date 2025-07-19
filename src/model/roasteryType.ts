export type RoastingType = 'produce' | 'sample'
export type Bean = {
    id: string; // 원두의 고유 ID
    name: string;
}
export type SelectedBean = Bean & {
    percentage: number; // 로스팅 비율
}
export const beans: Bean[] = [
    {id: "brazil-cerrado", name: "브라질 세하도 파인컵"},
    {id: "brazil-organic", name: "브라질 유기농"},
    {id: "colombia-organic", name: "콜롬비아 유기농"},
    {id: "colombia-illusion", name: "콜롬비아 일루전 수프리모"},
    {id: "indonesia-mandheling-1", name: "인도네시아 만델링"},
    {id: "indonesia-mandheling-2", name: "인도네시아 만델링 (2)"},
    {id: "ethiopia-yirgacheffe", name: "에티오피아 예가체프 G2"},
    {id: "ethiopia-limu-g2", name: "에티오피아 리무 G2"},
    {id: "ethiopia-organic-limu", name: "에티오피아 유기농 리무 G4"},
    {id: "ethiopia-sidamo", name: "에티오피아 시다모 G2"},
    {id: "kenya-ab", name: "케냐 AB"},
    {id: "jamaica-blue-mountain", name: "자메이카 블루마운틴"},
    {id: "hawaiian-kona", name: "하와이 코나 엑스트라 팬시"},
    {id: "vietnam-robusta", name: "베트남 로부스타"},
    {id: "ethiopia-lekempti", name: "에티오피아 레켐프티 G5"},
    {id: "colombia-decaf", name: "콜롬비아 디카페인"},
    {id: "panama-geisha", name: "파나마 게이샤"},
    {id: "guatemala-castell", name: "과테말라 카스텔 (SHB)"},
    {id: "ethiopia-aricha", name: "에티오피아 아리차"}
];