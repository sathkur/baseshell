

export default function Login() {

    return (
        <>
            <div className="">
                <LoginForm/>
            </div>

            <div class="font-medium md:h-screen flex items-center content-center">
        <div class="mr-auto ml-auto w-full">
            <div class="w-full max-w-md mr-auto ml-auto mt-4 mb-1 text-center">
                <h1 class="text-gray-800 block text-3xl font-extrabold font-title">Sign in to your account</h1>
            </div>
            <div class="w-full max-w-md mr-auto ml-auto mt-43 mb-6 text-center font-medium text-sm">
                Or
                <a href="#"
                   class="text-indigo-600 hover:text-indigo-800 duration-200 transition-all">start your 14-day free trial</a>
            </div>
            <div class="w-full max-w-md mr-auto ml-auto mt-4">
                <div class="bg-white shadow rounded-md px-8 py-8 mb-4 ml-auto mr-auto">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-medium mb-2" for="username"> Email
                            address </label>
                        <input class="shadow-sm appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
                               id="username" type="text" placeholder="user@example.com"/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-medium mb-2" for="username"> Password </label>
                        <input class="shadow-sm appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-600 text-sm leading-tight focus:outline-none focus:border-indigo-300"
                               id="password" type="password" placeholder="***************"/>
                    </div>
                    <div class="mb-6">
                        <div class="grid sm:grid-cols-2 gap-4">
                            <div class="text-center sm:text-left">
                                <label>
                                    <input type="checkbox" class="mr-2"/>
                                    <span class="text-sm font-medium text-gray-700 ">Remember me</span>
                                </label>
                            </div>
                            <div class="text-center sm:text-right">
                                <a href="#"
                                   class="text-indigo-600 font-medium text-sm duration-200 transition-colors hover:text-indigo-800">Forgot
                                    your password?</a>
                            </div>
                        </div>
                    </div>
                    <div class="mb-6">
                        <button type="button"
                                class="bg-indigo-600 hover:bg-indigo-400 shadow-sm text-white font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all">
                            Sign in
                        </button>
                    </div>
                    <div class="grid sm:grid-cols-3 gap-0 mb-6">
                        <hr class="mt-3 hidden sm:block border-gray-400"/>
                        <span class="text-center bg-white text-sm text-gray-700 font-normal">Or continue with</span>
                        <hr class="mt-3 hidden sm:block border-gray-400"/>
                    </div>
                    <div class="grid grid-cols-3 gap-2">
                        <button type="button" class="relative border-solid border shadow-sm border-gray-400
                        font-semibold text-gray-600 text-sm py-1 text-center rounded text-center w-full
                        focus:outline-none hover:border-indigo-600 transition-all duration-200">
                            <i class="fab fa-google text-lg" style={{lineHeight: "28px"}}></i>
                        </button>
                        <button type="button" class="relative border-solid border shadow-sm border-gray-400
                        font-semibold text-gray-600 text-sm py-1 px-0 rounded text-center w-full
                        focus:outline-none hover:border-indigo-600 transition-all duration-200">
                            <i class="fab fa-twitter text-lg" style={{lineHeight: "28px"}}></i>
                        </button>
                        <button type="button" class="relative border-solid border shadow-sm border-gray-400
                        font-semibold text-gray-600 text-sm py-1 px-0 rounded text-center w-full
                        focus:outline-none hover:border-indigo-600 transition-all duration-200">
                            <i class="fab fa-linkedin text-lg" style={{lineHeight: "28px"}}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}

function LoginForm() {

    return (
        <>
            <h2 className="heading_h2">Sign in to your account</h2>
            <div className="bg-white rounded-xl p-8 mt-32">
                <form className="group relative">
                    <h2 class="font-semibold text-slate-900">Projects</h2>
                    <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                    </svg>
                    <input type="text" aria-label="Filter projects" placeholder="E-mail"  className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"/>
                </form>
                <input type="text" aria-label="Filter projects" placeholder="Password"  className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"/>

                <a href="/new" className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
                    <svg width="20" height="20" fill="currentColor" className="mr-2" aria-hidden="true">
                        <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                    </svg>
                    Login
                </a>
            </div>
        </>
    );
}