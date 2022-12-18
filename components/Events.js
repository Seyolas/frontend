import { Container, Grid, Typography } from '@mui/material'
import SingleEvent from './SingleEvent'


const Events = ({ data, notFoundText }) => {


    return (
        <Container sx={{ my: 4 }}>
            <Grid container rowSpacing={5} columnSpacing={3} justifyContent="center" >
                {
                    data?.length != 0 ?
                        data?.map((item, index) => {
                            return (
                                <Grid item key={index}>
                                    <SingleEvent
                                        key={item?.id}
                                        id={item?.id}
                                        title={item?.attributes?.title}
                                        image={item?.attributes?.image}
                                        subtitle={item?.attributes?.subtitle}
                                        deadline={item?.attributes?.deadline}
                                        firstTag={item?.attributes?.firstTag}
                                        secondTag={item?.attributes?.secondTag}
                                        eventType={item?.attributes?.eventType}
                                    />
                                </Grid>
                            )
                        })
                        :
                        <Typography mt={3} variant='h5'>Başvuruya Açık {notFoundText} Bulunmuyor</Typography>
                }

            </Grid>
        </Container>

    )
}

export default Events
