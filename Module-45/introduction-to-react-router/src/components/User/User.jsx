import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email, phone} = user;

    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }


    return (
        <div className="space-y-5 mt-9 gap-4" style={userStyle}>
            <h1 className='font-bold text-xl'>ID: {id}, Name: {name}</h1>
            <p><span className='font-bold'>Phone:</span> {phone}</p>
            <p className='font-bold text-xs'>Email: {email}</p>
            <Link to={`/user/${id}`} className='text-blue-600 mr-3'>Show More Details</Link>
            <Link to={`/user/${id}`}><button className='btn btn-active btn-neutral'>Click Here</button></Link>
        </div>
    );
};

User.propTypes ={
    user: PropTypes.object,
}

export default User;