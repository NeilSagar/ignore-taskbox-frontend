import ClearIcon from '@mui/icons-material/Clear';


import { deleteIt } from "../controller/controller";
import { Typography,styled } from '@mui/material';
import { useState } from 'react';


const StyledTypography=styled(Typography)`
display:inline-block;
font-size:20px;
font-weight:300;
width:70%;
text-decoration:line-through;
`;
const StyledIndex=styled(Typography)`
font-size:20px;
font-weight:300;
position:relative;
top:2px;
margin-right:5px;

`;

function Task(props){
    const [crossOff,setCrossOff]=useState(false);
    const task=props.task.task_name;
    const index=props.index;
    function handleDelete(){
        
        
        setCrossOff(true);
        setTimeout(() => {
            deleteIt(task);
        }, 1000);
        setTimeout(() => {
            setCrossOff(false);
        }, 1000);
        
    }
    
    return (
    <>
        
        <StyledIndex className='index'>{index+1}.</StyledIndex>
        <StyledTypography variant="subtitle1" style={{textDecoration:crossOff?"#B70404 line-through":"none"}} >{task}</StyledTypography>
        <button className="task-delete-button" onClick={handleDelete}><ClearIcon/></button>
    </>
    );
}

export default Task;