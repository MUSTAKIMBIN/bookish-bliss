import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="text-4xl
        space-y-7 font-bold text-center flex flex-col items-center justify-center h-[100vh]">
            <p className="text-red-600">404</p>
            <p>Data not found</p>
            <Link to='/'><button className="btn">Home</button></Link>
        </div>
    );
};

export default ErrorElement;