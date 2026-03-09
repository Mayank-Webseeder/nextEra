// src/app/affiliate/register/page.jsx
import AuthRegisterForm from "@/components/AuthRegisterForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col text-white bg-black">
      <Header />

      {/* Video Background */}
      <div className="relative flex-grow">

        <div className="relative z-10 flex items-center justify-center px-4">
          <AuthRegisterForm
            title="Create Account"
            subtitle="Register your account"
            buttonText="Create Account"
            redirectText="Already have an account?"
            redirectLink="/auth/login"
            redirectLabel="Login"
            variant="register"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}