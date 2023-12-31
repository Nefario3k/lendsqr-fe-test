import IPaginateButtonProp from "../interface/IPaginateButtonProp";

const PaginateButton = ({
    pageNumber,
    handlePageClick,
    currentPage,
}: IPaginateButtonProp) => {
    return (
        <button
            className={`pagiBtn ${currentPage === pageNumber ? "active" : ""}`}
            value={pageNumber}
            key={pageNumber}
            onClick={(e) => handlePageClick(e)}
        >
            {pageNumber}
        </button>
    );
};

export default PaginateButton;
