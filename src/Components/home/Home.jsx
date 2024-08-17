import { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {useNavigate} from "react-router-dom";

function Home() {
  //Use useNavigate to navigate to the about page
  const navigate = useNavigate();

  //Set state and use useEffect to give the text a typewriter feature.
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Hello, World!",
    "I'm Chidinma Nwosu,",
    "Frontend Developer.",
  ];
  const [text, setText] = useState("");
  const [letterSpeed, setLetterSpeed] = useState(300 - Math.random() * 100);
  const period = 3000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, letterSpeed);

    return () => {
      clearInterval(ticker);
    };
  },[text] );

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setLetterSpeed((prevLetterSpeed) => prevLetterSpeed / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setLetterSpeed(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setLetterSpeed(100);
    }
  };

//using useEffect to create an ease in/out animation of my background image
  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease-in-out",
    });
  }, []);


//adding an event handler to navigate to the about page(trigger the useNavigate hook)
const handleClick = () => {
    navigate('/about');
  };

  return (
    <>
      <NavBar />
      <div className="background-image flex gap-4 justify-center items-center text-center text-5xl" data-aos="fade-zoom-in">
        <div>
          <p className="h-[3rem]">{text}</p>
          <button onClick={handleClick} className="mt-3 bg-mintBlack px-6 py-3 text-mintWhite rounded-md text-2xl hover:bg-mintBrown">
            More About Me
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
