// @flow

export const topic = {
  name: 'push',
  description: 'push code to heroku'
}

export const commands = [
  require('./commands/push'),
  require('./commands/builds'),
  require('./commands/output')
]
