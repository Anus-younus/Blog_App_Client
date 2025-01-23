import { createContext, useContext } from "react"

const UserContext = createContext(null)

const UserContextProvider = ({ children }) => {
    const handlesignupUser = async (name, email, password) => {
        const url = "http://localhost:5000/auth/register";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    role: "user"
                })
            },)
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error.message);
        }
    }

    const handleLoginUser = async (email, password) => {
        const url = "http://localhost:5000/auth/login";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                })
            },)
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            localStorage.setItem('TOKEN', json.data.token)
            console.log(json.data.token);
        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <UserContext.Provider value={{ handlesignupUser, handleLoginUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)
export default UserContextProvider