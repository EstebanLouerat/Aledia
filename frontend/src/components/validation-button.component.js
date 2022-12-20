import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import swal from 'sweetalert';

import tabHandler from '../services/tab.service'

const parseError = err => {
  return err.split(/[|]/);
};

const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

export default function ValidationButton({grid}) {
  const [loading, setLoading] = React.useState(false);
  const handleClick = async event => {
    setLoading(true);
    
    const tab = grid();

    try {
      tabHandler(tab);
    } catch (error) {
      swal("Oops!", error, "error");
      setLoading(false);
      return;
    }

    await sleep(1500);
  
    // ${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}
    await axios.post(`http://192.168.0.50:3001/api/data`, tab).then((response) => {
      console.log(response);
      swal("Success !", `Data Send`, "success");
    })
    .catch((err) => {
      const parsed_err = parseError(err.response.data)
      var err_msg = ""

      // console.log(err);
      switch (parsed_err[1]) {
        case "23505":
          err_msg = "The combination of split_name, laser_tad and split_group must be unique, it already exist in your input"
          break;
        case "23503":
          err_msg = "The enterred laser_tag does not exist in the database, please enter a valid one"
          break;
        case "23502":
          err_msg = "Either the enterred laser_tag does not exist in the database or the columns split_name, laser_tag and split_group are empty"
          break;
        case "22P02":
          err_msg = "Format error"
          break;
        default:
          err_msg = "Other error, please contact the IT team"
          break;
      }
      swal("Aïe!", `${err_msg}.\nDetail: ${parsed_err[2]}\nCode : ${err.code}`, "error");
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
