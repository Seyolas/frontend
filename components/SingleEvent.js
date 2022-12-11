import { Box, Typography, Chip, Container } from '@mui/material'
import Link from 'next/link'
import dayjs from 'dayjs'
const SingleEvent = ({ id, title, subtitle, deadline, image, firstTag, secondTag }) => {

    return (
        <Link href={`/${id}`}>
            <a>
                <Box sx={{
                    width: "368px",
                    height: "380px",
                    maxWidth: "368px",
                    maxHeight: "380px",
                    boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                    "&:hover": {
                        boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
                    },
                    display: "inline-block"
                }}
                >
                    <Box
                        margin="auto"
                        width="fit-content"
                    >
                        <img src={image} width={200} height={150}></img>
                    </Box>

                    <Typography textAlign="center" variant="h6">{title}</Typography>
                    <Typography textAlign="center" mb={2} variant="body2">{subtitle}</Typography>
                    <Box display="flex" justifyContent="center" alignItems="center" sx={{
                        "& .MuiChip-root:not(:last-of-type)": {
                            mr: 2
                        },
                    }}>
                        <Chip label={firstTag} variant="outlined" />
                        {secondTag && <Chip label={secondTag} variant="outlined" />}
                    </Box>

                    <Typography
                        color="#fff"
                        mt={10}
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
            </a>
        </Link >
    )
}

export default SingleEvent
