import {motion} from "motion/react";
import {Box, Button} from "@mui/material";
import type {Transition} from "motion";

export const MotionButton = motion.create(Button)

export const MotionBox = motion.create(Box) // 페이지 전환 애니메이션 트랜지션 정의

// 페이지 전환 애니메이션을 위한 variants 정의
export const pageVariants = {
    initial: {opacity: 0, y: '50%'}, // 초기 상태: 투명하고 아래에서 시작
    in: {opacity: 1, y: '0%'}, // 진입 상태: 불투명하고 제자리
    out: {opacity: 0, y: '-100%'} // 이탈 상태: 투명하고 위로 사라짐
};

// 페이지 전환 애니메이션 트랜지션 정의
export const pageTransition: Transition = {
    type: 'tween', // 트윈 애니메이션 (선형 보간)
    ease: 'easeInOut', // 시작과 끝이 부드러운 이징 함수
    duration: 0.5 // 0.5초 동안 애니메이션
};
