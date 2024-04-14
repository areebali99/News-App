/* eslint-disable no-unused-vars */ import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../componenets/Footer";
import Header from "../componenets/Header";
import Loader from "../componenets/Loader";
import Main from "../componenets/Main";



function Home() {
  const [general, setGeneral] = useState([]);
  const [headlines, setHeadlines] = useState([]);
  const [teslaNews, setTeslaNews] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState();
  const [selectedValue, setSelectedValue] = useState("selected");
  useEffect(() => {
    setLoading(true);
    axios
      .all([
        axios.get(
          `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d94453989aa84cefafc5077779cb5cf0`
        ),

        axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d94453989aa84cefafc5077779cb5cf0`
        ),
        axios.get(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d94453989aa84cefafc5077779cb5cf0`
        ),
      ])
      .then((res) => {
        setGeneral(res[0].data.articles);
        setTeslaNews(res[1].data.articles);
        setHeadlines(res[2].data.articles);
        setFilteredArticles(res[0].data.articles);
   

        setLoading(false);
      })
      .catch((err) => {
        console.log(err[0]);
      });
  }, []);
  let filterArray = [];
  const handleSearch = (inputValue) => {
    filterArray = [...general, ...teslaNews, ...headlines];
    console.log(inputValue.target.value, "input value");
    setSearchTerm(inputValue.target.value);
    const filtered = filterArray.filter((article) =>
      article.title.includes(inputValue.target.value)
    );
    setFilteredArticles(filtered);
  };

  return (
    <div>
      <Header
        handleSearch={handleSearch}
        filteredArticles={filteredArticles}
        setSelectedValue={setSelectedValue}
      />
      {!loading ? (
        <>
          <Main
            general={general}
            teslaNews={teslaNews}
            headlines={headlines}
            filteredArticles={filteredArticles}
            searchTerm={searchTerm}
            selectedValue={selectedValue}
          />

          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Home;
