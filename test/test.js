import path from 'path'
import test from 'ava'
import sao from 'sao'

const template = path.join(__dirname, '..')

test('defaults', async t => {
  const stream = await sao.mockPrompt(template, {
    description: 'mock desc',
    username: 'mock username',
    email: 'mock email'
  })

  t.snapshot(stream.fileList)
  t.snapshot(stream.fileContents('package.json'), 'package.json')
})