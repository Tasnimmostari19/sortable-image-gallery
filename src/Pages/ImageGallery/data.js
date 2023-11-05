{/*
  const [images,setImages]=useState([])
  const handleImageChange =(e)=>{
      const files = e.target.files;
      const uniqueFiles = removeDuplicates(files);
      setImages([...images, ...uniqueFiles]);
  }

  const removeDuplicates = (files) => {
    return files.filter((file) => {
      return !images.some((selectedFile) => selectedFile.name === file.name);
    });
  };
  console.log(images);



<div className='row-span-2'>
                <img
                src={URL.createObjectURL(images[0])}
                alt='first img'
                style={{ width: '100%', height:'300px',border:'2px solid black' }}
                />
                </div>
                <div className='row-span-1'>
                {images.map((image, index) => (
                    <div key={index}>
                        {
                            index!==0&&<img
                                src={URL.createObjectURL(image)}
                                alt='img'
                                style={{ width: '100%', maxHeight: '100px',border:'2px solid black' }}
                                />
                        }
                   
                    </div>
                ))}
                </div>
                <div className='row-span-1'>
                  <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                style={{width: '100px', height: '100px',border:'2px solid black'}}
                />  
                </div> */}