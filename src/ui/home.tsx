import {Box, Button, Stack, Typography} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {motion} from "motion/react";

const MotionButton = motion(Button); // MUI Button을 motion 컴포넌트로 감싸기

const Home = () => {

    return <>
        <Box
            // sx={{border: 1}}
        >
            <Stack alignItems="center">
                <Typography variant="h1" sx={{color:"black" , fontWeight: 'bold'}}>
                    ROASTORY
                </Typography>
                <Typography variant="h4" sx={{color: 'grey.700'}}>
                    당신의 원두. 당신의 로스팅. 당신의 이야기.
                </Typography>

                <MotionButton
                    variant="contained"
                    color="primary"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                    }} // hover 시 스케일 및 그림자
                    whileTap={{scale: 0.95}} // 클릭 시 스케일
                    transition={{type: "spring", stiffness: 400, damping: 10}} // 스프링 애니메이션
                    endIcon={<ArrowForwardIcon/>}
                    sx={{
                        mt: 4,
                        py: 1.5, // 상하 패딩
                        px: 5,   // 좌우 패딩
                        borderRadius: '50px', // 둥근 모서리
                        fontWeight: 'bold',
                        color: 'white',
                        bgcolor: 'grey.900'
                    }}
                >
                    블랜딩 시작하기
                </MotionButton>
            </Stack>
        </Box>
    </>
}

export default Home