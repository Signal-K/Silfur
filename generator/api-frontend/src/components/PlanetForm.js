import React from "react";
import { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";

export const PlanetForm = ({onNewPlanet}) => {
    const [planetName, setPlanetName] = useState('');
    const [moons, setMoons] = useState(0); // Add to Moralis state later

    return (
        <Form>
            <Form.Field>
                <Input placeholder="planet name" value={planetName} onChange={e => setPlanetName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Input placeholder="planet moons (number)" value={moons} onChange={e => setMoons(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Button onClick={async () => {
                    const planet = { planetName, moons };
                    const response = await fetch('/add_planet', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(planet),
                    });
                    if (response.ok) {
                        console.log('post response worked!');
                        onNewPlanet(planet);
                        setPlanetName('');
                        setMoons(0);
                    }
                }}>Submit
                </Button>
            </Form.Field>
        </Form>
    )
}