import React, { Suspense, useState } from "react"
import AuthLayout from "../layouts/auth"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import Loader from "../components/common/Loader.jsx"
import { USERS_URL } from "../services/routes.js";

const OnboardingProcess1Page = React.lazy(() => import("./OnboardingProcess1.jsx"))
const OnboardingProcess2Page = React.lazy(() => import("./OnboardingProcess2.jsx"))
const OnboardingProcess3Page = React.lazy(() =>
  import("./OnboardingProcess3.jsx")
);
const OnboardingProcess4Page = React.lazy(() =>
  import("./OnboardingProcess4.jsx")
);
const OnboardingProcess5Page = React.lazy(() =>
  import("./OnboardingProcess5.jsx")
);

const SignUp = () => {
    const navigate = useNavigate()
    const [signupstate, setSignupState] = useState(0)
    const [error, setError] = useState("")
    // const [states, setstates] = useState({name:'', address:'', age:''});
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        job: "",
        country: "",
        companysize: "",
        describe: "",
        challenge: "",
    })
    const isValidEmail = email => {
        return /\S+@\S+\.\S+/.test(email)
    }
    const changePage = id => {
        setError(null)
        // e.preventDefault();
        if (id === 1) {
            if (!isValidEmail(inputs.email) || inputs.email === "") {
                setError("Email is invalid")
            } else if (inputs.password === "") {
                setError("Password is required")
            } else {
                setError(null)
                setSignupState(id)
            }
        } else if (id === 2) {
            if (inputs.firstname === "") {
                setError("First Name is required")
            } else if (inputs.lastname === "") {
                setError("Last Name is required")
            } else if (inputs.job === "") {
                setError("Job is required")
            } else if (inputs.country === "") {
                setError("Country is required")
            } else {
                setError(null)
                setSignupState(id)
            }
        } else if (id === 3) {
            // setCompanysize(0);
            console.log('input is:', inputs)
            console.log('id is: ',id)
            setSignupState(id)
        } else if (id === 4) {
            setSignupState(id)
            console.log('id is: ',id)
            console.log('input is:', inputs)
        } else if (id === 5) {
            if (inputs.describe === "") {
                setError("Describe about them is required")
            } else {
                setError(null)
                setSignupState(id)
            }
        } else {
            setChallenge(0)
            setError(null)
            setSignupState(id)
        }
    }
    const setEmail = e => {
        const { name, value } = e.target
        setInputs(inputs => ({ ...inputs, [name]: value }))
        console.log(inputs)
    }

    const setFirstInput = e => {
        const { name, value } = e.target
        setInputs(inputs => ({ ...inputs, [name]: value }))
        console.log(inputs)
    }

    const setJob = job => {
        setInputs(inputs => ({ ...inputs, job: job }))
        console.log(inputs)
    }
    const setCountry = country => {
        setInputs(inputs => ({ ...inputs, country: country }))
        console.log(inputs)
    }
    const setCompanysize = companysize => {
        setInputs(inputs => ({ ...inputs, companysize: companysize }))
        console.log(inputs)
    }
    const setDescribeInput = e => {
        const { name, value } = e.target
        setInputs(inputs => ({ ...inputs, [name]: value }))
        console.log(inputs)
    }
    const setChallenge = challenge => {
        setInputs(inputs => ({ ...inputs, challenge: challenge }))
        console.log('challenge is:', challenge)
        console.log('inputs for now is:', inputs)
    }
    const signUp = () => {
        console.log('inputs for signUp is:', inputs)
        axios
          .post(`${USERS_URL}/api/users`, inputs)
          .then((response) => {
            navigate("/login");
            // alert(response.data);
          })
          .catch((error) => {
            alert("disconnect server");
            navigate("/");
            console.error(error);
          });
    }

    const project = () => {
        switch (signupstate) {
            case 1:
                return (
                  <Suspense fallback={<Loader />}>
                    <OnboardingProcess1Page
                      firstname={inputs.firstname}
                      lastname={inputs.lastname}
                      setInput={setFirstInput}
                      setpage={changePage}
                      setJob={setJob}
                      setCountry={setCountry}
                      error={error}
                    />
                  </Suspense>
                );
            case 2:
                return (
                    <Suspense fallback={<Loader />}><OnboardingProcess2Page
                        setpage={changePage}
                        setCompanysize={setCompanysize}
                    /></Suspense> 
                )
            case 3:
                return  <Suspense fallback={<Loader />}><OnboardingProcess3Page setpage={changePage} /></Suspense>
            case 4:
                return (
                     <Suspense fallback={<Loader />}><OnboardingProcess4Page
                        setpage={changePage}
                        setDescribeInput={setDescribeInput}
                        error={error}
                    /></Suspense>
                )
            case 5:
                return (
                  <Suspense fallback={<Loader />}>
                    <OnboardingProcess5Page signup={signUp} setChallenge={setChallenge} />
                  </Suspense>
                );

            // case 3: return <ComponentC />;
            // case 4:  return <ComponentD />;

            default:
                return (
                  <AuthLayout r={"/graphic/auth/g1.svg"}>
                    {/* <form onSubmit={changePage.bind(this, 1)}> */}
                    <div className="w-[100%] h-[100vh] py-[100px] mobile:px-[25px] laptop:px-[80px]">
                      <div className=" mobile:w-[100%] laptop:w-[500px] h-[100%] flex flex-col justify-center">
                        <h1 className="text-[35px] font-extrabold">
                          Create new account
                        </h1>
                        <p className="text-[17px] font-medium mt-[10px]">
                          Create a new account.
                        </p>
                        <div className="w-[100%] border-[1px] overflow-hidden mobile:mt-[10px] laptop:mt-[40px] rounded-[4px] border-[#0000006B] flex ">
                          <div className="w-[50px] h-[60px] flex items-center justify-center shrink-0">
                            <img src="/graphic/auth/mail.svg" alt="" />
                          </div>
                          <input
                            type="email"
                            className="w-[100%] h-[100%] text-[16px] font-medium px-[12px] outline-none"
                            placeholder="Email Address"
                            name="email"
                            onChange={(e) => setEmail(e)}
                          />
                        </div>
                        <div className="w-[100%] border-[1px] overflow-hidden mt-[20px] rounded-[4px] border-[#0000006B] flex ">
                          <div className="w-[50px] h-[60px] flex items-center justify-center shrink-0">
                            <img src="/graphic/auth/lock.svg" alt="" />
                          </div>
                          <input
                            type="password"
                            className="w-[100%] h-[100%] text-[16px] font-medium px-[12px] outline-none"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => setEmail(e)}
                          />
                        </div>
                        {error && <p>{error}</p>}
                        <div
                          className="w-[100%] h-[50px] mt-[20px] bg-[#E14857] rounded-[3px] text-[#fff] font-bold tracking-wide cursor-pointer flex items-center justify-center"
                          type="submit"
                          onClick={() => changePage(1)}>
                          Continue with email
                        </div>
                        <p className="mt-[20px] text-[#000000AB] font-medium">
                          By clicking “Continue with Email” above, you
                          acknowledge that you have read and understood, and
                          agree to Salesensei Terms & Conditions and Privacy
                          Policy.
                        </p>
                        <div className="d-flex mt-4">
                          <p>
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-blue-600 italic">
                              <u>Log In</u>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* </form> */}
                  </AuthLayout>
                );
        }
    }

    return <div>{project()}</div>
}

export default SignUp
