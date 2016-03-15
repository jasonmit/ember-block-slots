/* jshint node:true*/
module.exports = {
  'framework': 'mocha',
  'test_page': 'tests/index.html?hidepassed&coverage',
  'disable_watching': true,
  'launch_in_ci': [
    'FireFox'
  ],
  'launch_in_dev': [
    'FireFox',
    'Chrome'
  ]
}
