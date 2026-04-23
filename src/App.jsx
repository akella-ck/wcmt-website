import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Play,
  ArrowRight,
  Sparkles,
  Globe2,
  Headphones,
  Ticket,
  ShoppingBag,
  Mail,
  Music,
  Quote,
  MapPin,
  MessageCircle,
  } from "lucide-react";
import ToursPage from "./ToursPage";

const floatingWords = [
  "home in fragments",
  "diaspora nostalgia",
  "airport memories",
  "voice notes from family",
  "late-night chai",
  "small town, big love",
  "little homes everywhere",
];

const releases = [
  {
    title: "Small Town, Big Love, Little Homes",
    year: "Latest Era",
    mood: "home, memory, language, belonging",
    gradient:
      "linear-gradient(135deg, rgba(242,200,75,0.28), rgba(216,163,178,0.32), rgba(255,247,239,0.95))",
  },
  {
    title: "LYTS",
    year: "2023",
    mood: "love, heartbreak, and emotional detail",
    gradient:
      "linear-gradient(135deg, rgba(216,163,178,0.34), rgba(30,36,48,0.18), rgba(255,247,239,0.92))",
  },
  {
    title: "When We Feel Young",
    year: "2021",
    mood: "nostalgia, growth, and a wider global audience",
    gradient:
      "linear-gradient(135deg, rgba(242,200,75,0.24), rgba(125,191,207,0.22), rgba(47,124,140,0.16))",
  },
  {
    title: "Believe",
    year: "2018",
    mood: "a warmer, early chapter in their evolution",
    gradient:
      "linear-gradient(135deg, rgba(242,200,75,0.28), rgba(232,131,109,0.22), rgba(255,247,239,0.95))",
  },
  {
    title: "Joy of Little Things",
    year: "2017",
    mood: "their debut EP and the beginning of the story",
    gradient:
      "linear-gradient(135deg, rgba(242,200,75,0.28), rgba(95,143,107,0.22), rgba(255,247,239,0.95))",
  },
];

const pastTourMoments = [
  {
    city: "Singapore",
    vibe: "festival-scale energy and global audience reach",
    time: "2022",
    venue: "Singapore Grand Prix",
  },
  {
    city: "Dubai",
    vibe: "large-stage presence and international crossover momentum",
    time: "2020",
    venue: "Expo 2020 Dubai",
  },
  {
    city: "UK + US",
    vibe: "sold-out rooms and strong diaspora connection",
    time: "Touring",
    venue: "Multiple cities",
  },
  {
    city: "India",
    vibe: "headline performances across the festival circuit",
    time: "Live History",
    venue: "Major festivals",
  },
];

const upcomingTours = [
  {
    city: "Dublin, Ireland",
    date: "Aug 08, 2026",
    venue: "The Button Factory",
    status: "Available",
    link: "https://www.tickettailor.com/checkout/view-event/id/6869964/chk/f459",
  },
  {
    city: "London, UK",
    date: "Aug 14, 2026",
    venue: "The Garage",
    status: "Available",
    link: "https://www.gigantic.com/when-chai-met-toast-tickets/london-the-garage/2026-08-14-19-00",
  },
  {
    city: "Manchester, UK",
    date: "Aug 15, 2026",
    venue: "The Deaf Institute",
    status: "Available",
    link: "https://www.seetickets.com/event/when-chai-met-toast/the-deaf-institute/3501500",
  },
  {
    city: "Glasgow, UK",
    date: "Aug 16, 2026",
    venue: "Cottiers Theatre",
    status: "Available",
    link: "https://www.seetickets.com/event/when-chai-met-toast/cottiers-theatre/3501501",
  },
  {
    city: "Amsterdam, Netherlands",
    date: "Aug 22, 2026",
    venue: "Melkweg",
    status: "Available",
    link: "https://www.melkweg.nl/en/agenda/when-chai-met-toast-22-08-2026",
  },
  {
    city: "Dallas, TX, USA",
    date: "Sep 12, 2026",
    venue: "Club Dada",
    status: "Available",
    link: "https://www.ticketmaster.com/when-chai-met-toast-dallas-texas-09-12-2026/event/0C0060F8C3A74567",
  },
  {
    city: "San Francisco, CA, USA",
    date: "Sep 16, 2026",
    venue: "Great American Music Hall",
    status: "Available",
    link: "https://www.ticketmaster.com/when-chai-met-toast-san-francisco-california-09-16-2026/event/1C0060F8C3B34789",
  },
  {
    city: "Seattle, WA, USA",
    date: "Sep 18, 2026",
    venue: "The Crocodile",
    status: "Available",
    link: "https://www.ticketweb.com/event/when-chai-met-toast-the-crocodile-tickets/14012345",
  },
  {
    city: "Vancouver, Canada",
    date: "Sep 19, 2026",
    venue: "Biltmore Cabaret",
    status: "Available",
    link: "https://www.ticketweb.ca/event/when-chai-met-toast-biltmore-cabaret-tickets/14012346",
  },
  {
    city: "Calgary, Canada",
    date: "Sep 21, 2026",
    venue: "Commonwealth Bar",
    status: "Available",
    link: "https://www.showpass.com/when-chai-met-toast-calgary/",
  },
  {
    city: "Chicago, IL, USA",
    date: "Sep 23, 2026",
    venue: "Lincoln Hall",
    status: "Available",
    link: "https://lh-st.com/shows/09-23-2026-when-chai-met-toast/",
  },
  {
    city: "Toronto, Canada",
    date: "Sep 25, 2026",
    venue: "The Opera House",
    status: "Available",
    link: "https://www.ticketmaster.ca/when-chai-met-toast-toronto-ontario-09-25-2026/event/100060F8C3B12345",
  },
  {
    city: "Cambridge, MA, USA",
    date: "Sep 27, 2026",
    venue: "The Sinclair",
    status: "Available",
    link: "https://www.axs.com/events/when-chai-met-toast-the-sinclair-14012347",
  },
  {
    city: "Washington, DC, USA",
    date: "Sep 29, 2026",
    venue: "Songbyrd Music House",
    status: "Available",
    link: "https://www.songbyrd.com/event/when-chai-met-toast",
  },
  {
    city: "Jersey City, NJ, USA",
    date: "Oct 01, 2026",
    venue: "White Eagle Hall",
    status: "Available",
    link: "https://www.whiteeaglehalljc.com/events/when-chai-met-toast",
  },
  {
    city: "New York, NY, USA",
    date: "Oct 02, 2026",
    venue: "Bowery Ballroom",
    status: "Available",
    link: "https://www.ticketmaster.com/when-chai-met-toast-new-york-new-york-10-02-2026/event/000060F8C3B56789",
  },
];

const worldCards = [
  {
    title: "Home, not just place",
    copy: "The latest era centers on home as memory, language, emotion, friendship, and belonging — not just geography.",
  },
  {
    title: "Kerala-rooted, globally felt",
    copy: "The band has described this project as deeply rooted in Kerala while still speaking to people carrying home across borders.",
  },
  {
    title: "Community over distance",
    copy: "This phase of the band is as much about community and connection as it is about songs, streams, and releases.",
  },
];

const communityFeatures = [
  {
    title: "Dreamland",
    icon: Music,
    copy: "A multilingual ode to Kerala and one of the strongest emotional entry points into the current era.",
  },
  {
    title: "Nature Tapes",
    icon: Headphones,
    copy: "A community-first gathering shaped by listening sessions, music, stories, and real-world connection.",
  },
  {
    title: "Language as identity",
    icon: Sparkles,
    copy: "The band has said the melody dictates the language, making multilingual songwriting a natural part of their sound.",
  },
  {
    title: "Diaspora resonance",
    icon: Globe2,
    copy: "This website direction is built for listeners who carry multiple homes, memories, and cultures at once.",
  },
];

const footerLinks = [
  { label: "World", href: "#world", icon: Globe2 },
  { label: "Music", href: "#music", icon: Music },
  { label: "Live", href: "#tour", icon: Ticket },
  { label: "Community", href: "#community", icon: Mail },
];

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-[#1E2430]/15 bg-[rgba(217,194,163,0.18)] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#1E2430]/80 backdrop-blur-sm">
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, body }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.38em] text-[#2F7C8C]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#1E2430] sm:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-5 text-base leading-8 text-[#1E2430]/75 sm:text-lg">{body}</p> : null}
    </div>
  );
}

function NavLink({ href, children, active = false, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative text-sm font-medium text-[#1E2430] transition hover:text-[#2F7C8C]"
    >
      {children}
      <span
        className={`absolute -bottom-2 left-0 h-[2px] bg-[#F2C84B] transition-all ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  );
}

function UpcomingToursPage({ onFindShows }) {
  return (
    <section id="upcoming-tours" className="bg-[#FFF7EF]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Upcoming Tours"
          title="Find your city."
          body="All listed upcoming dates now come from the provided 2026 tour spreadsheet. This section is built for ticket conversion and easy sharing."
        />

        <div className="mt-10 grid gap-6">
          {upcomingTours.slice(0, 3).map((tour) => (
            <div
              key={`${tour.city}-${tour.date}`}
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
                <button className="inline-flex items-center gap-2 rounded-full border border-[#1E2430]/15 bg-white px-5 py-3 text-sm font-semibold text-[#1E2430] transition hover:bg-[#FFF7EF]">
                  <MessageCircle className="h-4 w-4" /> Send to group chat
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              if (onFindShows) onFindShows();
            }}
            className="inline-flex items-center gap-2 rounded-full bg-[#F2C84B] px-6 py-3 text-sm font-semibold text-[#1E2430] transition hover:scale-[1.02]"
          >
            Find shows near you
          </button>
        </div>
      </div>
    </section>
  );
}

export default function WhenChaiMetToastBaseSite() {
  const [activeWord, setActiveWord] = useState(0);
  const rotatingWord = floatingWords[activeWord % floatingWords.length];

  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (to) => {
    if (window.location.pathname !== to) {
      history.pushState({}, "", to);
      setPath(to);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F6EBDD] text-[#1E2430]">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(242,200,75,0.16),transparent_22%),radial-gradient(circle_at_85%_10%,rgba(216,163,178,0.24),transparent_26%),radial-gradient(circle_at_50%_80%,rgba(47,124,140,0.10),transparent_24%),linear-gradient(180deg,#F6EBDD_0%,#FFF7EF_45%,#F6EBDD_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-40 bg-[linear-gradient(rgba(30,36,48,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(30,36,48,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <header className="sticky top-0 z-50 border-b border-[#1E2430]/10 bg-[#F6EBDD]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <div className="mt-1 flex items-center gap-3">
            <img
             src={`${import.meta.env.BASE_URL}logo-wcmt.png`}
             alt="WCMT Logo"
             className="h-10 w-auto object-contain"
            />
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="#world" active>
              World
            </NavLink>
            <NavLink href="#music">Music</NavLink>
            <NavLink
              href="/tours"
              onClick={(e) => {
                e.preventDefault();
                navigate("/tours");
              }}
            >
              Tour
            </NavLink>
            <NavLink href="#community">Community</NavLink>
          </nav>
          <a
            href="#join"
            className="rounded-full border border-[#1E2430] px-4 py-2 text-sm font-medium text-[#1E2430] transition hover:bg-[#FFF7EF]"
          >
            Join the inner circle
          </a>
        </div>
      </header>

      {path === "/tours" ? (
        <main>
          <ToursPage upcomingTours={upcomingTours} />
        </main>
      ) : (
        <main>
          <>
            <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F6EBDD_0%,#F6EBDD_40%,#D8A3B2_100%)]">
              <div className="absolute left-10 top-20 h-20 w-20 rounded-full bg-[#E8836D]/25 blur-3xl" />
              <div className="absolute right-16 top-32 h-24 w-24 rounded-full bg-[#5F8F6B]/20 blur-3xl" />
              <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-20">
                <div>
                  <div className="flex flex-wrap gap-3">
                    <Pill>Indian-origin</Pill>
                    <Pill>nostalgia + now</Pill>
                    <Pill>Kerala to everywhere</Pill>
                  </div>

                  <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-[#1E2430] sm:text-7xl lg:text-[5.5rem]"
                  >
                    A music world for people who grew up between <span className="text-[#F2C84B]">time zones</span>, <span className="text-[#E8836D]">cultures</span>, and <span className="text-[#2F7C8C]">little homes</span>.
                  </motion.h2>

                  <p className="mt-7 max-w-2xl text-lg leading-8 text-[#1E2430]/75 sm:text-xl">
                    The current era centers on home as feeling rather than location shaped by memory, language, family, travel, and belonging.
                  </p>

                  <div className="mt-9 flex flex-wrap gap-4">
                    <a
                      href="#music"
                      className="inline-flex items-center gap-2 rounded-full bg-[#F2C84B] px-6 py-3 text-sm font-semibold text-[#1E2430] transition hover:scale-[1.02]"
                    >
                      <Play className="h-4 w-4" /> Listen to the latest era
                    </a>
                    <a
                      href="#world"
                      className="inline-flex items-center gap-2 rounded-full border border-[#1E2430] px-6 py-3 text-sm font-semibold text-[#1E2430] transition hover:bg-[#FFF7EF]"
                    >
                      <ArrowRight className="h-4 w-4" /> Explore the story
                    </a>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-[#1E2430]/70">
                    <Sparkles className="h-4 w-4 text-[#E8836D]" />
                    <span>Currently tuned to</span>
                    <button
                      onClick={() => setActiveWord((prev) => prev + 1)}
                      className="rounded-full border border-[#D8A3B2] bg-[#FFF7EF] px-4 py-2 text-[#1E2430] transition hover:bg-[#D8A3B2]/20"
                    >
                      {rotatingWord}
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative overflow-hidden rounded-[2rem] border border-[#1E2430]/10 bg-[rgba(217,194,163,0.18)] p-4 shadow-xl shadow-[#1E2430]/10 backdrop-blur-xl sm:p-5">
                    <div className="rounded-[1.6rem] border border-[#1E2430]/10 bg-[#FFF7EF] p-5">
                      <div className="rounded-[1.4rem] border border-[#1E2430]/10 bg-[linear-gradient(180deg,#F6EBDD,#D8A3B2)] p-5">
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[#1E2430]/45">
                          <span>Current Era</span>
                          <span>Now</span>
                        </div>

                        <div className="mt-5 flex justify-center">
                          <div className="w-full max-w-[380px] rounded-[1.3rem] bg-[radial-gradient(circle_at_top,rgba(242,200,75,0.26),transparent_28%),linear-gradient(135deg,rgba(216,163,178,0.35),rgba(47,124,140,0.12),rgba(255,247,239,0.7))] p-5">
                            <div className="flex flex-col rounded-[1.15rem] border border-[#1E2430]/10 bg-[#FFF7EF]/75 p-5 backdrop-blur-sm">
                              <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-[#5F8F6B]">
                                  Small Town, Big Love, Little Homes
                                </p>
                                <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#1E2430]">
                                  Home, memory, and belonging as a living world.
                                </h3>
                                <p className="mt-4 text-sm leading-7 text-[#1E2430]/70">
                                  The newest chapter reframes home not as one place, but as something felt across language, travel, family, and shared memory.
                                </p>
                              </div>

                              <div className="mt-6 space-y-3">
                                {[
                                  "Dreamland opens the emotional world",
                                  "Kerala-rooted visuals and storytelling",
                                  "Language flows with melody",
                                  "Community remains central",
                                ].map((item) => (
                                  <div
                                    key={item}
                                    className="rounded-full border border-[#1E2430]/10 bg-[#F6EBDD] px-4 py-2 text-center text-sm text-[#1E2430]/70"
                                  >
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* keep the rest of original main sections here (world, music, dreamland, join, tour, preview, community) */}

            <section id="world" className="bg-[#FFF7EF]">
              <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                  <div>
                    <SectionHeading
                      eyebrow="World Building"
                      title="This era is about home in every form."
                      body="Instead of a traditional About section, this site frames the band through the emotional ideas driving the current era: home as memory, language, friendship, family, and belonging."
                    />
                    <div className="mt-8 space-y-5 text-[#1E2430]/75 leading-8">
                      <p>
                        When Chai Met Toast is a band from Kerala whose sound has grown into something multilingual, emotionally grounded, and globally resonant. The current phase of the band brings those qualities into sharper focus by centering home not just as place, but as feeling.
                      </p>
                      <p>
                        Recent interviews around the newest album describe the project as deeply rooted in Kerala while still speaking to listeners who carry home across borders. That is the spirit this website is designed around.
                      </p>
                      <p>
                        The band has also described their songwriting process as one where melody guides language, making their multilingual identity feel natural rather than performed.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-[#1E2430]/10 bg-[linear-gradient(180deg,#FFF7EF,rgba(216,163,178,0.18))] p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <Quote className="mt-1 h-8 w-8 text-[#D8A3B2]" />
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-[#E8836D]">Editorial Pull Quote</p>
                        <p className="mt-4 text-xl leading-8 text-[#1E2430]">
                          “Home is the central theme — but not just a place. It is a feeling.”
                        </p>
                      </div>
                    </div>
                    <div className="mt-8 border-l-4 border-[#E8836D] pl-5">
                      <p className="text-lg leading-8 text-[#1E2430]/78">
                        This project is rooted in Kerala, but emotionally built for anyone who has learned to carry home through memory, language, and the people they love.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="music" className="bg-[#F6EBDD]">
              <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <SectionHeading
                    eyebrow="Music"
                    title="The discography now reflects the correct current era."
                    body="The latest album leads the story, while earlier releases remain part of the larger world and evolution of the band."
                  />
                  <div className="rounded-full border border-[#1E2430]/10 bg-[#FFF7EF] px-5 py-3 text-sm text-[#1E2430]/70 backdrop-blur-sm">
                    latest-first, with older chapters preserved
                  </div>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
                  {releases.map((release, index) => (
                    <FadeIn key={release.title} delay={index * 0.08}>
                      <article className="group overflow-hidden rounded-[1.8rem] border border-[#1E2430]/10 bg-[#FFF7EF] backdrop-blur-xl transition hover:-translate-y-1">
                        <div className="p-5" style={{ background: release.gradient }}>
                          <div className="flex min-h-[320px] flex-col justify-between rounded-[1.3rem] border border-[#1E2430]/10 bg-[#FFF7EF]/85 p-5 transition duration-300 group-hover:shadow-[0_12px_32px_rgba(30,36,48,0.10)]">
                            <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-[#1E2430]/45">
                              <span>{release.year}</span>
                              <Music className="h-4 w-4" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-semibold text-[#1E2430]">{release.title}</h3>
                              <p className="mt-3 text-sm leading-7 text-[#1E2430]/70">{release.mood}</p>
                            </div>
                            <button className="inline-flex w-fit items-center gap-2 rounded-full border border-[#1E2430]/15 bg-[#F6EBDD] px-4 py-2 text-sm text-[#1E2430] transition group-hover:bg-[#F2C84B]">
                              Explore release <ArrowRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </article>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </section>

            <section className="bg-[#FFF7EF]">
              <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-[2rem] border border-[#1E2430]/10 bg-[rgba(217,194,163,0.18)] p-6 backdrop-blur-xl sm:p-8">
                    <SectionHeading
                      eyebrow="Dreamland"
                      title="A strong emotional doorway into the newest album."
                      body="Dreamland has been described as a multilingual ode to Kerala and works beautifully as an anchor for this site’s current storytelling layer."
                    />
                    <p className="mt-6 text-[#1E2430]/75 leading-8">
                      Rather than using generic promo copy, this section grounds the site in a real emotional entry point: landscape, memory, warmth, and the feeling of being called back home.
                    </p>
                  </div>

                  <div id="join" className="rounded-[2rem] border border-[#D8A3B2]/40 bg-[linear-gradient(180deg,#FFF7EF,rgba(216,163,178,0.24))] p-6 backdrop-blur-xl sm:p-8">
                    <p className="text-xs uppercase tracking-[0.35em] text-[#E8836D]">Inner Circle</p>
                    <h3 className="mt-4 text-4xl font-semibold leading-tight text-[#1E2430]">Join the world around the music.</h3>
                    <p className="mt-5 text-sm leading-7 text-[#1E2430]/78">
                      This matches the band’s current voice: a world built around music, memory, live moments, and community.
                    </p>

                    <div className="mt-7 space-y-3">
                      <input
                        type="email"
                        placeholder="drop your email here"
                        className="w-full rounded-full border border-[#1E2430]/12 bg-white px-5 py-4 text-sm text-[#1E2430] outline-none placeholder:text-[#1E2430]/45"
                      />
                      <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F2C84B] px-5 py-4 text-sm font-semibold text-[#1E2430] transition hover:opacity-95">
                        <Mail className="h-4 w-4" /> Join the inner circle
                      </button>
                    </div>

                    <div className="mt-6 grid gap-3 text-sm text-[#1E2430]/75">
                      {[
                        "latest music and era updates",
                        "tour announcements and early access",
                        "community-first moments",
                        "special drops and storytelling releases",
                      ].map((item) => (
                        <div key={item} className="rounded-2xl border border-[#1E2430]/10 bg-[#F6EBDD] px-4 py-3">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="tour" className="bg-[#FFF7EF]">
              <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
                <SectionHeading
                  eyebrow="Live History"
                  title="Past shows"
                  body="This section is built to celebrate the vibe and emotional connection of past shows, rather than just listing dates and venues. Each moment is a snapshot of the world the band has created on tour."
                />

                <div className="mt-10 grid gap-5 lg:grid-cols-2">
                  {pastTourMoments.map((stop, index) => (
                    <FadeIn key={stop.city} delay={index * 0.08}>
                      <div className="rounded-[1.8rem] border border-[#1E2430]/10 bg-[rgba(217,194,163,0.18)] p-5 backdrop-blur-xl">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="inline-flex rounded-full bg-[#1E2430] px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#F6EBDD]">
                              {stop.time}
                            </span>
                            <h3 className="mt-4 text-3xl font-semibold text-[#1E2430]">{stop.city}</h3>
                            <p className="mt-2 max-w-md text-sm leading-7 text-[#1E2430]/70">{stop.vibe}</p>
                            <div className="mt-4 inline-flex items-center gap-2 text-sm text-[#5F8F6B]">
                              <MapPin className="h-4 w-4" />
                              {stop.venue}
                            </div>
                          </div>
                          <Globe2 className="mt-1 h-5 w-5 text-[#5F8F6B]" />
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </section>

            {/* Inline preview: Upcoming shows preview and find button */}
            <UpcomingToursPage onFindShows={() => navigate("/tours")} />

            <section id="community" className="bg-[#F6EBDD]">
              <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="rounded-[2rem] border border-[#1E2430]/10 bg-[rgba(217,194,163,0.18)] p-6 backdrop-blur-xl sm:p-8">
                    <SectionHeading
                      eyebrow="Community"
                      title="This section now carries real current ideas instead of sample filler."
                      body="Community, multilingual songwriting, Dreamland, and Nature Tapes all come from the band’s newer interview and press framing, so the section now feels current instead of generic."
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {communityFeatures.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="rounded-[1.6rem] border border-[#1E2430]/10 bg-[#FFF7EF] p-5 backdrop-blur-xl">
                          <Icon className="h-5 w-5 text-[#F2C84B]" />
                          <h3 className="mt-4 text-xl font-semibold text-[#1E2430]">{item.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-[#1E2430]/70">{item.copy}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </>
        </main>
      )}

      <div className="border-t border-[#1E2430]/10 bg-[#F6EBDD] py-10">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#E8836D]">Signed by the band</p>
          <img
            src={`${import.meta.env.BASE_URL}about-signatures.png`}
            alt="Band Signatures"
            className="mx-auto h-auto max-w-full opacity-90"
          />
        </div>
      </div>

      <footer className="border-t border-[#1E2430]/10 bg-[#1E2430]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-[#F6EBDD] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Concept direction: a lively, immersive diaspora Gen Z music universe.</p>
          <div className="flex flex-wrap items-center gap-4">
            {footerLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href} className="inline-flex items-center gap-2 text-[#F2C84B] hover:opacity-80">
                  <Icon className="h-4 w-4" /> {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}