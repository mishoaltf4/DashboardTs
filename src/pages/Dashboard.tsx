import { FaPeopleGroup } from "react-icons/fa6";
import { HiTrendingUp } from "react-icons/hi";
import { GiCube } from "react-icons/gi";
import { CgTimer } from "react-icons/cg";
import { options, chartData } from "../components/charts";
import { Line } from "react-chartjs-2";


function Dashboard() {
  // pl-28 pr-12
  return (
    <>
      <div className="dashboard lg:pl-28 lg:pr-12 pl-6 pr-6 mt-6 font-nunitoSans text-light-text">
        <h1 className='text-3xl font-bold dark:text-dark-text '>Dashboard</h1>
        <div className="total-boxes mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 grid-rows-1 gap-14">

          <div className="box w-full h-44 bg-light-component dark:text-dark-text dark:bg-dark-component rounded-2xl p-6 flex flex-col justify-between">
            <div className="cont-group w-full h-20 flex items-center justify-between">
              <div className="cont-group__txt h-full flex flex-col justify-between">
                <p className='text-lg font-semibold font-nunitoSans text-[#929394]'>total users</p>
                <h1 className='text-3xl font-bold'>40,689</h1>
              </div>
              <div className="box-img w-16 h-16 rounded-3xl bg-[#8280FF]/[.20] flex items-center justify-center text-4xl text-[#8280FF]">
                <FaPeopleGroup />
              </div>
            </div>
              <p className='w-full flex items-center justify-start'><label className='text-[#00B69B] font-nunitoSans flex items-center pr-1'><HiTrendingUp className='pr-1'/> 8.5%</label> up from yesterday</p>
          </div>

          <div className="box w-full h-44 bg-light-component dark:bg-dark-component dark:text-dark-text rounded-2xl p-6 flex flex-col justify-between">
            <div className="cont-group w-full h-20 flex items-center justify-between">
              <div className="cont-group__txt h-full flex flex-col justify-between">
                <p className='text-lg font-semibold font-nunitoSans text-[#929394]'>total order</p>
                <h1 className='text-3xl font-bold'>40,689</h1>
              </div>
              <div className="box-img w-16 h-16  rounded-3xl bg-[#FEC53D]/[.20] flex items-center justify-center text-4xl text-[#FEC53D]">
                <GiCube />
              </div>
            </div>
              <p className='w-full flex items-center justify-start'><label className='text-[#00B69B] font-nunitoSans flex items-center pr-1'><HiTrendingUp className='pr-1'/> 8.5%</label> up from yesterday</p>
          </div>

          <div className="box w-full h-44 bg-light-component dark:bg-dark-component dark:text-dark-text rounded-2xl p-6 flex flex-col justify-between">
            <div className="cont-group w-full h-20 flex items-center justify-between">
              <div className="cont-group__txt h-full flex flex-col justify-between">
                <p className='text-lg font-semibold font-nunitoSans text-[#929394]'>total users</p>
                <h1 className='text-3xl font-bold'>40,689</h1>
              </div>
              <div className="box-img w-16 h-16 rounded-3xl bg-[#4AD991]/[.20] flex items-center justify-center text-4xl text-[#4AD991]">
                <HiTrendingUp />
              </div>
            </div>
              <p className='w-full flex items-center justify-start'>
                <label className='text-[#00B69B] font-nunitoSans flex items-center pr-1'>
                  <HiTrendingUp className='pr-1'/> 8.5%
                </label> 
                up from yesterday
              </p>
          </div>

          <div className="box w-full h-44 bg-light-component dark:bg-dark-component dark:text-dark-text rounded-2xl p-6 flex flex-col justify-between">
            <div className="cont-group w-full h-20 flex items-center justify-between">
              <div className="cont-group__txt h-full flex flex-col justify-between">
                <p className='text-lg font-semibold font-nunitoSans text-[#929394]'>total users</p>
                <h1 className='text-3xl font-bold'>40,689</h1>
              </div>
              <div className="box-img w-16 h-16 rounded-3xl bg-[#FF9066]/[.20] flex items-center justify-center text-4xl text-[#FF9066]">
                <CgTimer />
              </div>
            </div>
              <p className='w-full flex items-center justify-start'><label className='text-[#00B69B] font-nunitoSans flex items-center pr-1'><HiTrendingUp className='pr-1'/> 8.5%</label> up from yesterday</p>
          </div>
        </div>

        {/* <div className="charts w-11/12">
          <Line options={options} data={chartData}/>
        </div> */}
        <div className="charts mt-6 w-full p-8 bg-light-component dark:bg-dark-component dark:text-dark-text rounded-2xl font-nunitoSans">
          <h1 className="text-3xl font-bold mb-8">Sales Details</h1>
          <Line options={options} data={chartData} height={"20px"} width={"100px"} aria-hidden/>
        </div>
      </div>
    </>
  )
}

export default Dashboard