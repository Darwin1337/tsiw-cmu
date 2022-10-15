export default function Profile(props) {
  return (
    <>
      <div className="reactr__logo d-flex flex-column align-items-center justify-content-center my-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
          <title>React Logo</title>
          <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
        <p className="reactr__name my-3">Reactr</p>
      </div>
      <div className="user__info">
        <div className="user__header d-flex flex-column align-items-center gap-2">
          <div className="user__avatar">
            <img src="https://thispersondoesnotexist.com/image" alt="User avatar"></img>
          </div>
          <div className="user__name">
              <p className="text-light"><strong>{ props.user.name }</strong></p>
          </div>
          <div className="user__bio">
              <p className="text-center">{ props.user.bio }</p>
          </div>
        </div>
      </div>
    </>
  );
}
