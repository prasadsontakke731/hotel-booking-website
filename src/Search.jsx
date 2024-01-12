import { useState } from "react"
import "./Search.css"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range'
import "./Search.css"

const Search = () => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    return (
        <>

            <div className="Search">
                <div className="SearchItem">
                    <input
                        type="text"
                        placeholder="SearchInput"
                    />
                </div>

                <div className="SearchItem">
                    {/* <span onClick={() => setOpenDate(!openDate)} className="SearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}></span> */}
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                    />}
                </div>

                <div className="SearchItem">
                    <span className="SearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                    <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button disabled={options.adult <= 1}
                                    className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button disabled={options.children <= 0}
                                    className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                                <button disabled={options.room <= 1}
                                    className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="Searchbtn">Search</button>
            </div>
        </>
    )
}
export default Search