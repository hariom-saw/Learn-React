import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Profile = () => {


    const { loggedInUser, setUserName } = useContext(UserContext);

    return (
        <div className="app-body min-h-96 container m-auto py-2 md:px-12 lg:px-7 flex justify-center items-center flex-col">
            <h4 className="text-bold text-3xl my-6 text-left"> Profile</h4>
            <div className="relative">
                <input type="text" className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" value={loggedInUser} placeholder="Enter name" onChange={(e) => setUserName(e.target.value)} />
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                    <svg class="flex-shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
            </div>
        </div>
    )
}

export default Profile