import { Header } from "./Header";
import { Nav } from "./Nav";
import { Home } from "./Home";
import { NewPost } from "./NewPost";
import { PostPage } from "./PostPage";
import { Abourt } from "./Abourt";
import { Missing } from "./Missing";
import { Footer } from "./Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Home />
      <NewPost />
      <PostPage />
      <Abourt />
      <Missing />
      <Footer />
    </div>
  );
}

export default App;
