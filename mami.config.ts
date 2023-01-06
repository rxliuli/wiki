import { defineConfig } from '@mami/cli'
import * as vuepress from '@mami/plugin-vuepress'
import * as joplin from '@mami/plugin-joplin'
import json from './.joplin-blog.json'
import path from 'path'

export default defineConfig({
  input: [joplin.input(json)],
  output: [vuepress.output({ root: path.resolve(__dirname, 'docs') })],
})
