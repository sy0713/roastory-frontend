import {Box, Button, Paper, Typography} from "@mui/material"
import type {RoastingType} from "../../model/roasteryType.ts";

export const RosteryInfoBox = ({roastingType, onClick}: {
    roastingType: RoastingType,
    onClick: () => void
}) => <>
    <Paper
        variant="outlined"
        sx={{
            px: 3,
            py: 2,
            width: "100%",
            height: "7rem",
            borderRadius: 2,
            borderColor: "primary.light",
            mb: 4, // 하단 거리조절
        }}
    >
        {roastingType === "produce" && (
            <Box>
                <Typography variant="body1" color="text.secondary" sx={{mb: 2}}>
                    수량 제한 없는 전체 생산 모드입니다. 상업적 주문에 적합합니다.
                </Typography>

                <Button
                    variant="outlined"
                    onClick={onClick}
                    sx={{
                        px: 2,
                        py: 1,
                        bgcolor: "background.default", // 배경색
                        color: "text.primary",
                        "&:hover": {
                            backgroundColor: "grey.50", // 호버 시 배경색
                        }
                    }}
                >
                    기존 로스팅 데이터 불러오기
                </Button>
            </Box>
        )}
        {roastingType === "sample" && (
            <Box>
                <Typography variant="body1" color="text.secondary">
                    샘플 모드는 최대 1kg으로 제한됩니다. 새로운 블렌드 테스트에 이상적입니다.
                </Typography>
            </Box>
        )}
    </Paper>
</>