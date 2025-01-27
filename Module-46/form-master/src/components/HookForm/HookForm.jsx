import useInputState from "../../hooks/useInputState";


const HookForm = () => {


    const [name, handleNameChange] = useInputState('Rojoni Hooked');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name);
    }
    return (
        <div>
            <form onClick={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name"/>
                <br />
                <input type="email" name="email" id=""/>
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value='HookForm Submit' />
            </form>
        </div>
    );
};

export default HookForm;