import './home.scss'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"
import kitten from "../../assets/images/kitten.jpg"

const Home = () => {
    const redirect = useNavigate();
    return (
        <div className='home'>
            <h1>Welcome to PET STORE</h1>
            <Button variant='outlined' color='primary' onClick={() => redirect("/products")}>
                Products List
            </Button>
            <img src={kitten} alt='kitten.jpg'/>
        </div>
    )
}

export default Home