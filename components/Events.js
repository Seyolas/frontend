import { Container, Grid, Typography } from '@mui/material'
import SingleEvent from './SingleEvent'


const Events = ({ data }) => {

    return (
        <Container sx={{ my: 16 }}>
            <Grid container spacing={3} justifyContent="center" >
                {data?.map((item) => {
                    console.log(item)
                    return (
                        <Grid item>
                            <SingleEvent
                                key={item?.attributes?.id}
                                title={item?.attributes?.title}
                                image={item?.attributes?.image}
                                subtitle={item?.attributes?.subtitle}
                                deadline={item?.attributes?.deadline}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>

    )
}

export default Events
