import { useState } from "react";
import { handleLogin,handleRegister } from "../../Service/Login.service";
import { useNavigate, } from "react-router";

const AuthForm = () => {
    const [isRegister, setIsRegister] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response="";
            if(isRegister){
                response=await handleRegister({name,email,password});
            } else {
                response = await handleLogin({email});
            }
            
            console.log("the respose",response)
            setMessage(response.data.message);
            localStorage.setItem("token",JSON.stringify(response?.data?.token));
            navigate("/createRoom");
        } catch (err) {
            setMessage(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                {isRegister ? "Register" : "Login"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                {isRegister && (
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                    </label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                    </label>
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors duration-300"
                >
                    {isRegister ? "Register" : "Login"}
                </button>
                </form>

                {message && (
                <p className="text-green-600 text-center mt-4 font-medium">{message}</p>
                )}

                <button
                onClick={() => setIsRegister(!isRegister)}
                className="mt-4 w-full text-blue-600 hover:text-blue-800 text-sm font-medium underline"
                >
                Switch to {isRegister ? "Login" : "Register"}
                </button>
            </div>
            </div>
    );
};

export default AuthForm;
