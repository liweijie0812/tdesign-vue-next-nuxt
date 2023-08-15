import { addComponent } from '@nuxt/kit'
import * as AllIcons from 'tdesign-icons-vue-next'

const libraryName = 'tdesign-icons-vue-next'
export const allIcons = Object.keys(AllIcons)

export function resolveIcons(icons: string[]) {
  icons.forEach((name: string) => {
    addComponent({
      name,
      export: name,
      filePath: libraryName,
    })
  })
}
