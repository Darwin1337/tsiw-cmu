export default function Menu(props) {
  return (
    <div className="user__links my-3 text-end d-flex flex-column gap-3">
        <a href="#posts" className={ (props.curView === "posts" ? "active" : "") } onClick={ () => props.setView("posts") }>All posts&nbsp;&nbsp;
            <svg className="link" fill="#eee" width="20px" height="20px" viewBox="0 0 24 24" aria-hidden="true"><g><path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path></g></svg>
        </a>
        <a href="#liked" className={ (props.curView === "liked" ? "active" : "") } onClick={ () => props.setView("liked") }>Liked &nbsp;&nbsp;
            <svg className="link" fill="#eee" width="20px" height="20px" viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path></g></svg>
        </a>
    </div>
  );
}
