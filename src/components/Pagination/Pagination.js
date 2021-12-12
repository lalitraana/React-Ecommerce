import React from "react";
import { useSelector } from "react-redux";

const Pagination = ({
  currentPage,
  onGoPage,
  perPage,
  onPrevPage,
  onNextPage,
}) => {
  const totalItemsCount = useSelector((state) => state.shop.products.length);
  const onPage = (n) => {
    onGoPage(n);
  };

  const isOnLastPage = () => {
    return perPage * currentPage >= totalItemsCount;
  };

  const onPrev = () => {
    onPrevPage();
  };

  const onNext = () => {
    onNextPage();
  };

  const getPages = () => {
    const c = Math.ceil(totalItemsCount / perPage);
    const p = currentPage || 1;
    const pagesToShow = 9;
    const pages = [];
    pages.push(p);
    const times = pagesToShow - 1;
    for (let i = 0; i < times; i++) {
      if (pages.length < pagesToShow) {
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < pagesToShow) {
        if (Math.max.apply(null, pages) < c) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  };
  const pages = getPages().map((pageNum) => {
    let buttonClass = "page-item";

    if (pageNum === currentPage) {
      buttonClass += " active";
    }
    return (
      <li className={buttonClass} onClick={() => onPage(pageNum)}>
        <button className="page-link">{pageNum}</button>
      </li>
    );
  });

  let prevButtonClass = "page-item";

  if (currentPage === 1) {
    prevButtonClass += " disabled";
  }

  const prevButton = (
    <li className={prevButtonClass}>
      <button className="page-link" onClick={onPrev} tabIndex="-1">
        Previous
      </button>
    </li>
  );

  let nextButtonClass = "page-item";

  if (isOnLastPage()) {
    nextButtonClass += " disabled";
  }

  const nextButton = (
    <li className={nextButtonClass}>
      <button disabled={isOnLastPage()} className="page-link" onClick={onNext}>
        Next
      </button>
    </li>
  );

  return (
    <nav aria-label="...">
      <ul className="pagination">
        {prevButton}
        {pages}
        {nextButton}
      </ul>
    </nav>
  );
};
export default Pagination;
