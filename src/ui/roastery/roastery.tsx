import {
    Box,
    Button,
    Checkbox,
    Collapse,
    FormControlLabel,
    FormGroup,
    Grid,
    Input,
    Paper,
    Slider,
    Stack,
    Tab,
    Tabs,
    Typography
} from "@mui/material";
import {MotionBox, pageTransition, pageVariants} from "../../common/motion.ts";
import {useEffect, useState} from "react";

type TabType = 'produce' | 'sample'

function RoasterySelectTab(props: {
    value: TabType,
    onChange: (_event: React.SyntheticEvent, newValue: TabType) => void
}) {
    return <Paper
        variant="outlined"
        sx={{
            width: "100%",
            display: "flex", // Paper 내부를 flex 컨테이너로 만듭니다.
            justifyContent: "center", // 내부 요소를 중앙에 정렬
            borderRadius: 2, // 둥근 모서리
            overflow: "hidden", // 내부 요소가 밖으로 나가지 않도록
            mb: 2, // 하단 마진 (아래 정보 박스와의 간격)
            p: 0.5, // 탭 내부 아이템과의 패딩 (MUI Tabs의 기본 padding을 없애기 위해)
            bgcolor: "grey.100", // 배경색을 약간 회색으로
            borderColor: "grey.300", // 테두리 색상 조정
        }}
    >
        <Tabs
            value={props.value}
            onChange={props.onChange}
            TabIndicatorProps={{
                sx: {display: "none"} // 인디케이터 숨김 (스크린샷처럼 전체 탭 스타일링)
            }}
            sx={{
                width: "100%", // Tabs 컴포넌트가 Paper의 전체 너비를 차지하도록 설정
                minHeight: "unset",
                "& .MuiTabs-flexContainer": {
                    width: "100%", // 내부 flex 컨테이너도 전체 너비 사용
                    justifyContent: "center",
                }
            }}
        >
            <Tab
                label="원두생산"
                value="produce"
                sx={{
                    maxWidth: "unset",
                    minHeight: "unset",
                    flexGrow: 1, // 탭이 남은 공간을 균등하게 차지하도록
                    py: 1,
                    fontSize: "1rem",
                    fontWeight: "medium",
                    borderRadius: 1.5, // 탭 자체에도 둥근 모서리
                    bgcolor: props.value === "produce" ? "white" : "transparent", // 현재 탭 강조
                    color: props.value === "produce" ? "black" : "grey.600", // 현재 탭 텍스트 색상
                    "&.Mui-selected": {
                        color: "black",
                    }
                }}
            />
            <Tab
                label="샘플 로스팅"
                value="sample"
                sx={{
                    maxWidth: "unset",
                    minHeight: "unset",
                    flexGrow: 1, // 탭이 남은 공간을 균등하게 차지하도록
                    py: 1,
                    fontSize: "1rem",
                    fontWeight: "medium",
                    borderRadius: 1.5, // 탭 자체에도 둥근 모서리// mx: 0.5, // 각 탭 사이의 가로 마진
                    bgcolor: props.value === "sample" ? "white" : "transparent", // 현재 탭 강조
                    color: props.value === "sample" ? "black" : "grey.600", // 현재 탭 텍스트 색상
                    "&.Mui-selected": {
                        color: "black",
                    }
                }}
            />
        </Tabs>
    </Paper>;
}

function RosteryInfoBox(props: { currentTab: TabType, onClick: () => void }) {
    return <Paper
        variant="outlined" // 테두리만 있는 형태
        sx={{
            px: 3, // 내부 패딩
            py: 2, // 세로 패딩
            width: "100%",
            mb: 4, // 하단 마진
            borderRadius: 2, // 둥근 모서리
            bgcolor: "background.paper", // 배경색
            borderColor: "grey.300", // 테두리 색상
        }}
    >
        {props.currentTab === "produce" && (
            <Box>
                <Typography variant="body1" color="text.secondary" sx={{mb: 2}}>
                    수량 제한 없는 전체 생산 모드입니다. 상업적 주문에 적합합니다.
                </Typography>

                <Button
                    variant="outlined" // 테두리만 있는 버튼
                    color="primary"
                    onClick={props.onClick}
                    sx={{
                        px: 2, // 가로 패딩
                        py: 1, // 세로 패딩
                        borderColor: "grey.400", // 테두리 색상
                        color: "text.primary", // 텍스트 색상
                        "&:hover": {
                            borderColor: "grey.500", // 호버 시 테두리 색상 변경
                            backgroundColor: "grey.50", // 호버 시 배경색
                        }
                    }}
                >
                    기존 로스팅 데이터 불러오기
                </Button>
            </Box>
        )}
        {props.currentTab === "sample" && (
            <Box>
                <Typography variant="body1" color="text.secondary">
                    샘플 모드는 최대 1kg으로 제한됩니다. 새로운 블렌드 테스트에 이상적입니다.
                </Typography>
            </Box>
        )}
    </Paper>;
}

export type Bean = {
    id: string; // 원두의 고유 ID
    name: string;
}

type SelectedBean = Bean & {
    percentage: number; // 로스팅 비율
}

const beans: Bean[] = [
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

const Roastery = () => {
    const [currentTab, setCurrentTab] = useState<TabType>('produce');
    const [selectedBean, setSelectedBean] = useState<SelectedBean[]>([]);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: TabType) => {
        setCurrentTab(newValue);
        console.log(newValue)
    };

    const handleLoadData = () => {
        console.log("기존 로스팅 데이터 불러오기");
    }

    const handleCheckboxChange = (bean: Bean, event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;

        setSelectedBean((prev) => {
            if (checked) {
                // 선택된 원두를 추가
                return [...prev, {...bean, percentage: 50}]; // 기본 비율 50%
            } else {
                // 선택 해제된 원두를 제거
                return prev.filter(b => b.id !== bean.id);
            }
        });
    };

    useEffect(() => {
        console.log(selectedBean)
    }, [selectedBean]);

    return <>
        <MotionBox
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={pageTransition}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                // border: 1
            }}
        >
            <Typography
                variant="h4"
                component="h1"
                fontWeight="bold"
                sx={{mb: 4}}
            >
                맞춤형 로스팅 제작
            </Typography>

            <RoasterySelectTab value={currentTab} onChange={handleTabChange}/>

            <RosteryInfoBox currentTab={currentTab} onClick={handleLoadData}/>

            <Box sx={{
                width: '100%',
                // border: 1,
            }}>
                <Typography
                    variant="h5"
                    component="h2"
                    fontWeight="bold"
                    sx={{mb: 1}}
                >
                    원두 원산지 선택
                </Typography>

                <FormGroup
                    // sx={{border: 1}}
                >
                    <Grid container spacing={0.5}>
                        {beans.map((bean) => (
                            <Grid size={{xs: 12, sm: 6, md: 4,}} key={bean.id} sx={{
                                // border: 1,
                                // borderColor: 'red'
                            }}>
                                <Stack>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name={bean.name}
                                                value={bean}
                                                checked={selectedBean.some(b => b.id === bean.id)}
                                                onChange={(e) => handleCheckboxChange(bean, e)}
                                                size="small"
                                                color="primary"
                                            />
                                        }
                                        label={
                                            <Typography variant="body1" sx={{fontSize: '0.95rem'}}>
                                                {bean.name}
                                            </Typography>
                                        }
                                    />

                                    <Collapse in={selectedBean.some(b => b.id === bean.id)}>
                                        <Grid container spacing={1} sx={{
                                            mx: 4,
                                            mb: 2,
                                            alignItems: 'center',
                                            // border: 1
                                        }}>
                                            <Grid size="grow">
                                                <Slider
                                                    aria-label="로스팅 비율"
                                                    value={selectedBean.find(b => b.id === bean.id)?.percentage || 0}
                                                    valueLabelDisplay="auto"
                                                    step={10}
                                                    marks
                                                    min={10}
                                                    max={100}
                                                    color="primary"
                                                />
                                            </Grid>

                                            <Grid>
                                                <Input
                                                    value={selectedBean.find(b => b.id === bean.id)?.percentage || 0}
                                                    size="small"
                                                    inputProps={{
                                                        step: 10,
                                                        min: 0,
                                                        max: 100,
                                                        type: 'number',
                                                        'aria-labelledby': `${bean.name}-slider`,
                                                    }}
                                                    endAdornment={<Typography sx={{ml: 0.5}}>%</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Collapse>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </FormGroup>
            </Box>

        </MotionBox>
    </>
}

export default Roastery