import { Link } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Skills from "../skills/Skills";


function Project() {
  return (
    <div className="min-h-screen border-[0.2px] border-red-600 ">
      <>
        <NavBar />
        <h2>
          <Skills  />
        </h2>
        <h1 className="text-center text-4xl font-bold mt-20 border-[0.2px] border-red-600">Projects</h1>
        <h3 className="text-center p-2 border-[0.2px] border-red-600"> What I have been working on...</h3>
        <p className="text-center border-[0.2px] border-red-600">
          Take a look at some of the applications I have been working on
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <div className="bg-white shadow-lg rounded-lg ">
            <img
              src="/images/care-project.png"
             alt="carefinder project" className="w-full rounded-md" />
            <div className="p-4 ">
              <h2 className="font-bold text-2xl ">Carefinder</h2>
              <p className="">Carefinder is a tool designed to help users locate healthcare centers, 
                such as hospitals and clinics, near them within Nigeria.
                 It allows users to search for these facilities...</p>
              <button className=" btn p-2 border-2 hover:bg-mintBrown  hover:text-mintWhite border-mintBrown mr-4 "><Link to="https://carefinder-alt-ec5v.vercel.app/" target="blank" className=" link no-underline text-black ">
              Live Project</Link></button>
              <button className="btn p-2 border-2 hover:bg-mintBrown  hover:text-mintWhite border-mintBrown"><Link to="https://github.com/ChidinmaNwosu/carefinder-alt" target="blank" className="link no-underline text-black ">
              Github View</Link></button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
            <img
              src="/images/vue-gihub-repo-project.png"
             alt="vue github fetch project" className="w-full rounded-md"/>
            <div className="p-4 ">
              <h2 className="font-bold text-2xl ">Github repo fetch using vue.</h2>
              <p className="">Using Vue to fetch repos from github,
                there is also a pagination to help you sift through the repos and a single repo details 
              page that allows you view the details of a single repo...</p>
              <button className="btn p-2 border-2 hover:bg-mintBrown hover:text-mintWhite border-mintBrown mr-4"><Link to="https://altschool-vue-github-repo.vercel.app/" target="blank" className="link no-underline text-black ">
              Live Project</Link></button>
              <button className="btn p-2 border-2 hover:bg-mintBrown hover:text-mintWhite border-mintBrown "><Link to="https://github.com/ChidinmaNwosu/Altschool-vue-github-repo" target="blank" className="link no-underline text-black ">
              Github View</Link></button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg">
            <img
              src="/images/react-github-repo-project.png"
             alt="react github fetch project" className="w-full rounded-md"/>
            <div className="p-4 ">
              <h2 className="font-bold text-2xl">Github repo fetch using react</h2>
              <p className="">Using react to fetch repositories from github, 
                there is pagination to help you sift through the repos and a single repo details 
                page that allows you view the details of a single repo...</p>
              <button className="btn p-2 border-2 hover:bg-mintBrown hover:text-mintWhite border-mintBrown mr-4 "><Link to="https://altschool-github-repo-portfolio.vercel.app/" target="blank" className="link no-underline text-black ">
              Live Project</Link></button>
              <button className="btn p-2 border-2 hover:bg-mintBrown hover:text-mintWhite border-mintBrown"><Link to="https://github.com/ChidinmaNwosu/Altschool-Github-repo-portfolio" target="blank" className="link no-underline text-black">
              Github View</Link></button>
            </div>
          </div>
          </div>
      </>
    </div>
  );
}

export default Project;
