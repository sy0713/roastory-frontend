import {Stack, Typography} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from "react-router";
import {MotionBox, MotionButton, pageTransition, pageVariants} from "../common/motion.ts";

const Home = () => {

    const navigate = useNavigate();

    return <>
        <MotionBox
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={pageTransition}
            sx={{
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Stack alignItems="center">
                <Typography variant="h1" sx={{fontWeight: 'bold'}}>
                    ROASTORY
                </Typography>
                <Typography variant="h4" color="primary.dark">
                    당신의 원두. 당신의 로스팅. 당신의 이야기.
                </Typography>

                <MotionButton
                    onClick={() => navigate('/roastery')}
                    // component={Link}
                    // to="/roastery"
                    variant="contained"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: '0px 4px 10px rgba(0,0,0,1)',
                    }}
                    whileTap={{scale: 0.95}}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                    }}
                    endIcon={<ArrowForwardIcon/>}
                    sx={{
                        mt: 4,
                        py: 1.5,
                        px: 5,
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        color: 'white',
                        bgcolor: 'grey.900'
                    }}
                >
                    블랜딩 시작하기
                </MotionButton>
            </Stack>
        </MotionBox>
    </>
}

export default Home