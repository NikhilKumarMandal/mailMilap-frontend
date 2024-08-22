import React from "react";
import { Link } from "react-router-dom";

function Card({ id, title }) {
  return (
    <Link to={`/todo/${id}`}>
      <div className="p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
        <div className="bg-black sm:p-10 p-6 rounded-xl">
          <div>
            <p className="mt-2 text-sm text-gray-400">{title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
