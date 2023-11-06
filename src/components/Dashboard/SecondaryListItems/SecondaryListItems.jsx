import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import { Link } from 'react-router-dom';

export const SecondaryListItems = () => {
  return (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Additions
    </ListSubheader>
    <Link to="/articles" style={{ textDecoration: 'none', color: 'inherit' }}>
      <ListItemButton>
        <ListItemIcon>
          <ArticleSharpIcon />
        </ListItemIcon>
        <ListItemText primary="Tech Articles" />
      </ListItemButton>
    </Link>    
  </React.Fragment>
);}

export default SecondaryListItems;