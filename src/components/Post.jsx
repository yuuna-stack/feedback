import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Post() {
  const params = useParams();
  const status = 200;
  if (status === 404) {
    return <Navigate to="/notfound" />;
  }
  return <div>Post {params.id}</div>;
}

export default Post;
