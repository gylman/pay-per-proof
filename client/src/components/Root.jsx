import React, { useState } from "react";
import styled from "styled-components";

import filter from "../assets/images/filter.svg";
import search from "../assets/images/search.svg";
import Outlet from "./Outlet";
import Button from "./pfa/components/UI/Button";
import classes from "./pfa/screens/styles/CreateEditFeedback.module.css";
import FormModal from "./FormModal";

const TableWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: #d6ebf2;
  backdrop-filter: blur(4px);
`;

const Head = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #d6ebf2;
`;

const HeadTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const HeadTopLeft = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const FilterBtn = styled.button`
  border: none;
  display: flex;
  align-items: center;
  border-radius: 6px;
  background: var(--White, #fff);
  box-shadow: 0px 2px 5px 0px rgba(89, 96, 120, 0.1),
    0px 0px 0px 1px rgba(70, 79, 96, 0.16), 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    background: lightblue;
  }
`;
const Search = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 6px;
  background: var(--White, #fff);
  box-shadow: 0px 0px 0px 1px rgba(104, 113, 130, 0.16),
    0px 1px 2px 0px rgba(0, 0, 0, 0.06);
  padding: 6px 12px;
  max-width: 320px;
  width: 100%;
`;

const SearchInput = styled.input`
  border: none;
  color: #5a9bb0;
  background: transparent;
  &:focus {
    outline: none;
  }
`;

const HeadTopRight = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Logo = styled.img`
  width: 32px;
`;
const Text = styled.span`
  font-family: Russo One;
  font-size: 22px;
  color: #5a9bb0;
`;

const HeadBottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #d6ebf2;
  position: sticky;
  bottom: 0;
`;

const Pagination = styled.div`
  display: flex;
  gap: 5px;
`;

const Element = styled.button`
  padding: 6px 11px;
  display: flex;
  color: #5a9bb0;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid lightgray;
  cursor: pointer;
`;

const LeftArr = styled.div`
  transform: rotate(90deg);
  color: #5a9bb0;
`;

const RightArr = styled.div`
  transform: rotate(-90deg);
  color: #5a9bb0;
`;

const Root = () => {
  const [value, setValue] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleChange = (e) => {
    setValue(e.target.value.trim());
  };

  const handleFilter = () => {
    if (!value) {
      txsCtx.handleTxs(() => txsCtx.data);
      return;
    }
    txsCtx.handleTxs(() =>
      txsCtx.data.filter((tx) => {
        return Object.values(tx).includes(value);
      })
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleFilter();
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: 1,
        }}
      >
        {showModal && <FormModal />}
      </div>

      <TableWrapper>
        <Head>
          <HeadTop>
            <HeadTopLeft>
              <Search>
                <img src={search} />
                <SearchInput
                  placeholder="Search..."
                  value={value}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
              </Search>
              <FilterBtn onClick={handleFilter}>
                <img src={filter} />
              </FilterBtn>
            </HeadTopLeft>
            <HeadTopRight>
              <Button
                className={classes.level_4}
                kind="default"
                paint="#AD1FEA"
                type="button"
                onClick={handleShowModal}
              >
                Request Advertisement
              </Button>
            </HeadTopRight>
          </HeadTop>
        </Head>
        <Outlet />
        <Footer>
          <Pagination>
            <Element>First</Element>
            <Element>
              <LeftArr>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="currentColor"
                >
                  <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414" />
                </svg>
              </LeftArr>
            </Element>
            <Element>Page 1 of 1000</Element>
            <Element>
              <RightArr>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="currentColor"
                >
                  <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414" />
                </svg>
              </RightArr>
            </Element>
            <Element>Last</Element>
          </Pagination>
        </Footer>
      </TableWrapper>
    </>
  );
};

export default Root;