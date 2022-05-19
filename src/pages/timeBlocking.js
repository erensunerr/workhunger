import React from 'react';

const days = [
  "Times",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]


const toHour = (period) => {
  const hour = period - (period % 1);
  const min = (period % 1)*60
  return `${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`
}

export default function TimeBlocking(props) {

  var schedule = [...Array(32*7).keys()];
  props.scheduled.forEach(
    (s) => schedule[s.period] = s
  )

  console.log(schedule)
  return (
    <section className="mx-auto space-y-6 py-24 px-8 my-6 w-min max-w-full">
      <h2 className="text-6xl font-bold text-gray-800">
        Time Blocking
      </h2>
      <div className="overflow-scroll">
        <div className="grid-cols-8 grid grid-rows-[repeat(33,minmax(0,1fr))] w-max bg-gray-800 gap-0.5 px-0.5 py-0.5">
          {
            days.map(
              (day) => <p className="block col-span-1 row-span-1 bg-gray-100 px-1">{day}</p>
            )
          }
          {
            [...Array(32).keys()].map(
              // convert i'th interval to normal time
              (i) => (
                `${toHour(8 + i/2)} - ${toHour(8.5 + i/2)}`
              )
            ).map(
              (t) => <p className="block col-start-1 px-1.5 py-0.5 bg-gray-100">
                {t}
              </p>
            )
          }
          <div className="grid-cols-[repeat(7,minmax(0,1fr))] grid-rows-[repeat(32,minmax(0,1fr))] grid row-start-2 row-end-[-1] col-start-2 col-end-[-1] bg-gray-800 bg-gray gap-0.5 grid-flow-col">
            {
              schedule.map(
                (i, c) => (
                  i.task ? // check if its a scheduled period
                  <div className="px-1.5 py-0.5 bg-gray-100" key={i.task.id}>
                    {
                      <p className="w-28 truncate">{i.task.text}</p>
                      // make this expand when clicked on
                    }
                  </div>
                :
                  <div className="px-1.5 py-0.5 bg-gray-100" key={c}></div>
                )
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}
