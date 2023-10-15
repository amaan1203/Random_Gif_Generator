import axios, { formToJSON } from 'axios';
import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import Loading from './Loading';






    function Tag (){
        const[gif, setGif] = useState('');
        const [tag,setTag] = useState("");
        const [loading,setLoading]=useState(false);

        const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
      
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

        
         async function fetchData(){
            
            setLoading(true);
            const {data} = await axios.get(url);
            const imgSrc= await data.data.images.downsized.url;
            setGif(imgSrc);
            setLoading(false);

        }

         useEffect(()=>{

            fetchData();

         },[])


        function clickHandler()
        {
              fetchData();
        }


        function changeHandler(event){
           
            setTag(event.target.value);
            fetchData();
              



        }




        return (
            
            <div className='w-1/2 h-1/2  bg-blue-400  mt-7 flex flex-col items-center gap-4 border border-black   rounded-lg  '>

                <h2 className='underline text-3xl font-semibold mt-2 '>Random {tag} GIF</h2>

                {
                    loading ? (<Loading />):(<img src={gif} className='w-1/2 h-3/4 '  ></img>)
                }

                <input 
                 
                 className='text-2xl w-10/12 bg-white  text-center rounded-md font-medium  mb-3'
                 type='text'
                 placeholder='Enter a tag to search for your Gif'
            
                 onChange={changeHandler}

                />
                



                <button  onClick={clickHandler}  className='text-2xl w-10/12 bg-white rounded-md font-medium  mb-3' >
                 
                 Generate 

                </button>

            </div>
        );

    }
    



export default Tag;