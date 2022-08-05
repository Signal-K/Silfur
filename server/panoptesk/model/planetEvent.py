import datetime as dt
from marshmallow import Schema, fields

class planetEvent():
    def __init__(self, description, amount, type):
        self.description = description
        self.amount = amount
        self.created_at = dt.datetime.now()
        self.type = type

    def __repr__(self):
        return '<planetEvent(name={self.description!r})>'.format(self=self)

class planetEventSchema(Schema): # deserialize & serialize instances of planetEvent between JSON objects
    description = fields.Str()
    amount = fields.Number()
    created_at = fields.Date()
    type = fields.Str()