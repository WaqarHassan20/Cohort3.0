import axios from "axios";

export default async function Profile() {
 
    // Ugly approach for fetching data in next js //
    // this apporach is mostly used in react js //

    // const [profilePicture, setProfilePicture] = useState("");

    // useEffect(()=>{
    //     axios.get("http://localhost:3000/api/profile", {
    //         headers:{
    //             Authorization:localStorage.getItem("token")
    //         }
    //     }).then((res)=>{setProfilePicture(res.data.avatarURL)})
        
    // },[])

    const res = await axios.get("http://localhost:3000/api/profile",{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    })
    const profilePicture = res.data.avatarURL;

    return (
        <div>
            {profilePicture}
        </div>
    );
    
}