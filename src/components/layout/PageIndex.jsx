import React from 'react'
import {Pagination, PageControl} from "bloomer"

const PageIndex = () => {
  return (
            <div className="profileList_pagination">
              <Pagination isAlign="centered">
                  <PageControl>Previous</PageControl>
                  <PageControl>Next</PageControl>
              </Pagination>
            </div>
  )
}

export default PageIndex
