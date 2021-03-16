import React, {useState} from "react";
import {Pagination} from 'antd';

const Paginator = ({totalPageCount, pageSize, currentPage, onPageChanged}) => {
    const [page, setPage] = useState(currentPage);
    const [size, setSize] = useState(pageSize);

    const handleChange = (page, size) => {
        setPage(page)
        setSize(size)
        onPageChanged(page, size)
    };

    return (
        <div>
            <Pagination
                onChange={(page, size) => {
                    handleChange(page, size)
                }}
                pageSize={size}
                current={page}
                defaultCurrent={6} total={totalPageCount}/>
        </div>
    );
}

export default Paginator;


