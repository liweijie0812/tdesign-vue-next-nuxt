import { addComponent, addImportsSources } from '@nuxt/kit';
import * as AllComponents from 'tdesign-vue-next/cjs/components'
import * as AllPlugins from 'tdesign-vue-next/cjs/plugins'

export const libraryName = 'tdesign-vue-next';
const prefix = 'T'

export const allPlugins = Object.keys(AllPlugins);
export const allComponents = Object.keys(AllComponents).filter(item => !allPlugins.includes(item))

export const resolveComponents = (components: string[]) => {
    components.map((name: string) => {
        addComponent({
            name: `${prefix}${name}`,
            export: name,
            filePath: libraryName,
        })
    })
}

export const resolvePlugins = (plugins: string[]) => {
    addImportsSources({ imports:plugins, from: libraryName })
}