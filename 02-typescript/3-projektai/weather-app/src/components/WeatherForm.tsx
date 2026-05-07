import { useRef, useState } from "react";

type WeatherFormProps = {
    setCity: Function;
}

const WeatherForm = (props: WeatherFormProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(inputRef);
        props.setCity(inputRef.current?.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Enter city name"
                ref={inputRef}
            />
            <button>Get weather</button>
        </form>
    )
};

export default WeatherForm;