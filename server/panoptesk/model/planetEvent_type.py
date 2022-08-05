from enum import Enum # integrate with smart contract from marketplace repo

class PlanetEventType(Enum):
    INCOME = "INCOME"
    OUTGOING = "OUTGOING" # when an object leaves the planet's class