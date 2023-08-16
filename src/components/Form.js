import React from 'react';
import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';

const countries = [
    "India",
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "Japan",
    "China",
    "South Korea",
    "Brazil",
    "Mexico",
    "Russia",
    "South Africa",
    "Nigeria",
    "Egypt",
    "Saudi Arabia",
    "United Arab Emirates",
];

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section>
            <div className="register">
                <div className="col-1">
                    <h3>Sign Up</h3>
                    <span>Register and enjoy the service</span>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("username")} placeholder='Username' />
                        <input type="password" {...register("password")} placeholder='Password' />
                        <input type="password" {...register("confirmpwd")} placeholder='Confirm Password' />
                        <input type="email" {...register("email")} placeholder='Email' />
                        <input type="text" {...register("mobile", { required: true, maxLength: 10 })} placeholder='Mobile Number' />
                        {errors.mobile?.type === "required" && "Mobile Number is required"}
                        {errors.mobile?.type === "maxLength" && "Max Length Exceeded"}
                        {/* Gender Dropdown */}
                        <select {...register("gender")} defaultValue="">
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                        {/* Country Dropdown */}
                        <select {...register("country")} defaultValue="">
                            <option value="">Country</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                        {/* Other Fields */}
                        <input type="text" {...register("address")} placeholder='Address' />
                        <input type="text" {...register("city")} placeholder='City' />
                        {/* Avatar Upload */}
                        <input type="file" {...register("Avatar")} accept="image/*" placeholder="Avatar" />
                        
                        <button className='btn' style={{ padding: '.9em 1em' }}>Sign Up</button>
                    </form>
                </div>
                <div className="col-2">
                    <img src={bgImg} alt="" />
                </div>
            </div>
        </section>
    );
}
