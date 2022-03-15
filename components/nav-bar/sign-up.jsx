import Link from "next/link";

const SignUp = () => {
      return (
            <>
                  <Link href={'/sign-up'}><a className="text-base font-normal text-white bg-gradient-to-r from-[#189FC8] to-[#24D495] px-7 py-4 rounded-32px">Sign up</a></Link>  
            </>
      );
}

export default SignUp;