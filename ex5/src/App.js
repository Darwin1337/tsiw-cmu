import { useState, useEffect } from 'react';
import Profile from './Profile.js';
import Menu from './Menu.js';
import Card from './Card.js';
import posts from './posts.json';

function App() {
  const [curView, setView] = useState("posts");
  const [curData, setData] = useState(posts);
  const [curLikedPosts, setLikedPosts] = useState(localStorage.likedPosts ? JSON.parse(localStorage.likedPosts) : []);

  useEffect(() => {
    // Fixes posts height on mount so it doesnt run on every render
    const getAbsoluteHeight = (el) => {
      el = (typeof el === 'string') ? document.querySelector(el) : el; 
      const styles = window.getComputedStyle(el);
      const extra = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);
      return el.offsetHeight + extra;
    };
    document.querySelector(".posts__content").style.maxHeight = `calc(100vh - 6rem - ${ getAbsoluteHeight(".posts__header") + getAbsoluteHeight("hr") }px)`;
    document.querySelector(".posts__content").style.minHeight = `calc(100vh - 6rem - ${ getAbsoluteHeight(".posts__header") + getAbsoluteHeight("hr") }px)`;
  }, []);

  useEffect(() => {
    // When the clicked menu item changes (curView), update the color of it's SVG's
    document.querySelectorAll("svg.link").forEach(elm => {
      elm.setAttribute("fill", (elm.parentElement.classList.contains("active")) ? "#c19647" : "#eee");
    });

    // Modify the data to render since we switched views
    setData(curView === "posts" ? posts : curLikedPosts);
  }, [curView, curLikedPosts]);

  return (
    <div className="row h-100 w-100">
      <div style={{ backgroundColor: "#15202B" }} className="col-xl-2 col-lg-3 col-md-4">
        <Profile user={{ name: "John Doe", bio: "Quisque id enim justo. Mauris eu commodo odio. Integer ut dictum sapien." }} />
        <Menu curView={ curView } setView={ setView } />
      </div>
      <div style={{ backgroundColor: "#1E2732" }} className="col-xl-10 col-lg-9 col-md-8">
        <div className="posts__wrapper p-5">
          <div className="posts__header">
            <h4 className="text-light">{ curView === "posts" ? "All posts" : "Liked posts" }</h4>
          </div>
          <hr className="my-5" />
          <div className="posts__content">
            { curData.map((post, index) => <Card key={ index } post={{...post, idx: index }} curLikedPosts={ curLikedPosts } setLikedPosts={ setLikedPosts } />) }
            { curData.length === 0 ? <p className="text-white">You haven't liked any posts yet</p> : null }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;