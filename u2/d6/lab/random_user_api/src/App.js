import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function App() {
  const [user, setUser] = useState({});
  const [content, setContent] = useState({ smallText: "", bigText: "" });
  const [error, setError] = useState(null);
  const [clickable, setClickable] = useState(true);

  const getUser = async (url, signal) => {
    setError(null);
    try {
      const data = await axios
        .get(url, { signal })
        .then((res) => {
          const { name, email, dob, location, phone, picture } =
            res.data.results[0];
          const dataRequire = {
            picture: picture.large,
            name: `${name.last} ${name.first}`,
            email: email,
            dob: dob.date,
            city: location.city,
            phone: phone,
          };
          return dataRequire;
        })
        .catch((err) => {
          throw new Error(err.message);
        });

      setUser(data);
      setContent({ smallText: "My name is", bigText: data.name });
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const url = "https://randomuser.me/api/";
    const controller = new AbortController();
    getUser(url, controller.signal);
    return () => {
      controller.abort();
    };
  }, [clickable]);

  const handleClick = (evt) => {
    switch (evt.target.id) {
      case "name":
        setContent({ smallText: "My name is", bigText: user.name });
        break;
      case "email":
        setContent({ smallText: "My email is", bigText: user.email });
        break;
      case "birthdate":
        setContent({ smallText: "My birthdate is", bigText: user.dob });
        break;
      case "city":
        setContent({ smallText: "My city is", bigText: user.city });
        break;
      case "phone":
        setContent({ smallText: "My phone is", bigText: user.phone });
        break;
      default:
        break;
    }
  };
  const styles = {
    backgroundImage: user.picture !== "" ? `url(${user.picture})` : "",
  };

  return (
    <>
      <button
        onClick={() => {
          setClickable(!clickable);
        }}
      >
        Pull Another Random User
      </button>
      <div id="container">
        <div style={styles} id="photo"></div>
        <div id="content">
          <span id="smalltext">{content.smallText}</span>
          <span id="bigtext">{content.bigText}</span>
        </div>
        <div onClick={handleClick} className="attribute">
          <span id="name" role="img" aria-labelledby="face">
            😀
          </span>
        </div>
        <div onClick={handleClick} className="attribute">
          <span id="email" role="img" aria-labelledby="email">
            📧
          </span>
        </div>
        <div onClick={handleClick} className="attribute">
          <span id="birthdate" role="img" aria-labelledby="confetti">
            🎉
          </span>
        </div>
        <div onClick={handleClick} className="attribute">
          <span id="city" role="img" aria-labelledby="city">
            🌆
          </span>
        </div>
        <div onClick={handleClick} className="attribute">
          <span id="phone" role="img" aria-labelledby="tele">
            📞
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
