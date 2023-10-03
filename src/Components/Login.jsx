import toast from "react-hot-toast";
import UseAuth from "../ContexHooks/UseAuth";
import SocialLogin from "./Media/SocialLogin";

const Login = () => {
  const { loginUser } = UseAuth();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;


     //pass validation
     if (password.length < 6) {
      toast.error("password must be 6 charaacter");
      return;
    }

    //login user
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="w-full max-w-md p-4 mx-auto mt-5 mb-8 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
        <p className="text-sm text-center dark:text-gray-400">
          Dont have account?
          <a href="#" rel="noopener noreferrer" className="focus:underline hover:underline">
            Sign up
          </a>{" "}
          here
        </p>
        <div className="my-6 space-y-4">
          <div className="flex justify-center items-center gap-2 border p-3 rounded-md">
            Login with <SocialLogin />
          </div>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-400" />
          <p className="px-3 dark:text-gray-400">OR</p>
          <hr className="w-full dark:text-gray-400" />
        </div>
        <form onSubmit={handleSignIn} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm">Password</label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
