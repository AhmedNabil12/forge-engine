import "./LogIn_SignUp.css";
import { useForm } from "react-hook-form";
import { click } from "@testing-library/user-event/dist/click";

function LogIn_SignUp() {

    const test = () => {
        const switchers = [...document.querySelectorAll('.switcherlogs')]
        switchers.forEach(item => {
          item.addEventListener('click', function() {
            switchers.forEach(item => item.parentElement.classList.remove('is-active'))
            this.parentElement.classList.add('is-active')
          })
        })
      };
  
    const {
        register,
        handleSubmit,   
        getValues,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("signed up successfully");
    };

    return (
       
            <section
                className="formslogs-sectionlogs">
                <div className="formslogs">
                    <div
                        className="formlogs-wrapperlogs is-active">
                        <button
                            type="button"
                            className="switcherlogs switcherlogs-loginlogs" >
                            Login
                            <span className="underlinelogs"></span>
                        </button>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="formlogs formlogs-loginlogs">
                            <fieldset>
                                <legend>Please, enter your email and password for login.</legend>

                                <div className="input-blocklogs">
                                    <label htmlFor="login-email">E-mail</label>
                                    <input
                                        id="login-emaillogs"
                                        type="email"
                                        placeholder="Enter your email..."
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email?.type === "required" && "email is required"}
                                </div>

                                <div className="input-blocklogs">
                                    <label htmlFor="login-password">Password</label>
                                    <input
                                        id="login-passwordlogs"
                                        type="password"
                                        placeholder="Enter your password..."
                                        {...register("password", {
                                            required: true,
                                            pattern: /^.*[a-zA-Z].*[@!_-].*[0-9]$/,
                                        })}
                                    />
                                    {errors.password?.type === "validate" && "passwords doesn't match!"}
                                    {errors.password?.type === "required" && "password is required"}
                                    {errors.password?.type === "pattern" &&
                                        "password must be in this syntax: (letters captial or small)(special charaters @!_-)(numbers) in example : XYZ_123"}
                                </div>
                            </fieldset>
                            <button type="submit" className="btn-loginlogs">Login</button>
                        </form>
                    </div>
                    <div
                        className="formlogs-wrapperlogs">
                        <button
                        onClick={test}
                            type="button"
                            className="switcherlogs switcherlogs-signuplogs">
                            Sign Up
                            <span className="underlinelogs"></span>
                        </button>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="formlogs formlogs-signuplogs">
                            <fieldset>
                                <legend>Please, enter your email, password and password confirmation for sign up.</legend>

                                <div className="input-blocklogs">
                                    <label htmlFor="signup-Name">Name</label>
                                    <input id="signup-Namelogs"
                                        type="text"
                                        placeholder="Enter your name..."
                                        {...register("name", { required: true })}
                                    />
                                    {errors.name?.type === "required" && "name is required"}
                                </div>

                                <div className="input-blocklogs">
                                    <label htmlFor="signup-email">E-mail</label>
                                    <input
                                        id="signup-emaillogs"
                                        type="email"
                                        placeholder="Enter your email..."
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email?.type === "required" && "email is required"}
                                </div>

                                <div className="input-blocklogs">
                                    <label htmlFor="signup-password">Password</label>
                                    <input id="signup-passwordlogs"
                                        type="password"
                                        placeholder="Enter your password..."
                                        {...register("password", {
                                            required: true,
                                            pattern: /^.*[a-zA-Z].*[@!_-].*[0-9]$/,
                                        })}
                                    />
                                    {errors.password?.type === "validate" && "passwords doesn't match!"}
                                    {errors.password?.type === "required" && "password is required"}
                                    {errors.password?.type === "pattern" &&
                                        "password must be in this syntax: (letters captial or small)(special charaters @!_-)(numbers) in example : XYZ_123"}
                                </div>

                                <div className="input-blocklogs">
                                    <label htmlFor="signup-password-confirm">Confirm password</label>
                                    <input
                                        id="signup-password-confirmlogs"
                                        type="password"
                                        placeholder="Re-enter your password..."
                                        {...register("repassword", {
                                            required: true,
                                            validate: (val) => {
                                                if (watch("password") !== val) {
                                                    return "password does not match!";
                                                }
                                            },
                                        })}
                                    />
                                    {errors.repassword?.type === "required" && "password is required"}
                                    {errors.repassword?.type === "validate" &&
                                        "password does not match!"}
                                </div>

                            </fieldset>
                            <button type="submit" className="btn-signuplogs">Continue</button>
                        </form>
                    </div>
                </div>
            </section>
        

    );
}
export default LogIn_SignUp;

