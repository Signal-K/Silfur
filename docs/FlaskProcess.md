1. Flask API breadboard
2. Add react styling to breadboard
3. Add user profiles and merge formatting between this flask api and the Moralis/mongo instance seen in [pull 17](https://github.com/signal-k/polygon/pull/17)
4. Merge with [pull 5](https://github.com/Signal-K/sytizen/pull/5#ref-commit-20a5c9e)

Move the frontend into the [marketplace repository](https://github.com/signal-k/marketplace) while keeping the breadboard here, and work on more of the Moralis integration here as well. 

As of right now, there are three flask apps:
* `./` -> Demo flask web server with frontend & template directory
* `./frontend` -> Demo of interacting (via proxy) with React frontend on port 5000/3000
* `./api` -> Demo api that will be merged into `./frontend/server` later

Flask app in `./` should be merged with api in `./api` once finished