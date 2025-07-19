import {Box, Slider, Typography, Paper} from "@mui/material"
import {styled} from '@mui/system';
import {useState} from "react"

// 마크 정의: 각 마크에 실제 값을 포함하도록 변경
const marks = [
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
    {value: 6},
    {value: 6.5},
    {value: 7},
    {value: 7.5},
    {value: 8},
]

const CustomMark = styled(Paper)(({markvalue, selectedvalue}: {
    markvalue: number,
    selectedvalue: number
}) => {
    const isSelectedOrBefore = markvalue <= selectedvalue; // 현재 마크가 선택된 값 이하인지

    return {
        width: 12, // 1,2,3,4는 더 넓게
        height: 20 + markvalue * 5, // 막대 높이
        backgroundColor: isSelectedOrBefore ? 'black' : '#ccc', // 선택된 값 이하는 검은색, 나머지는 회색
        borderRadius: 2,
        // 여기에 마커의 위치를 정확히 맞추기 위한 추가 스타일링이 필요할 수 있습니다.
        // 예를 들어, transform: translateX(-50%) 등
    };
});

const RoastingLevel = () => {
    const [roastLevel, setRoastLevel] = useState<number>(7)

    return <>
        <Box sx={{width: '100%', mb: 2}}>
            <Typography
                variant="h5"
                component="h2"
                fontWeight="bold"
                sx={{mb: 1}}
            >
                로스팅 강도 선택
            </Typography>

            <Slider
                value={roastLevel}
                onChange={(_event, newValue) => setRoastLevel(newValue as number)}
                step={null}
                min={1}
                max={8}
                marks={marks.map((mark) => ({
                    ...mark,
                    label: <CustomMark markvalue={mark.value} selectedvalue={roastLevel}/>,
                }))}
                sx={{
                    // mt: 20,
                    pt: 30,
                    color: 'primary.dark',
                    height: 8,
                    '& .MuiSlider-thumb': {
                        // height: 24,
                        // width: 24,
                        backgroundColor: 'background.paper',
                        border: 1,
                        borderColor: 'primary.dark'
                    },
                    // border: 1
                }}
            />
        </Box>
    </>
}

export default RoastingLevel