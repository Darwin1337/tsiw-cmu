import { useState } from "react";
import { HiExclamationCircle, HiCheckCircle } from "react-icons/hi";

export default function Register() {
    const [user, setUser] = useState({ name: "", email: "", phone: "", nif: "", address: { address: "", postalCode: "" }, obs: "" });
    const [message, setMessage] = useState({ success: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage({ success: "", message: "" });

        if (!user.name.trim())
            return setMessage({ success: false, message: "Please provide a valid name." });

        if (!user.phone.match(/^(9[1236]\d{7}|2\d{8})$/))
            return setMessage({ success: false, message: "Please provide a valid phone number, ex: (912 345 678)." });

        if (user.nif.length < 9 || user.nif.length > 9)
            return setMessage({ success: false, message: "Please provide a valid NIF. A valid NIF should have exactly 9 digits." });

        if (!user.address.address.trim())
            return setMessage({ success: false, message: "Please provide a valid address." });

        if (!user.address.postalCode.match(/^\d{4}(-\d{3})?$/))
            return setMessage({ success: false, message: "Please provide a valid postal code, ex: (5000-100)." });
        
        setMessage({ success: true, message: "Your registration has been successfully sent." });
        console.log("Success! User registered successfully.");
        console.log(user);
        setUser({ name: "", email: "", phone: "", nif: "", address: { address: "", postalCode: "" }, obs: "" });
        setTimeout(() => setMessage({ success: "", message: "" }), 2500);
    }

    const handlePostalCodeChange = (e) => {
        const cpValue = e.target.value.replace(/\D/g, "");
        if (cpValue.length < 7)
            return setUser((rest) => ({ ...rest, address: { ...rest.address, postalCode: cpValue } }));
        setUser((rest) => ({ ...rest, address: { ...rest.address, postalCode: cpValue.slice(0, 4) + "-" + cpValue.slice(4, 7) } }));
    }

    return (
        <fieldset className="w-full border border-solid rounded-lg border-gray-300 p-3 mx-auto">
            <legend className="text-sm font-medium px-2">Register</legend>
            <form onSubmit={ handleSubmit }>
                <div className="mb-3">
                    <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-900">Name:</label>
                    <input type="text" id="name" value={ user.name } onChange={ (e) => setUser((rest) => ({ ...rest, name: e.target.value })) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-900">E-mail:</label>
                    <input type="email" id="email" value={ user.email } onChange={ (e) => setUser((rest) => ({ ...rest, email: e.target.value })) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 sm:col-span-6 mb-3">
                        <label htmlFor="phone" className="mb-2 text-sm font-medium text-gray-900">Phone number:</label>
                        <input type="number" id="phone" min="0" maxLength="9" value={ user.phone } onChange={ (e) => setUser((rest) => ({ ...rest, phone: e.target.value.length < 9 ? e.target.value : e.target.value.slice(0, 9) })) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="col-span-12 sm:col-span-6 mb-3">
                        <label htmlFor="nif" className="mb-2 text-sm font-medium text-gray-900">NIF:</label>
                        <input type="number" id="nif" min="0" maxLength="9" value={ user.nif } onChange={ (e) => setUser((rest) => ({ ...rest, nif: e.target.value.length < 9 ? e.target.value : e.target.value.slice(0, 9) }))  } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 sm:col-span-9 mb-3">
                        <label htmlFor="address" className="mb-2 text-sm font-medium text-gray-900">Address:</label>
                        <input type="text" id="address" value={ user.address.address } onChange={ (e) => setUser((rest) => ({ ...rest, address: { ...rest.address, address: e.target.value } })) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="col-span-12 sm:col-span-3 mb-3">
                        <label htmlFor="postalcode" className="mb-2 text-sm font-medium text-gray-900">Postal code:</label>
                        <input type="text" id="postalcode" value={ user.address.postalCode } onChange={ handlePostalCodeChange } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="obs" className="mb-2 text-sm font-medium text-gray-900">Observations <small>(optional)</small>:</label>
                    <textarea id="obs" value={ user.obs } onChange={ (e) => setUser((rest) => ({ ...rest, obs: e.target.value })) } rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Register</button>
            </form>
            <div style={{ display: message.message ? "flex" : "none" }} className="bg-gray-200 mt-3 p-3 rounded-lg flex gap-2">
                { !message.success ? <HiExclamationCircle className="h-6 w-6 text-gray-700" /> : <HiCheckCircle className="h-6 w-6 text-blue-700" /> }
                <p className="font-medium text-gray-700">{ message.message }</p>
            </div>
        </fieldset>
    );
}