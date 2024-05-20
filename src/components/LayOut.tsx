import { useEffect, useState } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import { LuMenuSquare } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { GiCube } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import { SiMarketo, SiTodoist } from "react-icons/si";
import { AiFillFileText, AiOutlinePoweroff } from "react-icons/ai";
import { BsCalendar2CheckFill, BsFillPersonFill } from "react-icons/bs";
import { FaPeopleGroup, FaFileInvoiceDollar } from "react-icons/fa6";
import { BiSolidPieChart } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from '../store/reduxHooks.ts';
import { changeTheme } from '../features/theme/ThemeSlice.ts';
import { RootState } from '../store/store.ts';
 
function LayOut() {

  const dispatch = useAppDispatch();
  const theme = useAppSelector((state: RootState) => state.theme.theme)

    const togTheme = () => {
      dispatch(changeTheme())
    }
    const currentLoc = useLocation().pathname;
    console.log(currentLoc);

    useEffect(() => {
      if(theme === "dark"){
          document.documentElement.classList.add("dark");
          document.body.classList.add("dark:bg-dark-body")
          
        }else{
            document.body.classList.add("bg-light-body")
            document.documentElement.classList.remove("dark");
      }
    }, [theme])

    const [menuStatus, setMenuStatus] = useState(false);
    
    const toggleMenu:React.MouseEventHandler<HTMLDivElement> = () => {
      if(menuStatus){
        setMenuStatus(!menuStatus)
      }else{
        setMenuStatus(!menuStatus)
      }
      console.log("Clicked")
    }

  return (
    <>
        <header className='w-full h-20 z-0 pl-24 pr-4 flex items-center justify-between bg-light-component dark:bg-dark-component'>
            <input type="text" className="h-14 w-3/4 bg-transparent " />
            <button onClick={togTheme} className='bg-white'>Theme</button>
        </header>
        
        <div className="lg:block w-20 h-screen lg:bg-light-component z-10 fixed top-0 left-0 lg:dark:bg-dark-component">
            <div className="w-20 h-20 bg-white flex justify-center items-center dark:bg-dark-component" onClick={toggleMenu}>
                <LuMenuSquare className='text-4xl dark:text-white'/>
            </div>
            <ul className={`${menuStatus ? "flex bg-white dark:bg-dark-component" : "hidden"} bg-none text-2xl lg:flex flex-col justify-between items-center h-[calc(100vh-80px)] dark:text-white`}>
            <Link to="/" className='relative'>
              <li className={`${currentLoc === "/" ? "text-active-btn before:w-1 before:h-full before:bg-active-btn before:absolute before:-left-full before:rounded-r-full" : ""} h-10 flex items-center justify-center`}>
                <RxDashboard />
              </li>
            </Link>
            <Link to="products" className='relative'>
              <li className={`${currentLoc === "/products" ? "text-active-btn before:w-1 before:h-full before:bg-active-btn before:absolute before:-left-full before:rounded-r-full" : ""}`}>
                <GiCube  />
              </li>
            </Link>
            <Link to="favorites" className='relative'>
              <li className={`${currentLoc === "/favorites" ? "text-active-btn before:w-1 before:h-full before:bg-active-btn before:absolute before:-left-full before:rounded-r-full" : ""}`}>
                <AiFillHeart  />
              </li>
            </Link>
            <Link to="order-list" className='relative'>
              <li className={`${currentLoc === "/order-list" ? "text-active-btn before:w-1 before:h-full before:bg-active-btn before:absolute before:-left-full before:rounded-r-full" : "" }`}>
                <SiMarketo  />
              </li>
            </Link>
            <Link to="pricing" className='relative'>
              <li className={`${currentLoc === "/pricing" ? "text-active-btn before:w-1 before:h-full before:bg-active-btn before:absolute before:-left-full before:rounded-r-full" : "" }`}>
                <AiFillFileText  />
              </li>
            </Link>
            <Link to="calendar" className='relative'>
              <li className={`${currentLoc === "/calendar" ? "text-active-btn before:w-1 before:h-full before:bg-active-btn before:absolute before:-left-full before:rounded-r-full" : "" }`}>
                <BsCalendar2CheckFill  />
              </li>
            </Link>
            <li>
              <SiTodoist  />
            </li>
            <li>
              <FaPeopleGroup  />
            </li>
            <li>
              <FaFileInvoiceDollar  />
            </li>
            <li>
              <BiSolidPieChart  />
            </li>
            <li>
              <BsFillPersonFill  />
            </li>
            <li>
              <IoSettings  />
            </li>
            <li>
              <AiOutlinePoweroff  />
            </li>
          </ul>
        </div>

        <Outlet />

        <footer></footer>

    </>
  )
}

export default LayOut