import React, { useState, useCallback, ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MiniDrawer, { DrawerItem } from '../MiniDrawer'
import AppBar from '../AppBar'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

interface MainLayoutProps {
  appBarChildren?: ReactNode
  appBarSideContent?: ReactNode
  appBarShowDrawerIcon?: boolean | false
  drawerItemList: DrawerItem[]
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  drawerItemList, 
  appBarShowDrawerIcon, 
  appBarSideContent, 
  appBarChildren,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const toggleDrawer = useCallback(() => setIsDrawerOpen(prev => !prev), [])

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar
        {...{isDrawerOpen, toggleDrawer}}
        showDrawerIcon={appBarShowDrawerIcon}
        SideContent={appBarSideContent}
      >
        {appBarChildren}
      </AppBar>
      <MiniDrawer
        isOpen={isDrawerOpen}
        itemList={drawerItemList}
      />
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  )
}

export default MainLayout
