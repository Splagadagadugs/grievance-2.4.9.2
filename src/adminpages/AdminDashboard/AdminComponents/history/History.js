import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import React, {useEffect} from 'react'
import Gtable from './Gtable';
import Historylist from '../history/Historylist';


const History = ({setSelectedLink, link}) => {

  useEffect(() => {
    setSelectedLink(link)
  }, []);
  
  return (
    <>
      <div classname="bgcolor">
        <Box sx={{flexGrow: 1, p: 3}}>
          <Gtable/>
        </Box>
        <Box sx={{flexGrow: 1, p: 3}}>
          <Historylist/>
        </Box>
      </div>
    </>
  )
}

export default History;

