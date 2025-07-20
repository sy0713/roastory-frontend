import {Box, Paper, Slider, Stack, Typography} from "@mui/material"
import {useState, useEffect} from "react"

const actualRoastLevels = [
    1, 2, 3, 4, 5, 6,
    6.5, 7, 7.5, 8
];

const mapSliderValueToRoastLevel = (sliderValue: number) => actualRoastLevels[sliderValue]

const mapRoastLevelToSliderValue = (roastLevel: number) => actualRoastLevels.indexOf(roastLevel)

const RoastingLevel = () => {
    const [sliderValue, setSliderValue] = useState<number>(mapRoastLevelToSliderValue(7))
    const selectedRoastLevel = mapSliderValueToRoastLevel(sliderValue)

    useEffect(() => {
        console.log(`선택된 로스팅 강도: ${selectedRoastLevel} (슬라이더 값: ${sliderValue})`)
    }, [selectedRoastLevel, sliderValue]);

    const handleSliderChange = (_event: Event, newValue: number) => {
        setSliderValue(newValue)
    }

    const marks = actualRoastLevels.map((level, index) => ({
        value: index,
        label: (
            <Stack>
                <Paper elevation={0}
                       sx={{
                           width: 25,
                           height: 25 + level * 5,
                           backgroundColor: level <= selectedRoastLevel ? 'black' : 'primary.light',
                           borderRadius: '5px 5px 0 0',
                           mb: 0.5 // 마크와 레이블 사이의 간격
                       }}/>
                <Typography variant="caption" sx={{textAlign: 'center'}}>
                    {level}
                </Typography>
            </Stack>
        )
    }))

    const markLabelStyles = marks.reduce((styles, mark, index) => {

        // CustomMark 높이 + Typography 높이(약 16px) + 여백(10px)
        const topOffset = (25 + mark.value * 5) + 16 + 10

        styles[`& .MuiSlider-markLabel[data-index="${index}"]`] = {
            top: `-${topOffset}px`,
        }

        return styles
    }, {} as Record<string, any>)

    return <>
        <Box sx={{width: '100%', mb: 4}}>
            <Typography
                variant="h5"
                component="h2"
                fontWeight="bold"
                sx={{mb: 1}}
            >
                로스팅 강도 선택
            </Typography>

            <Typography variant="body2" sx={{
                color: 'info.main',
                textAlign: 'center',
                mb: 4
            }}>
                ⭐ 레벨 7이 가장 인기 있는 로스팅 강도입니다
            </Typography>

            <Box sx={{
                pt: 10, //슬라이더 위 mark 공간
                px: 2,
                mb: 2
            }}>
                <Slider
                    value={sliderValue}
                    onChange={handleSliderChange}
                    step={1}
                    min={0}
                    max={9}
                    marks={marks}
                    sx={{
                        color: 'black',
                        height: 8,
                        mb: 0,
                        '& .MuiSlider-thumb': {
                            backgroundColor: 'background.paper',
                            border: 1,
                            borderColor: 'primary.dark'
                        },
                        ...markLabelStyles
                    }}
                />
                <Stack direction={"row"} justifyContent="space-between">
                    <Typography variant="caption" sx={{color: 'text.secondary'}}>
                        라이트 로스트
                    </Typography>
                    <Typography variant="caption" sx={{color: 'text.secondary'}}>
                        미디엄 로스트
                    </Typography>
                    <Typography variant="caption" sx={{color: 'text.secondary'}}>
                        다크 로스트
                    </Typography>
                </Stack>
            </Box>

            <Typography variant="h6">
                선택된 강도: {selectedRoastLevel}
            </Typography>

            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                {selectedRoastLevel <= 3 && "라이트 로스트는 부드러운 산미와 섬세한 향을 특징으로 합니다."}
                {selectedRoastLevel > 3 && selectedRoastLevel <= 7 && "미디엄 로스트: 균형 잡힌 맛과 향을 제공하며, 대부분의 사람들이 선호합니다."}
                {selectedRoastLevel > 7 && "다크 로스트는 진한 바디감과 쌉쌀한 맛이 특징입니다."}
            </Typography>
        </Box>
    </>
}

export default RoastingLevel
