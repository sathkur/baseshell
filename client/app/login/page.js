

export default function Login() {

    return (
        <div className='box my-10 mx-auto max-w-2xl'>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <svg className="mx-auto h-10 w-auto mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>

          <h2 className="heading_h4 text-center">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="body1">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="inputbox"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="link">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="inputbox"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center button button-primary "
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center ">
            Not a member?{' '}
            <a href="/signup" className="link">
              Sign up
            </a>
          </p>
        </div>
      </div>
      </div>
    );
}
