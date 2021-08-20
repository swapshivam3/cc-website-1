import React, { useState } from 'react'
import './Login.css'
// import img from './'
function Login() {

    const [firstName, setfirstName] = useState(" ")
    const [lastName, setlastName] = useState(" ")

    const submitHandler = e => {
        e.preventDefault()
        alert(`HELLO ${firstName} ${lastName} YOU ARE SUCCESSFULLY REGISTERED`)

    }
    return (
        <div className="grid grid-cols-3 text-tt font-body">
            <div className="col-span-1 border-yellow-600 border-2 bg-gray-500 relative">
                <img src="https://picsum.photos/id/1/500/520" alt=""></img>
                {/* <div className="absolute top-10 ml-2 mt-2 text-3xl">CODING CLUB</div> */}
                </div>
            <div className="col-span-2 border-red-600 border-2 bg-bm">

                <form onSubmit={submitHandler}>
                    <label className="p-8 flex justify-center text-6xl text-tt">Registration</label>
                    <div className="flex flex-col">
                        <div className="p-8 flex justify-center">
                            <label className="text-2xl required">First Name</label>
                            <input type="text" onChange={e => setfirstName(e.target.value)} className="border-yellow-600 border-2 ml-4"></input>

                        </div>

                        <div className="p-8 flex justify-center">
                            <label className="text-2xl required">Last Name</label>
                            <input type="text" onChange={e => setlastName(e.target.value)} className="border-yellow-600 border-2 ml-4"></input>
                        </div>

                        {/* <div className="p-8 flex justify-center">
                            <label className="text-2xl">First Name</label>
                            <input type="text" className="border-yellow-600 border-2 ml-4"></input>
                        </div> */}
                    </div>
                    {/* <div className="flex justify-center">
                        <a href="google.com" class="text-white btn border-primary hover:bg-primary hover:text-white transition ease-out duration-500">Cancel</a> */}
                    {/* <button>    <a href="google.com" class="text-white ml-2 btn border-primary hover:bg-primary hover:text-white transition ease-out duration-500">Confirm</a></button>
                    </div>
                     */}
                     <div className="flex justify-center">
                     <button class="text-white btn border-primary hover:bg-primary hover:text-white transition ease-out duration-500">Submit</button>
                     </div>
    
                </form>
        </div>
        </div >
    )
}

export default Login
