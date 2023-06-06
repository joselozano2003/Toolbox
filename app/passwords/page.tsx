import { PasswordGenerator } from "./passwordGenerator";

export const metadata = {
    title: 'Password Generator',
    description: 'Home page',
};

export default function Passwords() {
    return(
        <div>
            <h1 className="title">Secure Password Generator</h1>
            <h2 style={{textAlign: "center"}}>Choose a security level</h2>
            <PasswordGenerator />
        </div>
    )
}