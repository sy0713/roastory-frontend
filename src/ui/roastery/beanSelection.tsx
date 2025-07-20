import {
    Box,
    Checkbox,
    Collapse,
    FormControlLabel,
    FormGroup,
    Grid,
    Input,
    Slider,
    Stack,
    Typography
} from "@mui/material";
import {type Bean, beans, type SelectedBean} from "../../model/roasteryType.ts";
import {useMemo} from "react";

export const BeanSelection = ({
                                  selectedBeans, handleCheckboxChange, handlePercentageChange
                              }: {
    selectedBeans: SelectedBean[],
    handleCheckboxChange: (bean: Bean, event: React.ChangeEvent<HTMLInputElement>) => void,
    handlePercentageChange: (beanId: string, value: number) => void
}) => {

    const totalPercentage = useMemo(() => {
        return selectedBeans.reduce((sum, bean) => sum + bean.percentage, 0);
    }, [selectedBeans])

    return <>
        <Box sx={{width: '100%', mb: 4}}>
            <Typography
                variant="h5"
                component="h2"
                fontWeight="bold"
                sx={{mb: 1}}
            >
                원두 원산지 선택
            </Typography>

            <FormGroup sx={{mb: 1}}>
                <Grid container spacing={0.5}>
                    {beans.map((bean) => (
                        <Grid size={{xs: 12, sm: 6, md: 4,}} key={bean.id}>
                            <Stack>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name={bean.name}
                                            value={bean}
                                            checked={selectedBeans.some(b => b.id === bean.id)}
                                            onChange={(e) => handleCheckboxChange(bean, e)}
                                            size="small"
                                            sx={{
                                                '&.Mui-checked': {
                                                    color: 'black',
                                                }
                                            }}
                                        />
                                    }
                                    label={
                                        <Typography id={bean.name + '-label'} variant="body1"
                                                    sx={{fontSize: '0.95rem'}}>
                                            {bean.name}
                                        </Typography>
                                    }
                                />

                                <Collapse in={selectedBeans.some(b => b.id === bean.id)}>
                                    <Grid container spacing={1} sx={{
                                        mx: 4,
                                        mb: 2,
                                        alignItems: 'center'
                                    }}>
                                        <Grid size="grow">
                                            <Slider
                                                aria-labelledby={bean.name + '-label'}
                                                value={selectedBeans.find(b => b.id === bean.id)?.percentage || 0}
                                                onChange={(_e, value) => handlePercentageChange(bean.id, value as number)}
                                                valueLabelDisplay="auto"
                                                step={10}
                                                marks
                                                min={10}
                                                max={100}
                                                sx={{
                                                    color: 'black',
                                                    '& .MuiSlider-thumb': {
                                                        backgroundColor: 'background.paper',
                                                        border: 1,
                                                        borderColor: 'primary.dark',
                                                        width: 15,
                                                        height: 15
                                                    },
                                                }}
                                            />
                                        </Grid>

                                        <Grid>
                                            <Input
                                                value={selectedBeans.find(b => b.id === bean.id)?.percentage || 0}
                                                onChange={(e) => handlePercentageChange(bean.id, Number(e.target.value))}
                                                size="small"
                                                inputProps={{
                                                    step: 10,
                                                    min: 10,
                                                    max: 100,
                                                    type: 'number',
                                                    onKeyDown: (e) => e.preventDefault(),
                                                    'aria-labelledby': `${bean.name}-label`,
                                                }}
                                                endAdornment={<Typography sx={{ml: 0.5}}>%</Typography>}
                                                sx={{
                                                    '& .MuiInput-input': {
                                                        textAlign: 'center',
                                                    }
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Collapse>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </FormGroup>

            {selectedBeans.length === 0 ? (
                <Typography variant="body2" color="info.light">
                    원두를 선택해주세요.
                </Typography>
            ) : totalPercentage === 100 ? (
                <Typography variant="body2" color="success.light">
                    총합: 100% (선택된 원두: {selectedBeans.map(b => b.name).join(', ')})
                </Typography>
            ) : (
                <Typography variant="body2" color="error.light">
                    총합: {totalPercentage}% (100%가 되도록 비율을 조정해주세요)
                </Typography>
            )}
        </Box>
    </>
}
