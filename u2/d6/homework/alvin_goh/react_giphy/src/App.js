import React, { useState, useEffect } from "react";
import Img from "./components/Img";
import axios from "axios";
import Form from "./components/Form";

function App() {
  const GIPHYKEY = process.env.REACT_APP_API_KEY;
  const [error, setError] = useState(null);
  const [giphy, setGiphy] = useState({});
  const [searchKeyWrd, setSearchKeyWrd] = useState("");
  const [randomGiphy, setRandomGiphy] = useState(true);
  const [baseUrl, setBaseUrl] = useState(
    `https://api.giphy.com/v1/gifs/random?api_key=${GIPHYKEY}`
  );
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(true);

  // const params = { api_key: GIPHYKEY };
  // const data = axios
  //   .get("https://api.giphy.com/v1/gifs/random", { params })
  //   .then((res) => {
  //     console.log(res.data.data);
  //   });

  const getGiphy = async (url, signal) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await axios
        .get(url, { signal })
        .then((res) => {
          let responseData = randomGiphy ? res.data.data : res.data.data[0];
          const { title } = responseData;
          const { downsized_large } = responseData.images;
          const dataRequire = {
            src: downsized_large.url,
            width: downsized_large.width,
            height: downsized_large.height,
            title: title,
          };
          return dataRequire;
        })
        .catch((err) => {
          throw new Error(err.message);
        });
      setGiphy(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // if (!randomGiphy) {
    //   params.p = searchKeyWrd;
    // } else {
    //   if ("p" in params) {
    //     delete params.p;
    //   }
    // }
    const controller = new AbortController();
    getGiphy(baseUrl, controller.signal);
    return () => {
      controller.abort();
    };
  }, [toggle, baseUrl]); // eslint-disable-line react-hooks/exhaustive-deps

  const fieldOnChange = (evt) => {
    setSearchKeyWrd(evt.target.value);
    if (evt.target.value.length > 0) {
      setRandomGiphy(false);
    } else {
      setRandomGiphy(true);
    }
  };

  const searchBtnClicked = (evt) => {
    evt.preventDefault();
    if (randomGiphy) {
      setBaseUrl(`https://api.giphy.com/v1/gifs/random?api_key=${GIPHYKEY}`);
    } else {
      setBaseUrl(
        `https://api.giphy.com/v1/gifs/search?api_key=${GIPHYKEY}&q=${searchKeyWrd}`
      );
    }
    setToggle(!toggle);
  };

  return (
    <div className="container">
      <Form
        fieldOnChange={fieldOnChange}
        value={searchKeyWrd}
        searchBtnClicked={searchBtnClicked}
      />
      <div className="row justify-content-center">
        <h2 className="text-center mb-5">Pull random gifs from Giphy</h2>
        {isLoading && (
          <div
            class="spinner-border text-primary"
            style={{ width: "3em", height: "3em" }}
          ></div>
        )}
        {!isLoading && (
          <Img
            src={giphy.src}
            width={giphy.width}
            height={giphy.height}
            title={giphy.title}
          />
        )}
        {!isLoading && error && <p className="text-center">{error}</p>}
      </div>
    </div>
  );
}

export default App;
