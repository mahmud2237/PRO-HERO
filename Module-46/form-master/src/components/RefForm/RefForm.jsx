import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passRef.current.value);
    }

    return (
        <div>
            <form onClick={handleSubmit}>
                <input ref={nameRef} type="text" name="name"/>
                <br />
                <input ref={emailRef} defaultValue={'rojoni@sojoni.com'} type="email" name="email" id=""/>
                <br />
                <input ref={passRef} type="text" name="password" />
                <br />
                <input type="submit" value='RefForm Submit' />
            </form>
        </div>
    );
};

export default RefForm;