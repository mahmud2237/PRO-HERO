import PropTypes from 'prop-types';

const User = ({user}) => {
    const {id, name, email, phone} = user;

    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }


    return (
        <div className="space-y-4 gap-4" style={userStyle}>
            <h1 className='font-bold text-xl'>ID: {id}, Name: {name}</h1>
            <p><span className='font-bold'>Phone:</span> {phone}</p>
            <p className='font-bold text-xs'>Email: {email}</p>
        </div>
    );
};

User.propTypes ={
    user: PropTypes.object,
}

export default User;