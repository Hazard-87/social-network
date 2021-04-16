import React, {useState} from "react";
import {Pagination} from 'antd';

type PropsType = {
    totalPageCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number, pageSize: number)=> void
}

const Paginator: React.FC<PropsType> = ({totalPageCount, pageSize, currentPage, onPageChanged}) => {
    const [page, setPage] = useState<number>(currentPage);
    const [size, setSize] = useState<number | undefined>(pageSize);

    const handleChange = (page: number, size: number) => {
        setPage(page)
        setSize(size)
        onPageChanged(page, size)
    };

    return (
        <div>
            <Pagination
                onChange = {(page, size)=> {
                    // @ts-ignore
                    handleChange(page, size)
                }}
                pageSize={size}
                current={page}
                defaultCurrent={6} total={totalPageCount}/>
        </div>
    );
}

export default Paginator;


