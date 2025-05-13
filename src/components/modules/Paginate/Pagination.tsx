import React, { FC } from "react";
import { default as PaginationLibrary } from "react-js-pagination";
import { PaginationWrap } from "./style";

export interface PaginationProps {
  pageInfo: number[];
  totalCount: number;
  handlePageChange: (pageNumber: number) => void;
}

/**
 * @TODO svg 아이콘 파일로 빼기
 */
const carotLeft = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M15.1602 7.41L10.5802 12L15.1602 16.59L13.7502 18L7.75016 12L13.7502 6L15.1602 7.41Z" />
  </svg>
);

const carotRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    transform="rotate(180)"
  >
    <path d="M15.1602 7.41L10.5802 12L15.1602 16.59L13.7502 18L7.75016 12L13.7502 6L15.1602 7.41Z" />
  </svg>
);

export const Pagination: FC<PaginationProps> = ({
  pageInfo,
  totalCount,
  handlePageChange,
}) => {
  return (
    <PaginationWrap>
      <PaginationLibrary
        activePage={pageInfo[0]}
        itemsCountPerPage={pageInfo[1]}
        totalItemsCount={totalCount}
        prevPageText={carotLeft}
        nextPageText={carotRight}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        hideFirstLastPages
        itemClass="page-item"
        linkClass="page-link"
        activeClass="active"
      />
    </PaginationWrap>
  );
};
