from web3 import Web3, HTTPProvider

web3 = Web3(HTTPProvider('http://127.0.0.1:8545'))
accounts = web3.personal.listAccounts
gasPrice = web3.eth.gasPrice