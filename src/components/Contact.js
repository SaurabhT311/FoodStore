import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <p>Welcome to the Contact Page</p>
      <form>
        <input
          className="border border-black p-2 m-2"
          type="text"
          placeholder="name"
        />
        <input
          className="border border-black p-2 m-2"
          type="text"
          placeholder="message"
        />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
