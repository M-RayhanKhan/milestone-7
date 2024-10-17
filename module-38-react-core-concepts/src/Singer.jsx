
const Singer = ({singer}) => {
    console.log(singer);
    const {name, age} = singer
    return (
        <div>
            <li>Name: {name}</li>
            <li>age: {age}</li>
        </div>
    );
};

export default Singer;