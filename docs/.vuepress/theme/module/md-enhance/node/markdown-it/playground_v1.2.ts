import { hash } from '@vuepress/utils'
import type Token from 'markdown-it/lib/token'

const extensions = ['js', 'ts', 'vue', 'jsx', 'tsx', 'json']
export const importKey = 'import-map.json'
export const userImportKey = 'user-imports.json'

export const playgroundRender = (tokens: Token[], index: number): string => {
  const { nesting, info } = tokens[index]
  const title = /^ *playground\s*(.*)\s*$/u.exec(info)
  const key = `playground-${hash(index)}`

  if (nesting === -1) return `</Playground>`

  const codeConfigs = {}
  let settings: string = null

  let configKey
  let isSettings
  for (let i = index; i < tokens.length; i++) {
    // console.log(i, tokens[i])
    const { type, content, info } = tokens[i]

    if (type === 'container_playground_close') break

    if (type === 'tab_open') {
      const fileTitle = info
      if (!fileTitle || fileTitle.length === 0) {
        continue
      }
      configKey = fileTitle
    } else if (type === 'inline') {
      configKey = null
      // const isImports = /^\s*::: *imports\s*$/u.test(content)
      const imports = /^\s*::: *imports\s*(.*)\s*$/u.exec(content)

      isSettings = /^\s*::: *settings\s*$/u.test(content)

      if (imports) {
        const importMap = imports[1]
        if (importMap.length > 1) {
          configKey = imports[1]
        } else {
          configKey = userImportKey
        }
      } else if (isSettings) {
        // ...
      } else {
        continue
      }
    }

    if (!content) continue

    if (type === 'fence' && extensions.includes(info) && configKey) {
      codeConfigs[configKey] = {
        lang: info,
        content: content,
      }
    }

    if (type === 'fence' && info === 'json' && isSettings) {
      settings = content.replace(/^\s+|\s+$/g, '').replace(/\/+$/, '')
    }
  }

  const config = encodeURIComponent(JSON.stringify(codeConfigs))
  const settingString = settings
    ? encodeURIComponent(settings)
    : encodeURIComponent('{}')

  return `<Playground title="${title?.[1] || ''}"
  id="${key}"
  settings="${settingString}"
  config="${config}">`
}
