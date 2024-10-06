export default function lider({ message, buttontext,imgSrc,altText ,isActive}) {
  return (
    <>
      <div class={`carousel-item ${isActive ? 'active' : ''}` }  data-bs-interval="2000">
        <img src={imgSrc} class="d-block w-100" alt={altText} />
        <div class="carousel-caption d-none d-md-block">
          <h5>
            <span class="bigger-text">Bahria</span>
            <span class="smaller-text">University Developers</span>
            <span class="bigger-text">Society</span>
          </h5>
          <div id="text">
            <p>{message}</p>
          </div>
          <a href="#">
            <button>{buttontext}</button>
          </a>
        </div>
      </div>
    </>
  );
}
