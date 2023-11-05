import { useState } from 'react';
import './App.css';
import { Button, Checkbox, Grid, Typography } from '@mui/material';

function App() {
 const data = [
    {
        id:1,
        url:'/images/image-1.webp',
        checked:false
    },
    {
        id:2,
        url:'/images/image-2.webp',
        checked:false
    },
    {
        id:3,
        url:'/images/image-3.webp',
        checked:false
    },
    {
        id:4,
        url:'/images/image-4.webp',
        checked:false
    },
    {
        id:5,
        url:'/images/image-5.webp',
        checked:false
    },
    {
        id:6,
        url:'/images/image-6.webp',
        checked:false
    },
    {
        id:7,
        url:'/images/image-7.webp',
        checked:false
    },
    {
        id:8,
        url:'/images/image-8.webp',
        checked:false
    },
    {
        id:9,
        url:'/images/image-9.webp',
        checked:false
    },
    {
        id:10,
        url:'/images/image-10.jpeg',
        checked:false
    },
    {
        id:11,
        url:'/images/image-11.jpeg',
        checked:false
    },
]
const [images,setImages]=useState(data)
const [count,setCount]=useState(0)

const handleCheckbox =(id,e)=>{

    e.target.checked===true?setCount(count+1):setCount(count-1);

    const modifiedImage=images.map(i=>{
        if(i.id===id){
            return{...i,checked:!i.checked}
        }
       
        return i;
    })
    setImages(modifiedImage)
}
console.log(count)

const handleDelete=()=>{
    const newArray = images.filter((image)=>!image.checked===true)
    setImages(newArray);
}
 console.log(images);
  return (
    <div>
        <div style={{display:'flex',justifyContent:'space-around', padding:'0px 20%',marginTop:'30px'}}>
            {
                count>0?<Typography sx={{fontWeight:600}}>{`${count>1?`${count} Files`:`${count} File`} Selected`}</Typography>:<Typography sx={{fontWeight:600}}>Gallery</Typography>
            }
         
         <Button 
         variant='text' 
         onClick={handleDelete}
         sx={{color:'red', textTransform:'none'}}>
            Delete file
         </Button>   
        </div>
    
    <Grid className='App' container spacing={2} sx={{marginY:'2%'}}>

        
        <Grid item>
            <Checkbox checked={images[0].checked} onChange={(e)=>handleCheckbox(images[0].id,e)} sx={{position:'absolute'}}/>
            <img src={images[0].url} style={{width:'300px',height:'300px',border:'1px solid cadetblue',borderRadius:'10px'}} alt='feature img'/>

        </Grid>
        <Grid item container spacing={2} sx={{marginX:'10%'}}>
            {
               images.map((image,index)=><Grid key={image.id} item sx={{width:'150px',height:'150px'}}>{

                index!==0&&(
                    <>
                    <Checkbox checked={image.checked} onChange={(e)=>handleCheckbox(image.id,e)} sx={{position:'absolute'}}/>
                    <img src={image.url} style={{border:'1px solid cadetblue',borderRadius:'10px'}} alt='sortable img'/>
                    
                    </>
                )
                
               }
               </Grid>
               )
            }

        </Grid>
   
  </Grid>
  </div>
  );
}

export default App;
