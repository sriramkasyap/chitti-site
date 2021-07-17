import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../styled/Container";
import { FlexCSS } from "../styled/FlexBox";

const Pagination = ({ limit, page, setPagination, totalCount, loading }) => (
  <Container>
    <PaginationHolder w="100%" mt={10} justifyContent="space-between" alignItems="center">
      <button
        type="button"
        className="prev-btn"
        disabled={page < 1}
        onClick={() => {
          setPagination({
            limit,
            page: page - 1,
          });
        }}
      >
        {loading ? <img src="/images/loader_black.gif" alt="" /> : "Previous"}
      </button>
      <p>
        Page {page + 1} of {Math.ceil(totalCount / limit)}
      </p>
      <button
        type="button"
        className="next-btn"
        disabled={page >= Math.floor(totalCount / limit)}
        onClick={() => {
          setPagination({
            limit,
            page: page + 1,
          });
        }}
      >
        {loading ? <img src="/images/loader_black.gif" alt="" /> : "Next"}
      </button>
    </PaginationHolder>
  </Container>
);

const PaginationHolder = styled.div`
  ${FlexCSS}
  justify-content: center;
  margin: -30px 0 100px;
  button {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 50px;
    padding: 7px 20px;
    font-family: ${({ theme }) => theme.fonts.text};
    margin: 0 30px;
    font-size: 1rem;
    &:disabled {
      border-color: ${({ theme }) => theme.colors.grey};
      color: ${({ theme }) => theme.colors.grey};
    }
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
    }
    img {
      max-height: 20px;
      margin: -7px 0;
    }
  }
`;

Pagination.propTypes = {
  limit: PropTypes.number,
  page: PropTypes.number,
  totalCount: PropTypes.number,
  setPagination: PropTypes.func,
};

Pagination.defaultProps = {
  limit: 0,
  page: 0,
  totalCount: 0,
  setPagination: () => {},
};

export default Pagination;
