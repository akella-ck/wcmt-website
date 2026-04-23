import React from "react";

export default function ToursPage({ upcomingTours = [] }) {
  return (
    <div className="min-h-screen bg-[#FFF7EF]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-[#1E2430]">All Upcoming Shows</h1>
        <p className="mt-4 text-[#1E2430]/75">A full list of scheduled tour dates and ticket links.</p>

        <div className="mt-10 grid gap-6">
          {upcomingTours.map((tour) => (
            <div
              key={`${tour.city}-${tour.date}-${tour.venue}`}
              className="flex flex-col gap-4 rounded-[1.6rem] border border-[#1E2430]/10 bg-[#F6EBDD] p-6 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <span className="inline-flex rounded-full bg-[#1E2430] px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#F6EBDD]">
                  {tour.status}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-[#1E2430]">{tour.city}</h3>
                <p className="mt-2 text-[#1E2430]/70">{tour.venue} • {tour.date}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={tour.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#F2C84B] px-5 py-3 text-sm font-semibold text-[#1E2430] transition hover:scale-[1.02]"
                >
                  Get Tickets
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
