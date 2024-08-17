import NavBar from "../navbar/NavBar";
import Skills from "../skills/Skills";

function Project() {
  return (
    <div className="min-h-screen">
      <>
        <NavBar />
        <h2>
          <Skills />
        </h2>
        <h1 className="text-center text-4xl font-bold mt-20">Projects</h1>
        <h3 className="text-center p-2"> What I have been working on...</h3>
        <p className="text-center">
          Take a look at some of the applications I have been working on
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/images/care-project.png"
             alt="carefinder project" />
            <div className="p-4">
              <h2 className="font-bold text-2xl">Carefinder</h2>
              <p className="">Project Description</p>
              <button className="p-2 border-2 hover:bg-mintBrown hover:text-mintWhite border-mintBrown m-4">Live Project</button>
              <button className="p-2 border-2 hover:bg-mintBrown hover:text-mintWhite border-mintBrown">Github view</button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/images/vue-gihub-repo-project.png"
             alt="vue github fetch project" />
            <div className="p-4">
              <h2 className="font-bold text-2xl">Github repo fetch using vue.</h2>
              <p className="">Project Description</p>
              <button className="p-2 border-2 hover:bg-mintBrown hover:text-mintWhite border-mintBrown m-4">Live Project</button>
              <button className="p-2 border-2 hover:bg-mintBrown hover:text-mintWhite border-mintBrown">Github view</button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/images/react-github-repo-project.png"
             alt="react github fetch project" />
            <div className="p-4">
              <h2 className="font-bold text-2xl">Github repo fetch using react</h2>
              <p className="">Project Description</p>
              <button className="p-2 border-2 hover:bg-mintBrown hover:text-mintWhite border-mintBrown m-4">Live Project</button>
              <button className="p-2 border-2 hover:bg-mintBrown hover:text-mintWhite border-mintBrown">Github view</button>
            </div>
          </div>
          </div>
      </>
    </div>
  );
}

export default Project;
