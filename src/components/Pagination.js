import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux';
import { getPages } from '../redux/actions/movieAction';
const PaginationComponent = () => {
    const [pageCount, setPageCount] = useState(0);

    const dispatch = useDispatch();
    const page = useSelector((state) => state.pages)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setPageCount(page);
    }, []);


    const handlePageClick = (data) => {
        dispatch(getPages(data.selected + 1))
    }
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالي>"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="السابق"

            containerClassName='pagination justify-content-center py-3'
            pageClassName='page-item'
            pageLinkClassName='page-link'

            previousLinkClassName='page-link'
            nextLinkClassName='page-link'
            breakLinkClassName='page-link'

            nextClassName='page-item'
            previousClassName='page-item'
            breakClassName='page-item'
            activeClassName='active'
        />
    )
}

export default PaginationComponent
