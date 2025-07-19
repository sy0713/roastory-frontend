import {Paper, Tab, Tabs} from "@mui/material";

import type {RoastingType} from "../../model/roasteryType.ts";

export const RoasterySelectTab = ({roastingType, onChange}: {
    roastingType: RoastingType,
    onChange: (_event: React.SyntheticEvent, newValue: RoastingType) => void
}) => <>
    <Paper
        variant="outlined"
        sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            borderRadius: 2,
            borderColor: "grey.300",
            mb: 2
        }}
    >
        <Tabs
            value={roastingType}
            onChange={onChange}
            sx={{
                width: "100%", // Tabs 컴포넌트가 Paper의 전체 너비를 차지하도록 설정
                minHeight: "unset",
                "& .MuiTabs-flexContainer": {
                    width: "100%", // 내부 flex 컨테이너도 전체 너비 사용
                    justifyContent: "center",
                },
                "& .MuiTabs-indicator": {
                    display: "none", // 기본 인디케이터 숨김
                }
            }}
        >
            <Tab
                label="원두 생산"
                value="produce"
                sx={{
                    maxWidth: "unset",
                    minHeight: "unset",
                    flexGrow: 1, // 탭이 남은 공간을 균등하게 차지하도록
                    py: 1,
                    fontSize: "1rem",
                    borderRadius: 2, // 탭 자체에도 둥근 모서리
                    bgcolor: roastingType === "produce" ? "white" : "transparent", // 현재 탭 강조
                    color: "text.secondary", // 현재 탭 텍스트 색상
                    "&.Mui-selected": {
                        color: "text.primary", // 선택된 탭의 텍스트 색상
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
                    borderRadius: 1.5, // 탭 자체에도 둥근 모서리//
                    bgcolor: roastingType === "sample" ? "white" : "transparent", // 현재 탭 강조
                    color: "text.secondary", // 현재 탭 텍스트 색상
                    "&.Mui-selected": {
                        color: "text.primary", // 선택된 탭의 텍스트 색상
                    }
                }}
            />
        </Tabs>
    </Paper>
</>
