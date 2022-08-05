# When new objects (right now just moons) are added to a planet's class
from marshmallow import post_load
from .planetEvent import planetEvent, planetEventSchema
from .planetEvent_type import PlanetEventType

"""
class Income(planetEvent):
    def __init__(self, description, type): # type of object e.g. moon
        super(Income, self).__init__(description, type, PlanetEventType.INCOME)

    def __repr__(self):
        return '<Income(name={self.description!r})>'.format(self=self)
"""

class Income(planetEvent):
    def __init__(self, description, amount): # type of object e.g. moon
        super(Income, self).__init__(description, amount, PlanetEventType.INCOME)

    def __repr__(self):
        return '<Income(name={self.description!r})>'.format(self=self)

class IncomeSchema(planetEventSchema):
    @post_load
    def make_income(self, data):
        return Income(**data)