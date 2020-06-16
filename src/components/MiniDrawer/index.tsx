import React, { ComponentType } from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}));

export interface DrawerItem {
  name?: string,
  Icon?: ComponentType<any>,
  divider?: boolean,
  route?: string,
}

export interface MiniDrawerProps {
  isOpen: boolean,
  itemList: DrawerItem[],
}

const MiniDrawer: React.FC<MiniDrawerProps> = ({ isOpen, itemList }) => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        }),
      }}
      open={isOpen}
    >
      <div className={classes.toolbar} />
      <List>
        {itemList.map(({ name, Icon, divider, route }, i) => (
          divider ? <Divider key={i} /> :
            <ListItem
              button
              key={name}
              onClick={() => history.push(`/${route}`)}
            >
              <ListItemIcon>
                {Icon != null &&
                  <Icon color="primary" />
                }
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default MiniDrawer