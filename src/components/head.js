import "../styles/head.css"
export default function Head({pfp,name,designation}){

return(<>
    <div class="carousel-item active">
     <div class="d-flex justify-content-around">
                        {/* <div class="profile-card">
                            <img src={pfp} alt="Profile"/>
                            <h6>{name}</h6>
                            <p>{designation}</p>
                        </div> */}

                    </div>
                 </div> 


                 <div class="carousel-item active">
                    <div class="d-flex justify-content-around">
                        <div class="profile-card">
                            <img src="https://via.placeholder.com/150" alt="Profile"/>
                            <h6>MUHAMMAD AROQAM</h6>
                            <p>Graphic Designing Head</p>
                        </div>
                        <div class="profile-card">
                            <img src="https://via.placeholder.com/150" alt="Profile"/>
                            <h6>JAWAD MOHSIN</h6>
                            <p>Development Head</p>
                        </div>
                    </div>
                </div> 

                
    </>)
}