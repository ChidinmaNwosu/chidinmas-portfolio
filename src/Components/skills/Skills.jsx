import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import {FaHtml5} from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiVuejsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import "react-multi-carousel/lib/styles.css";


function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <section className="border-[0.2px] border-red-600">
      <Container className="mx-auto m-5 border-[0.2px] border-red-600">
        <Row>
          <Col>
            <div className=" border-[0.2px] border-red-600">
              <h2 className="text-center text-4xl font-bold border-[0.2px] border-red-600">Skills</h2>
              <p className="text-center font-thin text-2xl leading-8 border-[0.2px] border-red-600"> Some Skills I&apos;ve Acquired on this Journey...</p>
              <p className="text-center font-thin text-2xl border-[0.2px] border-red-600">Through my studies, I&apos;ve gained some knowlegde of some frontend developement concepts using these skills:</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="p-2 xl:w-[80%] mx-auto mt-8 border-[0.2px] border-red-600"
                spaceBetween={2}
              >
                <div className="flex flex-col items-center border-[0.2px] border-red-600">
                  <span className="border-[0.2px] border-red-600"><FaHtml5 size={100} color="#ff4500"/></span>
                  <h5>HTML</h5>
                </div>
                <div className="flex flex-col items-center border-[0.2px] border-red-600">
                  <span className="border-[0.2px] border-red-600"><FaCss3Alt size={100} color="#264de4"/></span> 
                  <h5>CSS</h5>
                </div>
                <div className="flex flex-col items-center border-[0.2px] border-red-600">
                <span className="border-[0.2px] border-red-600"><RiTailwindCssFill size={100} color="#00d8ff"/></span> 
                <h5>TAILWIND</h5>
                </div>
                <div className="flex flex-col items-center border-[0.2px] border-red-600">
                <span className="border-[0.2px] border-red-600"><FaGithubSquare size={100} color="#bd2c00"/></span> 
               <h5>GIT/GITHUB</h5>
                </div>
                <div className="flex flex-col items-center border-[0.2px] border-red-600">
                  <span className="border-[0.2px] border-red-600"><FaReact size={100} color="#00d8ff"/></span> 
                 <h5>REACT</h5>
                </div>
                <div className="flex flex-col items-center border-[0.2px] border-red-600">
                  <span className="border-[0.2px] border-red-600"><RiVuejsFill size={100} color=" #41B883" /></span> 
                  <h5>VUE</h5>
                </div>
                <div className="flex flex-col items-center border-[0.2px] border-red-600">
                  <span className="border-[0.2px] border-red-600"><SiTypescript size={100} color="#007acc"/></span> 
                  <h5>TYPESCRIPT</h5>
                </div>
                <div className="flex flex-col items-center border-[0.2px] border-red-600">
                  <span className="border-[0.2px] border-red-600"><FaBootstrap size={100} color="#aa00ff"/></span> 
                  <h5>BOOTSTRAP</h5>
                  </div>
                <div className="flex flex-col items-center border-[0.2px] border-red-600">
                  <span className="border-[0.2px] border-red-600"><RiNextjsFill size={100} color="#000000"/></span> 
                  <h5>NEXT</h5>
                  </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
     </section>
 );
}

export default Skills;


    

