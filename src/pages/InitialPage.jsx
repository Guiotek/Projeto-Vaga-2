import React from "react";
import "../styles/InitialPage.css";
import Search from "../components/search.jsx";
import Header from "../components/header.jsx";
import { useState } from "react";
import Loading from "../components/loading.jsx";
import NotFound from "../components/notFound.jsx";
import UserCard from "../components/userCard.jsx";

const InitialPage = () => {
  const [valueInput, setValue] = useState("");
  const [user, setUser] = useState({
    name: "",
    image: "",
    bio: "",
    isloading: false,
    isValid: true,
  });
  return (
    <div className="initial-page">
      <Header />
      <Search
        searchUser={setUser}
        setValue={setValue}
        valueInput={valueInput}
      />
      {user.isValid && user.name ? (
        <UserCard
          name={user.name ? user.name : "não tem nome"}
          image={user.image}
          bio={user.bio ? user.bio : "não tem bio"}
        />
      ) : null}
      {user.isloading ? <Loading /> : null}
      {!user.isValid ? <NotFound /> : null}
    </div>
  );
};

export default InitialPage;
