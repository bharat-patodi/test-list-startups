import React from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import '../App.css';

class StartupList extends React.Component {
    state = {
        startups: [
            {name: 'ABC company ltd', country: 'India'},
            {name: 'DEF company ltd', country: 'Pak'},
            {name: 'GHI company ltd', country: 'US'},
            {name: 'VBU company ltd', country: 'UK'}
        ]
    }

    render() {
        const { startups } = this.state;
        return(
            <Container>
                <ListGroup>
                    {startups.map(({ name, country }) => (
                        <ListGroupItem>
                            {name}, {country}
                        </ListGroupItem>
                    ))}
                </ListGroup>
                <Button
                    className = "my-button"
                    color="dark"
                    onClick= {() => {
                        const name = prompt('Enter Startup name');
                        const country = prompt('Enter the country');
                        this.setState(state => ({
                            startups: [...state.startups, { name: name, country: country}]
                        }));
                    }}
                >Create New</Button>
            </Container>
        )
    }
}

export default StartupList;