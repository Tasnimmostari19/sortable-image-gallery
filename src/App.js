import { useState } from 'react';
import './App.css';
import { Button, Checkbox, Grid, Typography } from '@mui/material';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

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
// console.log(count)

const handleDelete=()=>{
    const newArray = images.filter((image)=>!image.checked===true)
    setImages(newArray);
}

// Drag and Drop component

const SortableImage = ({image,index})=>{
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    }=useSortable({id: image.id})

    const style = {
        transition,
        transform:CSS.Transform.toString(transform),
    }

    return(
        <div ref={setNodeRef} {...attributes}{...listeners} style={style}>
            <img src={image.url} style={{border:'1px solid cadetblue',borderRadius:'10px',width:index>0?'150px':'300px',height:index>0?'150px':'300px'}} alt='sortable img'/>                
        </div>
    )
}

const onDragEnd =(e)=>{
    const {active,over}=e
    if(active.id===over.id){
        return
    }
    setImages((images)=>{
        const oldIndex = images.findIndex((img)=>img.id===active.id)
        const newIndex = images.findIndex((img)=>img.id===over.id)
        return arrayMove(images,oldIndex,newIndex)
    })
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
                <Grid item container spacing={2} sx={{marginX:'10%'}}>
                <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                    <SortableContext items={images} strategy={verticalListSortingStrategy}>
                    {
                    images.map((image,index)=><Grid key={image.id} item>
                        {/* <div style={{backgroundColor:'lightgray',position:'relative'}}> */}
                            <Checkbox 
                    checked={image.checked} 
                    onChange={(e)=>handleCheckbox(image.id,e)} 
                    sx={{position:'absolute',marginLeft:'30px'}}/> 
                        {/* </div> */}
                   
                    <SortableImage key={image.id} image={image} index={index}/>
                    </Grid>
                    )
                    }
                    </SortableContext>
                </DndContext>
                </Grid>
        
            </Grid>
        
  </div>
  );
}

export default App;
