import {Typography} from "@mui/material";
import {MotionBox, pageTransition, pageVariants} from "../../common/motion.ts";
import {useEffect, useState} from "react";
import {RoasterySelectTab} from "./roasterySelectTab.tsx";
import {RosteryInfoBox} from "./rosteryInfoBox.tsx";
import {BeanSelection} from "./beanSelection.tsx";
import type {Bean, RoastingType, SelectedBean} from "../../model/roasteryType.ts";
import RoastingLevel from "./roastingLevel.tsx";

const Roastery = () => {
    const [currentTab, setCurrentTab] = useState<RoastingType>('produce');
    const [selectedBeans, setSelectedBeans] = useState<SelectedBean[]>([]);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: RoastingType) => {
        setCurrentTab(newValue);
        console.log(newValue)
    };

    const handleLoadData = () => {
        console.log("기존 로스팅 데이터 불러오기");
    }

    const handleCheckboxChange = (bean: Bean, event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;

        setSelectedBeans((prev) => {
            if (checked) {
                // 선택된 원두를 추가
                return [...prev, {...bean, percentage: 50}]; // 기본 비율 50%
            } else {
                // 선택 해제된 원두를 제거
                return prev.filter(b => b.id !== bean.id);
            }
        })
    }

    const handlePercentageChange = (beanId: string, value: number) => {
        //유효성 검사 필요

        setSelectedBeans(prev =>
            prev.map(bean =>
                bean.id === beanId ? {...bean, percentage: value} : bean
            )
        );
    }

    useEffect(() => {
        console.log(selectedBeans)
    }, [selectedBeans]);

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

            <RoasterySelectTab roastingType={currentTab} onChange={handleTabChange}/>

            <RosteryInfoBox roastingType={currentTab} onClick={handleLoadData}/>

            <BeanSelection selectedBeans={selectedBeans}
                           handleCheckboxChange={handleCheckboxChange}
                           handlePercentageChange={handlePercentageChange}/>

            <RoastingLevel/>

        </MotionBox>
    </>
}

export default Roastery