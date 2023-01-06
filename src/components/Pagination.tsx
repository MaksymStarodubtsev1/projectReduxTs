import React from "react";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

export const Pagination: React.FC = () => {
  const paginationList:number[] = [1,2,3,4,5]
  const selectedPage = useTypedSelector(state => state.todo.page)
  const {setPageLimit} = useActions()
  return (
    <div className="pagination">
      {paginationList?.map(pageNumber => (
        <div
          className={`pagination_page ${pageNumber === selectedPage ? 'selected' : ''}`}
          onClick={() => setPageLimit({page: pageNumber, limit: 0})}
        >
          {pageNumber}
        </div>
      ))}
    </div>
  )
}