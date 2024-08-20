import React, { useRef} from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import {Link} from 'react-router-dom'
import {api, api_key} from '../api'
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/Movies";
const Header = () => {

  // const [movieName , setMovieName] = useState('')
  const movieName = useRef('')

  const dispatch = useDispatch()

  const searchMovie =async ()=>{
    console.log(movieName.current.value);

    if (movieName.current.value !== ''){
      const res = await api.get(`/search/movie?query=${movieName.current.value}&api_key=${api_key}`)
      
      dispatch(fetchMovies(res.data.results))
    }else{
      const res = await api.get (`/movie/now_playing?api_key=${api_key}`)
      dispatch (fetchMovies (res.data.results))
    }
  }
  return (
    <div>
      <Navbar fluid rounded>
       
        <Link to='/'>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Fantastic Movie channel
          </span>
        </Link>
          
     
        <div className="flex md:order-2 flex">
          <form className="flex">
            {/* <TextInput placeholder="Search....." value={movieName} onChange={(e)=>setMovieName(e.target.value)}/> */}
            <TextInput placeholder="Search....." ref={movieName}/>
            <button type="button" onClick={()=>searchMovie()} className="bg-gray-900 text-white p-2 rounded-lg ms-1">Search</button>
          </form>
        </div>




        {/* <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default Header;
