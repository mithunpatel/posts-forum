import { useSelector } from "react-redux";
import {useMain} from "../hooks/";
import Posts from "./Posts";
import User from "./User";
import Post from "./Post";
// import Search from "./Search";

const MainPage = () => {
  useMain();
  const posts = useSelector((state) => state.main.posts);
  const current = useSelector((state) => state.main.current);


  return (
    <section className="main-section">
      <div>
        {/* If want searchbar as global */}
        {/* <Search /> */}
      </div>
      <div>
        {current === 1 ? (
          <Posts posts={posts} />
        ) : current === 3 ? (
          <Post />
        ) : (
          <User user={posts} />
        )}
      </div>
    </section>
  );
};
export default MainPage;
