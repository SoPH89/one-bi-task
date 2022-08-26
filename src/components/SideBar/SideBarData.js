import React from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PermMediaIcon from '@mui/icons-material/PermMedia';

export const SidebarData = [
    {
        title: "Movies",
        icon: <MovieIcon/>,
        link: "/",
    },
    {
        title: "TV Shows",
        icon:  <PersonalVideoIcon/>,
        link: "/tvshows"
    },
     {
         title: "Analytics",
         icon: <AssessmentIcon/> ,
         link: "/analytics",
     },
     {
         title: "Dashboard",
         icon: <DashboardIcon/> ,
         link: "/dashboard",
     },
     {
         title: "Friends",
         icon: <GroupIcon/> ,
         link: "/friends",
     },
     {
         title: "Images",
         icon: <PermMediaIcon/> ,
         link: "/images",
     },
    

]

export default SidebarData;
 