import { addComponent } from '@nuxt/kit';
import * as AllIcons from 'tdesign-icons-vue-next'

const libraryName = 'tdesign-icons-vue-next';
export const allIcons = Object.keys(AllIcons)

export const resolveIcons = (icons: string[]) => {
    icons.map((name: string) => {
        addComponent({
            name: name,
            export: name,
            filePath: libraryName,
        })
    })
}