import React from "react";
import { List, Header } from "semantic-ui-react";

export const Planets = ({ planets }) => {
    return (
        <List>
            {planets.map(planet => {
                return (
                    <List.Item key={planet.planetName}>
                        <Header>{planet.planetName}</Header>
                        <Header>{planet.moons}</Header>
                    </List.Item>
                )
            })}
        </List>
    )
}