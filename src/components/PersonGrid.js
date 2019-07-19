import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonCard from "./PersonCard";
import { Table } from 'semantic-ui-react';


export default function PersonGrid ({ }) {
    const [person, setPerson] = useState();

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
            setPerson(response.data.results)
        });
    }, []);

if(!person) {
    return <h1>Loading...</h1>
} else {
    return (
    <div className="people-grid">
        <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Birth Year</Table.HeaderCell>
        <Table.HeaderCell>Mass</Table.HeaderCell>
      </Table.Row>
    </Table.Header> 
    </Table>
        {person.map((people, index) => <PersonCard people={people} />)}
    </div>
    )
}

    
}