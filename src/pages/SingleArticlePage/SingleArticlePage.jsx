import React from 'react';
import Grid from '@mui/material/Grid';
import { Paper } from "@mui/material";
import Title from "../../components/Title";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { capitalizeFirstLetter } from "../../utils/HELPER_FUNCS";
import { useParams } from 'react-router-dom'; 
import { useGetPostByIdQuery } from '../../store/articlesApi';
import { Link } from "react-router-dom";

function SingleArticlePage() {
    const { articleId } = useParams();
    const { data, isLoading } = useGetPostByIdQuery(articleId);

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
                            <Title>{capitalizeFirstLetter(data.title)}</Title>
                            <Typography color="text.secondary" sx={{ flex: 1 }}>
                                {capitalizeFirstLetter(data.body)}
                            </Typography>
                            <Link to={'/articles'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Button variant="contained" startIcon={<ArrowBackIosNewIcon />}>
                                    Return to list
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
                                Article not found
                            </Typography>
                            <Link to={'/articles'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Button variant="contained" startIcon={<ArrowBackIosNewIcon />}>
                                    Return to list
                                </Button>
                            </Link>
                        </Paper>
                    )}     
                </Grid>   
            </Grid>     
}

export default SingleArticlePage;





  

