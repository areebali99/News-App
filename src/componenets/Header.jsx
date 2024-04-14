import { React, useState } from "react";
import { HeaderContent, MainHeading, StyledHeader } from "../styles/Header";
import { Select, Input } from "antd";

function Header({ handleSearch, setSelectedValue, selectedValue }) {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (value) => {
    console.log(handleSearch, "seaacr");
    setSearchValue(value);
    handleSearch(value);
  };
  return (
    <StyledHeader>
      <HeaderContent
      >
        <div>
          <MainHeading>NEWSFEED</MainHeading>
        </div>
        <div>
          <p class="search__title">Go Ahead, Search Over</p>
          <Input
            style={{ width: 200 }}
            onChange={handleInputChange}
            placeholder="Search News"
          />

          <Select
            onChange={(selectedOption) => setSelectedValue(selectedOption)}
            placeholder="Select Filter"
            style={{ width: 200, margin: "20px" }}
            options={[
              { value: "Wall Street Journal", label: "Wall Street Journal" },
              { value: "Tech Chrunch", label: "Tech Chrunch" },
              { value: "Business Headines", label: "Business Headlines" },
            ]} 
           
          />
        </div>
      </HeaderContent>
    </StyledHeader>
  );
}

export default Header;
