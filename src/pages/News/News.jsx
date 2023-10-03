import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";


export default function News() {

    const { id }  = useParams();
    
  return (
    <div>
        <Header/>
        <Navbar/>
        <div className="grid md:grid-cols-4">
            <div className="col-span-3">
                <h2> News detail</h2>
            </div>

            <div>
                <RightSideNav/>
            </div>
        </div>
    </div>
  )
}
