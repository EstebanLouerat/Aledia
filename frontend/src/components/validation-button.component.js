import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import swal from 'sweetalert';

import tabHandler from '../services/tab.service'


const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

export default function ValidationButton({grid}) {
  const [loading, setLoading] = React.useState(false);
  const handleClick = async event => {
    setLoading(true);
    
    console.log(grid())
    const tab = grid();

    try {
      tabHandler(tab);
    } catch (error) {
      swal("Oops!", error, "error");
      setLoading(false);
      return;
    }

    await sleep(1000);

    axios.post("http://localhost:3001/api/data", tab).then((response) => {
      console.log(response.status);
      swal("Success !", "Data Send", "success");
    })
    .catch(error => {
      console.log(error);
      swal("Aïe!", `${error.message}.\nCode : ${error.code}`, "error");
    });

    setLoading(false);
  };

  return (
    <Box>
        <Box sx={{ '& > button': { m: 1 } }}>
            <LoadingButton
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            >
            Send
            </LoadingButton>
        </Box>
    </Box>
  );
}
