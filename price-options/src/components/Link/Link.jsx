import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <a href={route.path}><li className='hover:bg-white text-black px-4'>{route.name}</li></a>
    );
};


Link.propTypes = {
    route: PropTypes.object
}
export default Link;