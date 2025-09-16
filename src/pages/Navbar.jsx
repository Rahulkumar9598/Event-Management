import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  CalendarDays,
  ChevronDown,
  Search,
  Gift,
  Briefcase,
  Heart,
  Music,
  Users,
  Sparkles,
  User,
  Shield,
  Clock,
  Star,
  CalendarCheck,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  // Event Categories (Types + Status)
  const eventTypes = [
    { name: "Birthday", href: "#birthday", icon: <Gift className="w-4 h-4" /> },
    { name: "Wedding", href: "#wedding", icon: <Heart className="w-4 h-4" /> },
    { name: "Corporate", href: "#corporate", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Concert", href: "#concert", icon: <Music className="w-4 h-4" /> },
    { name: "Workshop", href: "#workshop", icon: <Users className="w-4 h-4" /> },
    { name: "Festival", href: "#festival", icon: <Sparkles className="w-4 h-4" /> },
  ];

  const eventStatus = [
    { name: "Upcoming Events", href: "#upcoming", icon: <CalendarCheck className="w-4 h-4" /> },
    { name: "Past Events", href: "#past", icon: <Clock className="w-4 h-4" /> },
    { name: "Featured Events", href: "#featured", icon: <Star className="w-4 h-4" /> },
  ];

  const filteredTypes = eventTypes.filter((e) =>
    e.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredStatus = eventStatus.filter((e) =>
    e.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 font-bold text-2xl"
          >
            <CalendarDays className="h-7 w-7 text-yellow-300" />
            EventHub
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 relative">
            {/* Events Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 font-medium hover:text-yellow-300 transition">
                Events <ChevronDown size={18} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-72 bg-white text-gray-800 rounded-md shadow-lg p-3"
                  >
                    {/* Search Bar */}
                    <div className="flex items-center px-2 mb-3 bg-gray-100 rounded-md">
                      <Search size={16} className="text-gray-500 mr-2" />
                      <input
                        type="text"
                        placeholder="Search event..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-1 text-sm bg-transparent focus:outline-none"
                      />
                    </div>

                    {/* Event Types */}
                    <h4 className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase">
                      Event Types
                    </h4>
                    {filteredTypes.length > 0 ? (
                      filteredTypes.map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-indigo-100 rounded-md"
                        >
                          {item.icon} {item.name}
                        </a>
                      ))
                    ) : (
                      <p className="px-4 py-2 text-sm text-gray-500">No event type found</p>
                    )}

                    <hr className="my-2" />

                    {/* Event Status */}
                    <h4 className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase">
                      Event Status
                    </h4>
                    {filteredStatus.length > 0 ? (
                      filteredStatus.map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-indigo-100 rounded-md"
                        >
                          {item.icon} {item.name}
                        </a>
                      ))
                    ) : (
                      <p className="px-4 py-2 text-sm text-gray-500">No status found</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Nav Links */}
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="font-medium hover:text-yellow-300 transition"
              >
                {item.name}
              </a>
            ))}

            {/* Login Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLoginOpen(true)}
              onMouseLeave={() => setLoginOpen(false)}
            >
              <button className="ml-4 px-4 py-2 bg-yellow-300 text-indigo-700 font-semibold rounded-full hover:bg-white hover:text-indigo-600 shadow-md transition flex items-center gap-1">
                Login <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {loginOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-md shadow-lg"
                  >
                    <a href="#user-login" className="flex items-center gap-2 px-4 py-2 hover:bg-indigo-100">
                      <User size={16} /> User Login
                    </a>
                    <a href="#admin-login" className="flex items-center gap-2 px-4 py-2 hover:bg-indigo-100">
                      <Shield size={16} /> Admin Login
                    </a>
                    <a href="#organizer-login" className="flex items-center gap-2 px-4 py-2 hover:bg-indigo-100">
                      <Users size={16} /> Organizer Login
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Separate Sign Up Button */}
            <a
              href="#signup"
              className="ml-3 px-4 py-2 bg-green-400 text-white font-semibold rounded-full hover:bg-green-500 shadow-md transition"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
