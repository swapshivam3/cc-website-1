import React, { useState ,useEffect} from "react";
import "./Login.css"

function Login() {
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
  };

  return (
    <div>
      <div className="grid grid-cols-4 text-white font-body">
        <div className="col-span-2 bg-B4A797 h-96 text-center relative">
          <div className="top-20 left-48 px-4 bg-black bg-opacity-40 rounded-lg absolute">
            <form onSubmit={submitHandler}>
              <p className="mt-8 ml-10 text-left text-4xl">Sign Up</p>

              <div className="flex flex-row mt-0">

                <div className="flex flex-col py-4">
                  <label className="ml-10 tracking-wider text-base text-left">Email</label>
                  <input type="text" placeholder="Enter Your Email" className="outline-none py-1 px-1 bg-transparent rounded-xl ml-10 mr-10 border-red-700 border-r-2 border-l-2 w-64"  onChange={(e) => setemail(e.target.value)} />
                </div>


                <div className="flex flex-col py-4">
                  <label className="ml-10 tracking-wider text-base text-left">Name</label>
                  <input type="text" placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                    className="outline-none py-1 px-1 bg-transparent rounded-xl ml-10 mr-10 border-red-700 border-r-2 border-l-2 w-64" />
                </div>


                <div className="flex flex-col py-4">
                  <label className="ml-10 tracking-wider text-base text-left">Password</label>
                  <input type="text" placeholder="Set a Password" className="outline-none py-1 px-1 bg-transparent rounded-xl ml-10 mr-10 border-red-700 border-r-2 border-l-2 w-64"  onChange={(e) => setName(e.target.value)} />
                </div>
              </div>

              <div className="flex flex-row mt-0">
                <div className="flex flex-col py-4">
                  <label className="ml-10 tracking-wider text-base text-left">BITS_ID</label>
                  <input type="text" placeholder="2021XXXXXXXXP" className="outline-none py-1 px-1 bg-transparent rounded-xl ml-10 mr-10 border-red-700 border-r-2 border-l-2 w-64"  onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="flex flex-col py-4">
                  <label className="ml-10 tracking-wider text-base text-left">BITS_Email</label>
                  <input type="text" placeholder="f2021XXXX@pilani.bits-pilani.ac.in" className="outline-none py-1 px-1 bg-transparent rounded-xl ml-10 mr-10 border-red-700 border-r-2 border-l-2 w-64"  onChange={(e) => setemail(e.target.value)} />
                </div>

                <div className="flex flex-col py-4">
                  <label className="ml-10 tracking-wider text-base text-left">Github</label>
                  <input type="text" placeholder="Github Username" className="outline-none py-1 px-1 bg-transparent rounded-xl ml-10 mr-10 border-red-700 border-r-2 border-l-2 w-64"  onChange={(e) => setName(e.target.value)} />
                </div>
              </div>

              <div className="flex flex-row mt-0">
                <div className="flex flex-col py-4">
                  <label className="ml-10 tracking-wider text-base text-left">CodeForces_id</label>
                  <input type="text" placeholder="CodeForces id" className="outline-none py-1 px-1 bg-transparent rounded-xl ml-10 mr-10 border-red-700 border-r-2 border-l-2 w-64"  onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="flex flex-col py-4">
                  <label className="ml-10 tracking-wider text-base text-left">LinkedIn</label>
                  <input type="text" placeholder="LinkedIn id" className="outline-none py-1 px-1 bg-transparent rounded-xl ml-10 mr-10 border-red-700 border-r-2 border-l-2 w-64"  onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="flex flex-col py-4">
                  <label className="ml-10 tracking-wider text-base text-left">Summary</label>
                  <input type="text" placeholder="About Yourself" className="outline-none py-1 px-1 bg-transparent rounded-xl ml-10 mr-10 border-red-700 border-r-2 border-l-2 w-64"  onChange={(e) => setName(e.target.value)} />
                </div>
              </div>



              <div className="flex ml-10 mt-8">
                <button class="text-red-100  w-64 py-2 mb-8 rounded-2xl bg-red-700 border-2 border-BD4B4B hover:text-black  hover:bg-green-500 hover:border-green-500 transition ease-out duration-500">Submit</button>
                <div className="text-white text-xl  flex ml-36 align-middle">Already have an account?</div>
                <a href="/" className="text-xl font-bold flex align-middle ml-4 text-red-700">Login</a>

              </div>


            </form>
          </div>
        </div>
        <div className="col-span-2 bg-EFD4CB h-96 text-center"></div>
      </div>
    </div>

  );
}

export default Login;

