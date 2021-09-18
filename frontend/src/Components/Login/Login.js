// import "./App.css";
import React, { useState, useEffect } from "react";
import "./Login.css";

function App() {
  const [Name, setName] = useState(" ");
  const [email, setemail] = useState("");
  const [num, setnum] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setemail(localStorage.getItem("email"));
    setnum(localStorage.getItem("number"));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`HELLO ${Name} YOU ARE SUCCESSFULLY REGISTERED`);
    localStorage.setItem("name", Name);
    localStorage.setItem("email", email);
    localStorage.setItem("number", num);
  };

  return (
    <div>
      <div className="grid grid-cols-4 text-white font-body">
        {" "}
        {/*container*/}
        <div className="col-span-2 bg-B4A797 h-96 text-center relative">
          {" "}
          {/*top-left*/}
          <div className="top-20 left-48 px-4 bg-black opacity-90 rounded-lg absolute">
            {" "}
            {/*form*/}
            <form onSubmit={submitHandler}>
              <p className="mt-8 ml-10 text-left text-4xl">Contact Us</p>{" "}
              {/*head*/}
              <div className="flex flex-col mt-0">
                {" "}
                {/*fields*/}
                <div className="flex flex-col py-4">
                  {" "}
                  {/*columns*/}
                  <label className="ml-10 tracking-wider text-base text-left">
                    Name
                  </label>{" "}
                  {/*labels*/}
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                    value={Name}
                    className="outline-none py-1 px-1 bg-transparent rounded-xl ml-10 mr-10 border-red-700 border-r-2 border-l-2 w-64"
                  />{" "}
                  {/*input-fields*/}
                </div>
                <div className="flex flex-col py-4">
                  {" "}
                  {/*columns*/}
                  <label className="ml-10 tracking-wider text-base text-left">
                    Mobile No.
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Mobile No."
                    onChange={(e) => setnum(e.target.value)}
                    value={num}
                    className="outline-none py-1 px-1 bg-transparent rounded-xl ml-10 mr-10 border-red-700 border-r-2 border-l-2 w-64"
                  />{" "}
                  {/*input-fields*/}
                </div>
                <div className="flex flex-col py-4">
                  {" "}
                  {/*columns*/}
                  <label className="ml-10 tracking-wider text-base text-left">
                    Email
                  </label>{" "}
                  {/*labels*/}
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className="outline-none py-1 px-1 bg-transparent rounded-xl ml-10 mr-10 border-red-700 border-r-2 border-l-2 w-64"
                  />{" "}
                  {/*input-fields*/}
                </div>
                {/* <div className="flex flex-col py-4">  columns */}
                {/* <label className="text-lg required"></label> */}
                {/* <input type="text" placeholder="Leave a Message for us....."
                          onChange={(e) => setlastName(e.target.value)} 
                          className="py-1 px-1 bg-transparent rounded-xl ml-10 border-yellow-700 border-r-8 border-l-8 w-64" /> */}
                {/*input-fields*/}
                {/* </div> */}
                <div className="flex justify-center mt-2">
                  {" "}
                  {/*button-div*/}
                  <button class="text-red-100  w-64 py-2 mb-8 rounded-2xl bg-red-700 border-2 border-BD4B4B hover:text-black  hover:bg-green-500 hover:border-green-500 transition ease-out duration-500">
                    Submit
                  </button>{" "}
                  {/*button*/}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-span-2 bg-EFD4CB h-96 text-center"></div>{" "}
        {/*top-right*/}
      </div>
    </div>
  );
}

export default App;
