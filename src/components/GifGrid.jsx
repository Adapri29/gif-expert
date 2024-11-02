import { Giftem } from './Giftem';
import {useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs( category )


    return (
        <> 
    
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className='card-grid'>
                {
                    images.map((img) => (
                        <Giftem 
                            key={img.id} 
                            //Esparcir propiedades
                            {...img}  
                        />
                    ))
                }

            </div>
    
        </>
    )
}
