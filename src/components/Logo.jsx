import Image from "../img.jpeg";
import { useNavigate } from "react-router-dom";

const Logo = () => {
    let navigate = useNavigate();

    const handleNavigate = () => {
        let path = `/`;
        navigate(path);
    };

    return (
        <div
            onClick={handleNavigate}
            style={{
                maxWidth: 120,
                maxHeight: 31,
            }}
        >
            <img style={{ width: "100%" }} alt="logo" src={Image} />
        </div>
    )
}

export default Logo;