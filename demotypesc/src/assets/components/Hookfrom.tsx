
import { useForm, type SubmitHandler } from "react-hook-form";


interface FormData {
    name: string,
    email: string,
    password: string
}

const Hookfrom = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" {...register("name", { required: "Name is required" })} />
                {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
               

                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email", { required: "Email is required" })} />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                

                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password", { required: "Password is required" })} />
                {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                <button type="submit">Submi</button>

            </div>

        </form>
    )
}

export default Hookfrom