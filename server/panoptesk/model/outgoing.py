from marshmallow import post_load
from .planetEvent import planetEvent, planetEventSchema
from .planetEvent_type import PlanetEventType

"""
class Outgoing(planetEvent): # when an object leaves the planet's class
    def __init__(self, description, type):
        super(Outgoing, self).__init__(description, )
"""

class Outgoing(planetEvent): # when an object leaves the planet's class
    def __init__(self, description, amount):
        super(Outgoing, self).__init__(description, -abs(amount), PlanetEventType.OUTGOING) # forces amount to be negative

    def __repr__(self):
        return '<Outgoing(name={self.description!r})>'.format(self=self)

class OutgoingSchema(planetEventSchema):
    @post_load
    def make_outgoing(self, data):
        return Outgoing(**data)