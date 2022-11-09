// https://eth-goerli.g.alchemy.com/v2/swc8yLVnWANQ4suQh75mOVasBpvOFUgt

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/swc8yLVnWANQ4suQh75mOVasBpvOFUgt',
      accounts: [ '9e5a5559500c0f70d13c2eb1a91873a06ae1f934c0e1af4ad916e91fd629bd97' ]
    }
  }
}