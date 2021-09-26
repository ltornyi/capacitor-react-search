import React, { useMemo, useState } from 'react';
import { Col, Container, Form, Row, ListGroup } from 'react-bootstrap';
import { debounce } from 'lodash';

import { Org } from './models/Org';
import { Contact } from './models/Contact';
import { searchOrgs } from './OrgAPI';
import { searchContacts } from './ContactAPI';

const SearchPage = () => {
    const [orgs, setOrgs] = useState<Org[]>([]);
    const [contacts, setContacts] = useState<Contact[]>([]);

    const handleSearchChange = async (newValue: string) => {
        const data = await Promise.all([searchOrgs(newValue), searchContacts(newValue)]);
        setOrgs(data[0]);
        setContacts(data[1]);
    }

    const debouncedHandler = useMemo(
        () => debounce(handleSearchChange, 500)
    , []);

    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    <h2>Search</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Search for Organizations, Contacts</Form.Label>
                        <Form.Control
                        type="text"
                        required
                        maxLength={5}
                        placeholder=""
                        onChange={(e) => debouncedHandler(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroup.Item className="text-primary">Organizations</ListGroup.Item>
                        {orgs.map( org => <ListGroup.Item key={org.entityId}> {org.clientName} / {org.clientType} </ListGroup.Item>)}
                        <ListGroup.Item className="text-primary">Contacts</ListGroup.Item >
                        {contacts.map( contact => <ListGroup.Item key={contact.entityId}> {contact.clientName} / {contact.orgName} </ListGroup.Item>)}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchPage;