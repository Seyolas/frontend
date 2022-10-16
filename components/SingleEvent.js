import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import dayjs from 'dayjs'
const SingleEvent = ({ title, subtitle, deadline, image }) => {

    return (
        <Link href="/">
            <a>
                <Box sx={{
                    maxWidth: "368px",
                    maxHeight: "400px",
                    boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                    "&:hover": {
                        boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
                    },
                }}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        alignSelf="center"
                        flexDirection="column"
                        overflow="hidden"
                        position="relative"
                    >
                        <img src={image} width={200} height={150}></img>
                        <Typography variant="h6">{title}</Typography>
                        <Typography variant="body2">{subtitle}</Typography>
                        <Typography
                            color="#fff"
                            mt={15}
                            variant="body1"
                            height="46px"
                            width="368px"
                            textAlign="center"
                            alignItems="center"
                            justify="center"
                            paddingY={"10px"}
                            bgcolor={"#64748b"}
                        >
                            Son Başvuru: {dayjs(deadline).format('DD/MM/YYYY')}</Typography>
                    </Box>
                </Box>
            </a>
        </Link >

    )
}

export default SingleEvent
