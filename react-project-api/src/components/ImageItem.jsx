function ImageItem({image}) {
    // console.log(image.urls.small)
    return (
        <div >
            <img src={image.urls.small} alt=""/>
        </div>
    );
}

export default ImageItem ;
