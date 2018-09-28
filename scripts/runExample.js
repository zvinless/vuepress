const execa = require('execa')

const scope = process.argv[2]
const action = process.argv[3]

;(async function run () {
  await execa('yarn', ['workspace', scope, action], { stdio: 'inherit' })
})()
