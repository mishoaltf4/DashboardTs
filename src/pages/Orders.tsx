
import { ImFilter } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdRefresh } from "react-icons/io";
import { DataTable } from "@/components/ordersData-Table";

function Orders() {

  return (
    <>
        <div className="orders font-nunitoSans mt-6 pl-6 pr-6 lg:pl-28 lg:pr-12">
            <h1 className='text-3xl text-light-text dark:text-dark-text font-bold'>Orders list</h1>

            <div className="filters w-4/6 h-20 mt-6 bg-light-component dark:bg-dark-component text-light-text dark:text-dark-text rounded-2xl flex items-center text-lg">
                <div className="box w-1/12 h-full border-r flex items-center justify-center">
                    <ImFilter className='text-3xl'/>
                </div>
                <h1 className='w-2/12 h-full border-r flex justify-center items-center'>Filter by</h1>
                <button className='w-2/12 h-full border-r flex items-center justify-around'>Date <RiArrowDropDownLine /></button>
                <button className='w-2/12 h-full border-r flex items-center justify-around'>Order Type <RiArrowDropDownLine /></button>
                <button className='w-3/12 h-full border-r flex items-center justify-around'>Order Status <RiArrowDropDownLine /></button>
                <button className='w-2/12 flex items-center justify-around text-[#EA0234]'><IoMdRefresh /> Reset Filter</button>
            </div>

            <div className="orders-list mt-6 w-full h-full"> 
              <DataTable />
            </div>
        </div>
    </>
  )
}

export default Orders