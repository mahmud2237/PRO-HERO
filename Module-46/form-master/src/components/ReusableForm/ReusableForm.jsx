import PropTypes from 'prop-types';

const ReusableForm = ({formTitle, handleSubmit, submitBtnText='Submit', children}) => {
    
    const handleLocalSubmit = (e) =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    return (
        <div>
            {children}
            {/* <h2>{formTitle}</h2> */}
            
            <form onClick={handleLocalSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="email" name="email" id=""/>
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

ReusableForm.propTypes = {
    formTitle: PropTypes.string.isRequired,
    submitBtnText: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    children: PropTypes.any
}

export default ReusableForm;