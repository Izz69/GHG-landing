import DevCard from "../components/devcard";
import "../styles/developers.css"
import rizwanPfp from "../assests/assests/rizwan.jpg";
import baasilPfp from "../assests/assests/baasil.jpeg";
export default function Developers() {
    const data = [
        {
            pfp: rizwanPfp, // Corrected 'assests' to 'assets'
            name: "Rizwan Ansar",
            designation: "Senior Developer",
            email: "rizwanansar690@gmail.com",
            linkedin: "https://www.linkedin.com/in/rizwanansar83/"
        },
        {
            pfp: baasilPfp,
            name: "Baasil Irfan",
            designation: "Senior Developer",
            email: "baasilrazriz@gmail.com",
            linkedin: "https://www.linkedin.com/in/muhammad-basil-irfan-rizvi-886157215/"
        }
    ];

    return (
        <>
        <div class="devpage">
            <div class="text">
                <h2>Contact Developers</h2>
                <p>You can connect with the developers that helped create this platform.</p>
            </div>
            <div class="cards">
                {data.map((d) => (
                    <DevCard
                        key={d.email} // Use a unique key
                        pfp={d.pfp}
                        name={d.name}
                        designation={d.designation}
                        email={d.email}
                        linkedin={d.linkedin}
                    />
                ))}
            </div></div>
        </>
    );
}
