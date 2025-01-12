import profile from '../../assets/Profile/boy1.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-6xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;