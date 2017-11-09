const fs = require('fs')

// First read in the secrets.json to get our mnemonic
let secrets
let mnemonic
if (fs.existsSync('secrets.json')) {
  secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'))
  mnemonic = secrets.mnemonic
} else {
  console.log(
    'No secrets.json found. If you are trying to publish EPM ' +
      'this will fail. Otherwise, you can ignore this message!'
  )
  mnemonic = ''
}

module.exports = {
  networks: {
    live: {
      network_id: 1, // Ethereum public network
      // optional config values
      // host - defaults to "localhost"
      // port - defaults to 8545
      gas: 4712388
      // gasPrice
      // from - default address to use for any transaction Truffle makes during migrations
    },
    testrpc: {
      network_id: 'default'
    },
    development: {
      // truffle test hardcodes the "test" network.
      host: 'localhost',
      port: '8545',
      network_id: 'default',
      gas: 4712388
    }
  }
}
