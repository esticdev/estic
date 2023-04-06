import Image from "../assets/images/img.png";
import { useNavigate } from "react-router-dom";
import "../assets/css/logo.css";

const Logo = () => {
    let navigate = useNavigate();

    const handleNavigate = () => {
        let path = `/`;
        navigate(path);
    };

    return (
        <div
            className="logo-image"
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