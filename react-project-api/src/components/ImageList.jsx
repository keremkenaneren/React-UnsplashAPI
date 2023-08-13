import ImageItem from "./ImageItem.jsx";

function ImageList({imagePlaceholder}) {

    return (
        <div className="flex justify-center ">
            <div className=" space-y-3 columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
                {imagePlaceholder.map((image, index) => (
                    <ImageItem key={index} image={image} />
                ))}
            </div>
        </div>



    );
}

export default ImageList ;
