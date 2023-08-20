import './Card.css'
import { useState } from 'react';

export default function Card({id,name,info,image,price,removeTour}/*props*/){
    const[readMore,setReadmore]=useState(false);
    const description=readMore?info:`${info.substring(0,200)}....`;
    function readMoreHandler(){
        setReadmore(!readMore);
    }
 
    return(
        <div className='card'>
            <img src={image} className="image" alt=''/>
            <div className='tour-info'>
                <div className='tour-details'>
                    <h4 className='tour-price'>
                    {price}
                    </h4>
                    <h4 className='tour-name'>
                    {name}
                    </h4>
                </div>
                <div className='description'>
                    {description}
                    <span className='read-more' onClick={readMoreHandler}>
                        {readMore?`Show less`:`read more`}
                    </span>
                </div>
                <div className='h-center'>
                    <button onClick={/*props.*/()=>removeTour(id)} className="btn-red">
                        Not Intreseted
                    </button>
                </div>
                
            </div>
        </div>
    );
}
