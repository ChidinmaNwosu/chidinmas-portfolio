/* eslint-disable no-unused-vars */
import NavBar from "../navbar/NavBar";
import {useState} from "react";

function Contact() {

  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, message } = formDetails;
  
  const subject = "Contact Form Submission";
  const body = ` I am ${name},${message}, this is my ${email}`;
  const mailtoLink = `mailto:chidinmaifynwosu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
  }

  return (
    <>
      <NavBar />
      <div>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center p-3">
          <div className="p-4 hidden lg:block ">
            <img src="../images/contact-us.svg"/>
            <p className="text-4xl pt-3 transform transition-transform duration-300 hover:scale-90 ">Want to work with me?</p>
            <p className="text-3xl transform transition-transform duration-300 hover:scale-90 ">Let&apos;s connect!</p>
            <p className="text-xl transform transition-transform duration-300 hover:scale-90 ">I am open to <span className="font-bold">remote</span> and <span className="font-bold ">on-site fulltime</span>, part-time and contract frontend web development jobs.</p>
          </div>
          <div className="lg:w-1/2 ">
            <h1 className="text-3xl font-bold pb-2 ">Contact Me</h1>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-3" >
                <label className="font-bold text-xl">Name</label>
                <input
                  type="text"
                  className="border-4 p-3 border-mintBrown lg:p-4 lg:w-[80%]"
                  placeholder="Enter name here"
                  onChange={(e) => onFormUpdate("name", e.target.value)} 
                />
              </div>
              <div className="grid gap-3">
                <label className="font-bold text-xl">Email</label>
                <input
                  type="text"
                  className="border-4 p-3 border-mintBrown lg:p-4 lg:w-[80%]"
                  placeholder="Enter mail here"
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                />
              </div>
              <div className="grid gap-3 ">
                <label className="font-bold text-xl ">Message</label>
                <textarea
                  cols={5}
                  rows={5}
                  placeholder="Enter message here"
                  className="border-4 p-3 border-mintBrown lg:p-4 lg:w-[80%]"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                ></textarea>
                <div className="relative p-4 lg:w-[80%] h-[80px] mt-4 border-[3px] border-mintBrown hover:border-none transition-all">
                <button className="absolute p-4 right-[9px] bottom-2 bg-mintBrown text-mintWhite text-2xl text-bold w-full ">
                  CONNECT
                </button>
                </div>

                {status.message && (
                  <div>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </div>
                )}

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
