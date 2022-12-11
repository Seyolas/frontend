import { Box, Container } from "@mui/material"


export async function getServerSideProps({ query }) {

    const queryId = query?.id;


    const data = await fetch(`http://localhost:1337/api/events/${queryId}`)
    const response = await data.json();


    return {
        props: { response }, // will be passed to the page component as props
    }
}

const EventDetail = ({ response }) => {
    console.log(response)

    return (
        <Container maxWidth="lg">
            <Box>
                dsadas
            </Box>
        </Container>
    )
}

export default EventDetail