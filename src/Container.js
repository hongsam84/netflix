import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const Container = (props) => {
    const [listDetails, setlistDetails] = useState(false);

    const handleIconClick = () => {
        setlistDetails((prevState) => !prevState);
    };

    return (
        <>
            <div>
                <div className="container">
                    <img 
                        src={`${props.list.image_url}`} 
                        alt={`${props.list.name}`}
                        title={`${props.list.name} 줄거리`}
                        onClick={handleIconClick}
                        className='image-size'/>
                    
                    <a href={`http://netflix.com/search?q=${props.list.name}`}
                        target="_blank"
                        rel="noreferrer">
                        <div className="list-name">
                            {props.list.name}
                        </div>
                    </a>
                    <div className="list-rating">
                        {[...Array(props.list.rating)].map((_, index) => (
                            <FaHeart key={index}/>
                        ))}
                    </div>
                </div>
                {listDetails && props.list.story && (
                    <pre className='list-story' onClick={handleIconClick}>
                        {props.list.story}
                    </pre>
                )}
            </div>            
        </>
    )
}

export default Container;