import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useLoaderData } from "react-router-dom";

const Profile = () => {

    const gitHubData = useLoaderData();
    const { loggedInUser, setUserName } = useContext(UserContext);

    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
                <h4 className="text-bold text-3xl my-6 text-left"> Profile</h4>

                <div className="flex content-start">
                    <div className="max-w-max sm:p-4 px-4 mb-6">
                        <input type="text" className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" value={loggedInUser} placeholder="Enter name" onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-3xl text-gray-900">{gitHubData?.company}</h2>
                        <p className="leading-relaxed">Company</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-3xl text-gray-900">{gitHubData?.location}</h2>
                        <p className="leading-relaxed">Location</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-3xl text-gray-900">{gitHubData?.public_repos}</h2>
                        <p className="leading-relaxed">Repos</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Profile

// Pre load
export const gitHubInfo = async () => {
    const response = await fetch("https://api.github.com/users/hariom-saw")
    return response.json();
}