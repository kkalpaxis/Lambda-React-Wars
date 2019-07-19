import React from "react";
import { Header, Table } from 'semantic-ui-react';
import styled from 'styled-components';

// const Header = styled.header`
//     color: #233757;
// `;

export default function PersonCard (props) {
    return (

    <Table.Body>
        <Table.Row>
            <Table.Cell>
            <Header as='h4' image>
                <Header.Content style={{color: '#464f80'}}>
                {props.people.name}
                </Header.Content>
            </Header>
            </Table.Cell>
            <Table.Cell>{props.people.birth_year}</Table.Cell>
            <Table.Cell>{props.people.mass}</Table.Cell>
        </Table.Row>
    </Table.Body>
    );
}