

const Service = ({displayPassFunc}) => {
    return (
        <div>
            <h2 className="text-2xl">Service section</h2>
            <button onClick={() =>displayPassFunc('this is service section')} className="btn btn-error">click from service</button>
        </div>
    );
};

export default Service;