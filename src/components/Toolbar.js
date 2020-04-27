import React, {useContext, useState} from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from "reactstrap";
import {FilmsContext} from "../providers/FilmsProvider";
import "./Toolbar.css";

const SORTERS = [
    {label: "Episode", func: "sortByEpisodeAsc"},
    {label: "Year", func: "sortByReleaseDateAsc"},
];

const Toolbar = () => {
    const [sortOpen, setSortOpen] = useState(false);
    const {filmsSorter, filmsSetSorter, filmsQuery, filmsSetQuery} = useContext(FilmsContext);

    const handleInputChange = (event) => {
        filmsSetQuery(event.target.value || "");
    };

    return (
        <div className="bg-light p-3 d-flex border-bottom">
            <div className="pr-3">
                <Dropdown className="white-space-nowrap" isOpen={sortOpen} toggle={() => setSortOpen(!sortOpen)}>
                    <DropdownToggle>
                        Sort by...
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Sort by</DropdownItem>
                        {SORTERS.map((sorter, index) => {
                            const isCurrent = filmsSorter === sorter.func;
                            return (
                                <DropdownItem
                                    key={index}
                                    active={isCurrent}
                                    onClick={() => filmsSetSorter(isCurrent ? null : sorter.func)}
                                >{sorter.label}</DropdownItem>
                            );
                        })}
                        <DropdownItem divider />
                        <DropdownItem
                            disabled={filmsSorter == null}
                            onClick={() => filmsSetSorter(null)}
                        >Clear filter</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText><i className="d-block fa fa-search"/></InputGroupText>
                </InputGroupAddon>
                <Input onChange={handleInputChange} value={filmsQuery} placeholder="Type to search..."/>
            </InputGroup>
        </div>
    );
};

export default Toolbar;
