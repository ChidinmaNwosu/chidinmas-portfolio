import { Link } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Skills from "../skills/Skills";


function Project() {
  return (
      <>
    <div className="min-h-screen">
        <NavBar />
        <h2>
          <Skills  />
        </h2>
        <h1 className="text-center text-4xl font-bold mt-20">Projects</h1>
        <h3 className="text-center p-2"> What I have been working on...</h3>
        <p className="text-center ">
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
                 <div className="flex gap-2">
              <button className=" p-2 border-2 hover:bg-mintBrown  hover:text-mintWhite border-mintBrown"><Link to="https://carefinder-alt-ec5v.vercel.app/" target="blank" className="  no-underline hover:text-white hover:bg-mintBrown">
              Live Project</Link></button>
              <button className=" p-2 border-2 hover:bg-mintBrown  hover:text-mintWhite border-mintBrown"><Link to="https://github.com/ChidinmaNwosu/carefinder-alt" target="blank" className=" no-underline  hover:text-white hover:bg-mintBrown">
              Github View</Link></button>
              </div>
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
              <div className="flex gap-2">
              <button className=" p-2 border-2 hover:bg-mintBrown hover:text-mintWhite border-mintBrown"><Link to="https://altschool-vue-github-repo.vercel.app/" target="blank" className=" no-underline  hover:text-white hover:bg-mintBrown">
              Live Project</Link></button>
              <button className=" p-2 border-2 hover:bg-mintBrown hover:text-mintWhite border-mintBrown "><Link to="https://github.com/ChidinmaNwosu/Altschool-vue-github-repo" target="blank" className=" no-underline  hover:text-white hover:bg-mintBrown">
              Github View</Link></button>
              </div>
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
                <div className="flex gap-2">
              <button className=" p-2 border-2 hover:bg-mintBrown hover:text-mintWhite border-mintBrown"><Link to="https://altschool-github-repo-portfolio.vercel.app/" target="blank" className=" no-underline  hover:text-white hover:bg-mintBrown">
              Live Project</Link></button>
              <button className=" p-2 border-2 hover:bg-mintBrown hover:text-mintWhite border-mintBrown"><Link to="https://github.com/ChidinmaNwosu/Altschool-Github-repo-portfolio" target="blank" className=" no-underline hover:text-white hover:bg-mintBrown">
              Github View</Link></button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg">
            <img
              src="/images/typescript-basics.png"
             alt="typescript slidev presentation" className="w-full rounded-md"/>
            <div className="p-4 ">
              <h2 className="font-bold text-2xl">Typescript basics</h2>
              <p className="">A slidev presentation showing the basics of typescript.</p>
              <div className="flex gap-2">
              <button className=" p-2 border-2 hover:bg-mintBrown hover:text-mintWhite border-mintBrown"><Link to="https://basics-typescript.vercel.app/" target="blank" className=" no-underline  hover:text-white hover:bg-mintBrown">
              Live Project</Link></button>
              <button className="p-2 border-2 hover:bg-mintBrown hover:text-mintWhite border-mintBrown"><Link to="https://github.com/ChidinmaNwosu/basics-typescript" target="blank" className=" no-underline hover:text-white hover:bg-mintBrown">
              Github View</Link></button>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg">
            <img
              src="/images/blog-post.png"
             alt="vue router" className="w-full rounded-md"/>
            <div className="p-4 ">
              <h2 className="font-bold text-2xl">Navigating successs: setting up vue router in your project.</h2>
              <p className="">A detailed breakdown on how to setup your vue router in a project to enable smooth and seamless navigation.</p>
              <div className="flex">
              <button className=" p-2 border-2 hover:bg-mintBrown hover:text-mintWhite border-mintBrown mr-4 "><Link to="https://medium.com/@chidinmaifynwosu/navigating-success-setting-up-vue-router-in-your-project-770fe3309603" target="blank" className=" no-underline  hover:text-white hover:bg-mintBrown">
              Medium link</Link></button>
              </div>
              
            </div>
          </div>
       </div>
    </div>
   </>
  );
}

export default Project;
