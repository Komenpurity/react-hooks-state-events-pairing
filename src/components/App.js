import video from "../data/video.js";
import Video from "./Video.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video url ={video.embedUrl} id={video.id} title={video.title}
      comments={video.comments} views = {video.views} createdAt={video.createdAt}
      upvotes={video.upvotes} downvotes = {video.downvotes}/>
    </div>
  );
}

export default App;
