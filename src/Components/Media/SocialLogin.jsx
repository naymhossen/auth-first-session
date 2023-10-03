import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  const handleSocialLogin = (media) => {
    media()
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <button onClick={() => handleSocialLogin(googleLogin)} className="animate-pulse underline">
          Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
