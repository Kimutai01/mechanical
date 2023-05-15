import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#161616] md:w-[85%] px-10 rounded-lg pb-10">
      <div className="flex flex-col md:flex-row mt-10 gap-5">
        <div className="flex flex-col md:w-[50%]">
          <label for="name" className="text-white mb-3">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
          />
        </div>
        <div className="flex flex-col md:w-[50%]">
          <label for="phone" className="text-white mb-3">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your phone number.."
            className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-10 gap-5">
        <div className="flex flex-col md:w-[50%]">
          <label for="car" className="text-white mb-3">
            Car
          </label>
          <input
            type="text"
            id="car"
            name="name"
            placeholder="Enter your car model.."
            className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
          />
        </div>
        <div className="flex flex-col md:w-[50%]">
          <label for="email" className="text-white mb-3">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email address.."
            className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
          />
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <label for="subject" className="text-white mb-3">
          Message
        </label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          height="350px"
          className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
        ></textarea>
      </div>

      <button className="why-btn flex items-center mt-10 mb-10 ">
        <h1>Get Appointment now</h1>
      </button>
    </div>
  );
};

export default ContactForm;
