import events from '../../../Events.json';
import React, { FC } from 'react'
import Show from './utility/Show'

const Showlist = () => {
  return (
    <div className="my-20">
      <h1 className="text-[#FFD700] text-center text-5xl font-bold">
        Book Your Tickets Now!
      </h1>

      <div className="md:max-w-screen-lg container  my-5 grid mx-auto gap-5 grid-cols-1 md:grid-cols-2  px-2 md:px-4 lg:px-10 py-5 ">
        {events.map((event) => (
          <Show title={event.title} poster={event.poster} />
        ))}
      </div>
    </div>
  );
};

export default Showlist