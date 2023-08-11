import { addComponent, } from '@nuxt/kit'
import { prefix, libraryName } from './useTDesign'
export const resolveComponents = (components: string[]) => {
    components.map((name: string) => {
        addComponent({
            name: `${prefix}${name}`,
            export: name,
            filePath: libraryName,
        })
    })
}