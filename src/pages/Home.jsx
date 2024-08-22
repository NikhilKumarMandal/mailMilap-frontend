import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/ui/Card";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

function Home() {
   const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await api("/todos");

        setPosts(data);
      } catch (error) {
        alert("error hai");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div>
      {isLoading
        ? "loading"
        : posts.map((post) => (
            <Card key={post.id} id={post.id} title={post.title} />
          ))}
        </div>
      );
}

export default Home