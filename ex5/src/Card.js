import users from './users.json';

export default function Card(props) {
  const user = users.find(user => user.id === props.post.userId);

  const likePost = () => {
    // Animate heart SVG
    const svgElm = document.querySelectorAll("svg.post")[props.post.idx];
    const nextState = svgElm.classList.contains("active") || svgElm.getAttribute("fill") === "#c19647" ? "inactive" : "active";
    svgElm.classList.add(nextState);
    svgElm.classList.remove(nextState === "active" ? "inactive" : "active");
    svgElm.style.animationName = "none";
    requestAnimationFrame(() => setTimeout(() => svgElm.style.animationName = "", 0));

    if (nextState === "active") {
      // Add to liked posts
      if (!props.curLikedPosts.some(post => post.id === props.post.id)) {
        props.setLikedPosts(previousLikes => [...previousLikes, props.post]);
        localStorage.likedPosts = JSON.stringify([...props.curLikedPosts, props.post]);
      }
    } else {
      // Remove from liked posts
      if (props.curLikedPosts.some(post => post.id === props.post.id)) {
        props.setLikedPosts(previousLikes => previousLikes.filter(post => post.id !== props.post.id));
        localStorage.likedPosts = JSON.stringify([...props.curLikedPosts].filter(post => post.id !== props.post.id));
        svgElm.classList.remove("active", "inactive");
      }
    }
  }

  return (
    <div onClick={ likePost } className="post__wrapper d-flex align-items-center justify-content-between mb-4 me-4">
      <div className="post__info">
        <div className="post__header d-flex align-items-center gap-2 mb-2">
          <div className="user__avatar post">
            <img src={ user.photo } alt="User avatar"></img>
          </div>
          <div className="user__name">
            <p className="text-light"><strong>{ user.name }</strong></p>
          </div>
        </div>
        <p className="text-light">{ props.post.body }</p>
      </div>
      <div className="post__like ms-5">
        <svg className="post" fill={ (props.curLikedPosts.some(post => post.id === props.post.id) ? "#c19647" : "#5a6c7d") } width="20px" height="20px" viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path></g></svg>
      </div>
    </div>
  );
}
