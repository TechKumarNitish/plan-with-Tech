
import Card from './Card';
import './Tours.css'
export default function Tours({tours,removeTour}/*,props*/){
    
    return(
        <div className='container'>
            <h2 className='title'>Plan with Love</h2>
            <div className='cards'>
                {
                    tours.map((tour)=>{
                        return<Card key={tour.id} {...tour} removeTour={/*props.*/removeTour}></Card>
                    })
                }
            </div>
            
        </div>
    );
}