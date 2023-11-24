import './home.css'
import homeBackground from '../home_photo.png'
import { Link } from 'react-router-dom';
function Home({data}) {
    return(
    <div className='home'>
        <div className='home-container'>
            <h1 className="home-title">Chez vous, partout et ailleurs</h1>
            <img className="photo"src={homeBackground} alt="home background"/>

        </div>
        <ul className='card-list'>
            {data.map((item) => (
                <div className='card-container' key={item.id}>
                    <Link to={`/detail/${item.id}`} className="card-link">
                    <li className="card">
                        <div className='overlay'></div>
                        <span>{item.title}</span>
                    </li>
                    </Link>
                </div>
            ))}
        </ul>
    </div>
    )
}

export default Home;
