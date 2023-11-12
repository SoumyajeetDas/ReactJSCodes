import React from 'react';
import { Typography, useTheme, useMediaQuery, Stack } from '@mui/material'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import BusinessIcon from '@mui/icons-material/Business';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { motion } from 'framer-motion';


const TimelineComponent = () => {

    // This will take out the current theme that is been used in the project.
    const theme = useTheme();

    // useMediaWuery will basically check for the breakponts or wwe can seay if it is lower than md
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))


    return (

        <Timeline position={isMatch ? 'right' : 'alternate'} sx={{
            width: {
                md: "auto",
                xs: "200px"
            }
        }}>

            <TimelineItem>

                <TimelineSeparator>

                    <TimelineConnector sx={{
                        height: "80px",
                        background: "#ecf0f3",
                        boxShadow: "-2px -4px 5px #fff, 5px 5px 5px #cbced1",
                        width: "5px"
                    }} />
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                    >
                        <TimelineDot sx={{
                            background: "#ecf0f3",
                            boxShadow: "-2px -4px 5px #fff, 5px 5px 5px #cbced1",
                        }}>
                            <BusinessIcon sx={{ color: "#00ddb3" }} />
                        </TimelineDot>
                    </motion.div>

                    <TimelineConnector sx={{
                        height: "80px",
                        background: "#ecf0f3",
                        boxShadow: "-2px -4px 5px #fff, 5px 5px 5px #cbced1",
                        width: "5px"
                    }} />

                </TimelineSeparator>

                <TimelineContent sx={{ py: '12px', px: 2, marginTop: "50px" }}>

                    <Typography variant="h5" sx={{ color: "#303f9f" }} component="div">
                        Jr. Software Engineer
                    </Typography>
                    <Typography variant="h6" component="div">
                        Cognizant
                    </Typography>
                    <Stack direction='row' sx={{
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: "0.5rem"
                    }}>
                        <CalendarMonthIcon fontSize="small" sx={{ color: "#566573" }} />
                        <Typography variant="body2" sx={{ color: "#566573", fontStyle: "italic" }} component="span">
                            2022 - Present
                        </Typography>
                    </Stack>

                </TimelineContent>
            </TimelineItem>


            <TimelineItem>

                <TimelineSeparator>
                    <TimelineConnector sx={{
                        height: "80px",
                        background: "#ecf0f3",
                        boxShadow: "-2px -4px 5px #fff, 5px 5px 5px #cbced1",
                        width: "5px"
                    }} />

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                    >
                        <TimelineDot sx={{
                            background: "#ecf0f3",
                            boxShadow: "-2px -4px 5px #fff, 5px 5px 5px #cbced1",
                        }}>
                            <WorkOutlineIcon sx={{ color: "#00ddb3" }} />
                        </TimelineDot>
                    </motion.div>

                    <TimelineConnector sx={{
                        height: "80px",
                        background: "#ecf0f3",
                        boxShadow: "-2px -4px 5px #fff, 5px 5px 5px #cbced1",
                        width: "5px"
                    }} />
                </TimelineSeparator>

                <TimelineContent sx={{ py: '12px', px: 2, marginTop: "50px" }}>

                    <Typography variant="h5" sx={{ color: "#303f9f" }} component="div">
                        Programmer Analyst Trainee
                    </Typography>
                    <Typography variant="h6" component="div">
                        Cognizant
                    </Typography>

                    <Stack direction='row' sx={{
                        justifyContent: {
                            md: 'flex-end',
                            xs: "flex-start"
                        },
                        alignItems: 'center',
                        gap: "0.5rem"
                    }}>
                        <CalendarMonthIcon fontSize="small" sx={{ color: "#566573" }} />
                        <Typography variant="body2" sx={{ color: "#566573", fontStyle: "italic" }} component="span">
                            2021-2022
                        </Typography>
                    </Stack>


                </TimelineContent>

            </TimelineItem>


            <TimelineItem>

                <TimelineSeparator>
                    <TimelineConnector sx={{
                        height: "80px",
                        background: "#ecf0f3",
                        boxShadow: "-2px -4px 5px #fff, 5px 5px 5px #cbced1",
                        width: "5px"
                    }} />

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                    >
                        <TimelineDot sx={{
                            background: "#ecf0f3",
                            boxShadow: "-2px -4px 5px #fff, 5px 5px 5px #cbced1",
                        }}>
                            <AccountBoxIcon sx={{ color: "#00ddb3" }} />
                        </TimelineDot>
                    </motion.div>

                    <TimelineConnector sx={{
                        height: "80px",
                        background: "#ecf0f3",
                        boxShadow: "-2px -4px 5px #fff, 5px 5px 5px #cbced1",
                        width: "5px"
                    }} />
                </TimelineSeparator>

                <TimelineContent sx={{ py: '12px', px: 2, marginTop: "50px" }}>

                    <Typography variant="h5" sx={{ color: "#303f9f" }} component="div">
                        Intern as Full Stack Engineer
                    </Typography>
                    <Typography variant="h6" component="div">
                        Cognizant
                    </Typography>
                    <Stack direction='row' sx={{
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: "0.5rem"
                    }}>
                        <CalendarMonthIcon fontSize="small" sx={{ color: "#566573" }} />
                        <Typography variant="body2" sx={{ color: "#566573", fontStyle: "italic" }} component="span">
                            May 2021 - July 2021
                        </Typography>
                    </Stack>

                </TimelineContent>

            </TimelineItem>


            <TimelineItem>

                <TimelineSeparator>
                    <TimelineConnector sx={{
                        height: "80px",
                        background: "#ecf0f3",
                        boxShadow: "-2px -4px 5px #fff, 5px 5px 5px #cbced1",
                        width: "5px"
                    }} />

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                    >
                        <TimelineDot sx={{
                            background: "#ecf0f3",
                            boxShadow: "-2px -4px 5px #fff, 5px 5px 5px #cbced1",
                        }}>
                            <SchoolIcon sx={{ color: "#00ddb3" }} />
                        </TimelineDot>
                    </motion.div>

                    <TimelineConnector sx={{
                        height: "80px",
                        background: "#ecf0f3",
                        boxShadow: "-2px -4px 5px #fff, 5px 5px 5px #cbced1",
                        width: "5px"
                    }} />
                </TimelineSeparator>

                <TimelineContent sx={{ py: '12px', px: 2, marginTop: "50px" }}>

                    <Typography variant="h5" sx={{ color: "#303f9f" }} component="div">
                        B.Tech in Computer Science
                    </Typography>
                    <Typography variant="h6" component="div">
                        Kalinga Institute of Industrial Technology
                    </Typography>
                    <Stack direction='row' sx={{
                        justifyContent: {
                            md: 'flex-end',
                            xs: "flex-start"
                        },
                        alignItems: 'center',
                        gap: "0.5rem"
                    }}>
                        <CalendarMonthIcon fontSize="small" sx={{ color: "#566573" }} />
                        <Typography variant="body2" sx={{ color: "#566573", fontStyle: "italic" }} component="span">
                            2017-2021
                        </Typography>
                    </Stack>

                </TimelineContent>

            </TimelineItem>

        </Timeline>

    )
}

export default TimelineComponent
