import React, {useState} from "react";
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

    let [currentPagesOutput, setCurrentPagesOutput] = useState(1);
    const countPagesOutputInLine = 7;
    const countPagesOutput = Math.ceil(props.totalUsersCount / countPagesOutputInLine);
    const prevCountPageOutput = (currentPagesOutput - 1) * countPagesOutputInLine + 1;
    const nextCountPageOutput = currentPagesOutput * countPagesOutputInLine;


    return (
        <div>
            {currentPagesOutput > 1
            && <button onClick={() => {
                setCurrentPagesOutput(currentPagesOutput - 1)
            }}>PREV</button>}
            {pages
                .filter(page => page >= prevCountPageOutput && page <= nextCountPageOutput)
                .map(page => {
                    return (
                        <span onClick={() => {
                            props.selectPage(page)
                        }}
                              className={props.currentPage === page ? style.selected : ''}>{page}</span>
                    )
                })}
            {
                countPagesOutput > currentPagesOutput
                && <button onClick={() => {
                    setCurrentPagesOutput(currentPagesOutput + 1)
                }}>NEXT</button>}
        </div>
    )
}

