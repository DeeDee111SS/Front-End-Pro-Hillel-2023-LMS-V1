import React from 'react';
import Grid from '@mui/material/Grid';
import { Paper } from "@mui/material";
import Title from "../../components/Title";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { capitalizeFirstLetter, formatDate } from "../../utils/HELPER_FUNCS";
import { useParams } from 'react-router-dom'; 
import { useGetHomeworkByIdQuery } from '../../store/homeworksApi';
import { Link } from "react-router-dom";

function SingleHomeworkPage() {
    const { hwId } = useParams();
    const { data, isLoading } = useGetHomeworkByIdQuery(hwId);

    if (isLoading) return <h3>Loading ...</h3>;

    return  <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}> 
                    {data ? (
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 520,
                            }}
                        >
                            <Title>Homework #{data.id} {capitalizeFirstLetter(data.title)}</Title>
                            <Typography color="text.secondary" sx={{ flex: 0 }}>
                                Date: {formatDate(data.createdAt)}
                            </Typography>
                            <Typography color="text.primary" sx={{ flex: 0 }}>
                                Description:
                            </Typography>
                            <Typography color="text.secondary" sx={{ flex: 1 }}>
                               {capitalizeFirstLetter(data.description)}
                            </Typography>
                            <Link to={'/homeworks'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Button variant="contained" startIcon={<ArrowBackIosNewIcon />}>
                                    Return to homeworks
                                </Button>
                            </Link>
                        </Paper>
                    ) : (
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 120,
                            }} 
                        >
                            <Typography color="text.secondary" sx={{ flex: 1 }}>
                                Homework not found
                            </Typography>
                            <Link to={'/homeworks'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Button variant="contained" startIcon={<ArrowBackIosNewIcon />}>
                                    Return to homeworks
                                </Button>
                            </Link>
                        </Paper>
                    )}     
                </Grid>   
            </Grid>     
}

export default SingleHomeworkPage;





  

