

const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('Form submitted');
    }


    return (
        <div className="mb-5">
            <form onClick={handleSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="email" name="email" id=""/>
                <br />
                <input type="number" name="phone" />
                <br />
                <input type="submit" value='SimpleForm Submit' />
            </form>
        </div>
    );
};

export default SimpleForm;