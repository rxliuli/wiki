import simpleGit from 'simple-git'
import { DateTime } from 'luxon'

export async function sync() {
  const git = simpleGit()
  await git.add('.')
  await git.commit(
    `auto-commit ${DateTime.local().toFormat('yyyy-MM-dd HH:mm:ss')}`,
  )
  await git.pull()
  await git.push()
}
