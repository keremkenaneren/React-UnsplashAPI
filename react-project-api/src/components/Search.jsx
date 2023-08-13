import {useState} from "react";

function Search({search}) {

    const [value, setValue] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault()
        search(value)
    };

    const handleChange = () => {
        setValue(event.target.value)
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="relative my-24 w-96 text-center mx-auto">
                    <input value={value} onChange={handleChange} id="id-l03" type="text" name="id-l03" placeholder="Search" className=" sm: m-10 bg-gray-900 p-8	bg-opacity-75 w-96 h-12 px-4 placeholder:text-gray-50 placeholder:opacity-70 transition-all rounded-lg outline-none focus-visible:outline-none peer text-gray-50 text-xl autofill:bg-white  invalid:text-pink-500  focus:outline-none  disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
                </div>
            </form>
        </div>
    );
}

export default Search ;
