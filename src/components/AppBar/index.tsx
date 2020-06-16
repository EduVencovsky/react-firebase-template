import React, { ReactNode } from 'react'
import MUIAppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import GrowContainer from '../GrowContainer'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  }
}))


export interface AppBarProps {
  toggleDrawer(): void,
  isDrawerOpen: boolean,
  children?: ReactNode,
  SideContent?: ReactNode,
  showDrawerIcon?: boolean | false
}

const AppBar: React.FC<AppBarProps> = ({ 
  toggleDrawer, 
  isDrawerOpen, 
  children, 
  SideContent, 
  showDrawerIcon 
}) => {
  const classes = useStyles()
  return (
    <MUIAppBar
      position="fixed"
      className={classes.appBar}
    >
      <Toolbar>
        {showDrawerIcon &&
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            {isDrawerOpen ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
        }
        <GrowContainer>
          {children}
        </GrowContainer>  
        {SideContent}
      </Toolbar>
    </MUIAppBar>
  )
}

export default AppBar
