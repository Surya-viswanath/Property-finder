import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";

function Searching() {
    const [searchTerm, setSearchTerm] = useState("");
    const [allEvents, setAllEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get("http://localhost:4008/getpro");
                setAllEvents(response.data);
                setFilteredEvents(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const technology = allEvents.filter(item => item.category === 'technology');
    const health = allEvents.filter(item => item.category === 'health');
    const business = allEvents.filter(item => item.category === 'business');
    const others = allEvents.filter(item => item.category === 'others');

    const handleSearch = (e) => {
        e.preventDefault();
        const searchResult = allEvents.filter(event =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEvents(searchResult);
    };


  return (
    <div>
       <form
                            onSubmit={handleSearch}
                            className="flex bg-gray-50 p-5 shadow-md rounded-md"
                        >
                            <input
                                type="text"
                                name="search"
                                placeholder="Search by name"
                                className="w-full px-4 py-3 border rounded-3xl outline-none border-none bg-gray-200 "
                                style={{color:'gray'}}
                                onInput={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                type="submit"
                                className=" text-white py-3 px-8 rounded-3xl rounded-tl-none -ml-8 text-2xl font-bold"
                                style={{backgroundColor:'#9C0C0D'}}
                            >
                                <FaSearch />
                            </button>
                        </form>
    </div>
  )
}

export default Searching
