import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Страница не найдена</h1>
      <br />
      <Link href="/" className="link">
        Вернуться на главную страницу
      </Link>
    </div>
  );
};

export default NotFound;
