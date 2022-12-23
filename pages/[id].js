import { Box, Button, Container, Typography } from "@mui/material"
import Layout from "../components/Layout";

export async function getServerSideProps({ query }) {

    const queryId = query?.id;


    const data = await fetch(`http://localhost:1337/api/events/${queryId}`)
    const response = await data.json();


    return {
        props: { response }, // will be passed to the page component as props
    }
}

const EventDetail = ({ response }) => {
    const rictText = response?.data?.attributes?.applicationCriteria
    const link = response?.data?.attributes?.link

    return (
        <Layout noBanner>
            <Container maxWidth="lg">
                <Box pt={5}>
                    <Typography
                        component="div"
                        dangerouslySetInnerHTML={{ __html: rictText }} />
                    <Typography align='center'>
                        <Button
                            color='primary'
                            size='large'
                            type='submit'
                            variant='contained'
                            href={link}
                            target="_blank"
                        >
                            Başvur
                        </Button>
                    </Typography>
                </Box>
            </Container>
        </Layout>

    )
}

export default EventDetail