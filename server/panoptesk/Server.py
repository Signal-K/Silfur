from crypt import methods
import json
from flask import Flask, jsonify, request

from panoptesk.model.outgoing import Outgoing, OutgoingSchema
from panoptesk.model.income import Income, IncomeSchema
from panoptesk.model.planetEvent_type import PlanetEventType

app = Flask(__name__)

planets = [
    Income('Mars Moon', 2),
    Income('Venus Moon', 1),
    Outgoing('Venus Moon', 1)
]

@app.route('/planets')
def get_planets():
    schema = IncomeSchema(many=True)
    incomes = schema.dump(
        filter(lambda t: t.type == PlanetEventType.INCOME, planets)
    )
    return jsonify(incomes.data)

@app.route('/planets', methods=['POST'])
def add_planets():
    income = IncomeSchema().load(request.get_json())
    planets.append(income.data)
    return "", 204

@app.route('/outgoings')
def get_outgoings():
    schema = OutgoingSchema(many=True)
    outgoings = schema.dump(
        filter(lambda t: t.type == PlanetEventType.EXPENSE, planets)
    )
    return jsonify(outgoings.data)

@app.route('/outgoings', methods=["POST"])
def add_outgoing():
    outgoing = OutgoingSchema().load(request.get_json())
    planets.append(outgoing.data)
    return "", 204

if __name__ == "__main__":
    app.run()