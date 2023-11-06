import * as React from 'react';
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import { useGetLessonsQuery } from '../../store/lessonsApi';
import { capitalizeFirstLetter, formatDate } from "../../utils/HELPER_FUNCS";
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ReactLessonsList() {
  const {data, isLoading} = useGetLessonsQuery();

  if(isLoading) return <h3>Loading ...</h3>;

  return (
    <React.Fragment>
      <Title>React Lessons</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Topic</TableCell>           
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(-10).reverse().map((row) => (
              <TableRow key={row.id}>
              <TableCell>{formatDate(row.createdAt)}</TableCell>
              <TableCell>#{row.id} {capitalizeFirstLetter(row.title)}</TableCell>
              
              <TableCell align="right">
                <Link to={`/lessons/${row.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
                        Go to lesson
                    </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>      
      <Link to={'/lessons'}>
        Go to Lessons page
      </Link>   
    </React.Fragment>
  );
}