import ImageItem from "./ImageItem.jsx";

function ImageList({imagePlaceholder}) {

    return (
        <div>
            {imagePlaceholder.map((image)=>{
                return <ImageItem image={image}/>
            })}
        </div>
    );
}

export default ImageList ;
