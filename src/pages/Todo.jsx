import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../pages/Home";
import Card from "../components/ui/Card";

const Todo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api(`/todos/${id}`);
        setTodo(data);
        setIsLoading(false);
      } catch (error) {
        setError("Failed to load todo");
        setIsLoading(false);
      }
    };

    getData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
              }}
              className="bg-gray-800 text-red-400 rounded-md p-50"
      >
        Back
      </button>
      <Card key={todo.id} id={todo.id} title={todo.title} />
    </>
  );
};

export default Todo;

