import React from 'react'

export default function RevenueCard({title,orderCount,amount}) {
  return (
    <div className='bg-white shadow-sm '>
        <div>
            {title}
            ?
        </div>
        <div className='flex justify-between'>
          <div>
            {amount}
          </div>
          {
            orderCount ? <div>
              {orderCount} order(s) {">"}
            </div> :null

          }
        </div>
    </div>
  )
}
