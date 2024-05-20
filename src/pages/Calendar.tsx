import { useState } from 'react';
import Calendar from 'react-calendar'


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function CalendarPage() {

  const [value, onChange] = useState<Value>(new Date());

  const tileClassName = ({ date, view } : any) => {
    if (view === 'month' && date.getMonth() !== new Date().getMonth()) {
      return 'previous-month-day';
    }
    return null;
  };

  return (
    <>
      <div className="calendar w-full mt-6 pl-6 pr-6 lg:pl-28 lg:pr-12 font-nunitoSans ">
        <h1 className='text-3xl font-bold'>calendar</h1>

        <div className="calendar-content flex  justify-between mt-6">

          <div className="calendar-left w-72 h-[calc(100vh-174px)] bg-light-component dark:bg-dark-component">

          </div>

          <div className="calendar-right w-[calc(100%-288px-30px)] h-[calc(100vh-174px)] bg-light-component dark:bg-dark-component p-7">
            <Calendar 
              onChange={onChange} 
              value={value} 
              activeStartDate={new Date()} 
              tileClassName={tileClassName}
              className={'w-full h-full'}>

            </Calendar>
          </div>
        </div>
      </div>
    </>
  )
}

export default CalendarPage