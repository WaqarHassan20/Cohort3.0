"use client";
import Link from "next/link";
export function AuthPage({isSignin}:{isSignin:boolean}) {

return   (
          
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8 w-full max-w-md text-white">
              
                <h2 className="text-3xl font-extrabold text-center mb-6 text-cyan-400 drop-shadow-md">
                {isSignin ? 'Sign In' : 'Sign Up'}
                </h2>

                <input
                    type = "text"
                    placeholder="Enter your name"
                    className={`w-full px-4 py-2 bg-zinc-800 m-2 text-white placeholder-gray-300 border border-white/20 rounded-lg backdrop-blur focus:outline-none focus:ring-2 focus:ring-cyan-400 `}
                />

                <input
                    type = "email"
                    placeholder="Enter your email"
                    className={`w-full px-4 py-2 bg-zinc-800 m-2 text-white placeholder-gray-300 border border-white/20 rounded-lg backdrop-blur focus:outline-none focus:ring-2 focus:ring-cyan-400 `}
                />

                <input
                    type = "password"
                    placeholder="Enter your password"
                    className={`w-full px-4 py-2 bg-zinc-800 m-2 text-white placeholder-gray-300 border border-white/20 rounded-lg backdrop-blur focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                />

              <div className="my-4 flex justify-center">
                <button
                  type="submit"
                  className="w-52 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition duration-300"
                >
                  {isSignin ? 'Sign In' : 'Sign Up'}
                </button>
              </div>

              <div className="my-4 flex justify-center">
                <Link
                  href={isSignin ? '/signup' : '/signin'}
                  className="w-52 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-center rounded-lg transition duration-300"
                >
                  {isSignin
                    ? "Don't have an account? Sign Up"
                    : 'Already have an account? Sign In'}
                </Link>
              </div>


          </div>
)}




//           {!isSignIn && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-lg backdrop-blur focus:outline-none focus:ring-2 focus:ring-cyan-400"
//               required
//             />
//           )}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-lg backdrop-blur focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             className="w-full px-4 py-2 bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-lg backdrop-blur focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             required
//           />
//         </form>
//         <p className="mt-6 text-center text-sm text-gray-400">
//           <button
//             onClick={() => setIsSignIn(!isSignIn)}
//             className="text-cyan-400 hover:underline"
//           >

//             {isSignIn ? 'Sign Up' : 'Sign In'}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }
