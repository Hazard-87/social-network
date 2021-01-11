import React, {useState} from "react";
import styles from './Paginator.module.css';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';



export const Paginator = (props) => {

let portionSize = 10
    let pagesCount = Math.ceil(props.totalPageCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        if (i <= pagesCount) {
            pages.push(i)
        }
    }

    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={styles.paginator}>
        {portionNumber > 1 &&
        <Button onClick={(e)=>{setPortionNumber(portionNumber - 1)}}>PREV</Button>}
        {pages
            .filter(p=> p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
            return <span className={props.currentPage === p ? styles.selectedPage : styles.pageNumber}
                         onClick={(e) => {
                             props.onPageChanged(p)
                         }}>{p}</span>
        })}
        {portionCount > portionNumber &&
        <Button onClick={(e)=>{setPortionNumber(portionNumber + 1)}}>NEXT</Button>}
    </div>
}



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export const PaginationOutlined = (props) => {
    const classes = useStyles();

    let totalPage = props.totalPageCount

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value)
        props.onPageChanged(value)
    };

    return (
        <div className={classes.root}>
            <Pagination page={page} onChange={handleChange} color="primary"
                        count={totalPage} defaultPage={6} boundaryCount={1} siblingCount={1} />
        </div>
    );
}