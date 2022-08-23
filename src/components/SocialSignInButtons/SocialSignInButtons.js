import CustomButton from "../CustomButton";

const SocialSignInButtons = () => {
  const facebook = () => {
    alert("Facebook");
  };
  const google = () => {
    alert("Google");
  };
  return (
    <>
      {/* fgColor is text color */}

      <CustomButton
        onPress={facebook}
        text="Sign In with Facebook"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />

      <CustomButton
        onPress={google}
        text="Sign In with Google"
        bgColor="#E3E3E3"
        fgColor="#FB344D"
      />
    </>
  );
};

export default SocialSignInButtons;
