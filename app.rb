require 'sinatra'
require 'pg'

# Set up postgres connection
db = PG.connect(dbname: "silfur_sailors_db")

# Routes
get "/users/:id" do
    # User data retrieved here
end

post "/transactions" do
    # Process currency transactions & update user balances here
end

run Sinatra::Application