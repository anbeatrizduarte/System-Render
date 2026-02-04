import react from "react";
import { Link } from "react-router-dom"

export function Register() {
    return (

        <div className="fixed inset-0 flex">
            <div className="bg-purple-400 w-1/2 rounded-r-2xl"></div>
            <div className="w-1/2">
                <div className="grid">
                    <p className="text-8xl mt-12">REGISTER</p>
                    <form submit="" className="mt-32 text-left justify-center grid gap-12">
                        <div className="grid gap-4 ">
                            <label htmlFor="username" className="text-xl">Username:</label>
                            <input type="text" className="border-1 w-96 p-1 rounded-sm" />
                        </div>

                        <div className="grid gap-4 ">
                            <label htmlFor="email" className="text-xl">Email:</label>
                            <input type="email" className="border-1 w-96 p-1 rounded-sm" />
                        </div>

                        <div className="grid gap-4">
                            <label htmlFor="password" className="text-xl">Password:</label>
                            <input type="password" className="border-1 w-96 p-1 rounded-sm" />
                        </div>

                        <div className="flex justify-center">
                            <button className="bg-purple-400 w-32 h-12 rounded-2xl cursor-pointer text-white">REGISTRE</button>
                        </div>

                        <div className="flex justify-center">
                            <p>Ja possui conta? <span className="underline cursor-pointer"><Link to="/register">Faca login</Link></span></p>
                        </div>

                    </form>

                </div>

            </div>
        </div>


    );
}


