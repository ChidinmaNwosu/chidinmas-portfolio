// import React from 'react'
import NavBar from "../navbar/NavBar";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { BiLogoDevTo } from "react-icons/bi";
import "../about/about.css";

function About() {
  return (
    <div >
      <NavBar />
      <>
        <div className="background-img flex flex-col-reverse gap-2 lg:flex-row lg:items-center ">
          {/*Enable flex*/}
          <div className=" p-5 lg:basis-1/2">
            {/*create a text container*/}
            <h1 className=" text-5xl leading-6 py-4 lg:text-start max-lg:text-center ">
              About Me
            </h1>
            <p className=" para leading-9 mt-2 text-lg ">
              <span className="text-3xl"> Hi! I&apos;m Chidinma,</span> a
              budding frontend developer. When I&apos;m not coding, you can find
              me watching movies of every genre and language, enjoying anime, or
              diving into novels —lately, I&apos;ve been especially captivated
              by African literature. I&apos;m currently part of the frontend
              track at Altschool Africa.
              <br />
              My journey into tech started from scratch. I knew nothing about
              the field, but now I&apos;ve learned HTML and CSS, how to
              manipulate the DOM with JavaScript, and even how to use APIs to
              fetch data from my GitHub. I may not be the best, but I love
              seeing my small ideas evolve into engaging and interactive user
              interfaces. Watching something go from bare HTML to a dynamic user
              experience is truly exciting for me!
            </p>

            {/* create a social media container*/}
            <div className="flex gap-2">
              <Link
                to={"https://github.com/ChidinmaNwosu"}
                target="_blank"
                className=" text-4xl text-mintBlack hover:animate-bounce"
              >
                <FaGithub />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/chidinma-nwosu-484155236"}
                target="_blank"
                className="text-4xl hover:animate-bounce"
              >
                <FaLinkedin />
              </Link>
              <Link
                to={
                  "https://x.com/NwosuChidinma19?t=R64-gFYeX_NOeuNQ7hKghA&s=09"
                }
                target="_blank"
                className="text-4xl text-mintWhite rounded-full bg-mintBlack hover:animate-bounce "
              >
                <FaXTwitter />
              </Link>
              <Link
                to={"https://medium.com/@chidinmaifynwosu"}
                target="_blank"
                className="rounded-md text-3xl px-1 bg-mintBlack text-mintWhite hover:animate-bounce"
              >
                <FaMedium />
              </Link>
              <Link
                to={"https://dev.to/chidinma_nwosu"}
                target="_blank"
                className=" text-4xl bg-mintBlack text-mintWhite hover:animate-bounce "
              >
                <BiLogoDevTo />
              </Link>
            </div>
          
          </div>

          <div className="mt-2 lg:basis-1/2 p-4">
            {/*Image container*/}
            <img
              src="../images/chidinma6.jpg"
              alt="Chidinma's avatar"
              className="md:h-[550px] md:w-[395px] md:mx-auto rounded-full "
            />
          </div>
        </div>
      </>
    </div>
  );
}

export default About;
