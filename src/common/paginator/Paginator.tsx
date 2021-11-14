import React from "react";
import style from "../../components/users/Users.module.css";

type PaginatorPropsType = {
    totalUsersCount: number,
    pageSize: number,
    selectPage: (page: number) => void,
    currentPage: number,
}

export const Paginator = (props: PaginatorPropsType) => {
    const buttonPageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= buttonPageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(page => {
                return (
                    <span onClick={() => {
                        props.selectPage(page)
                    }}
                          className={props.currentPage === page ? style.selected : ''}>{page}</span>
                )
            })}
        </div>
    )
}

