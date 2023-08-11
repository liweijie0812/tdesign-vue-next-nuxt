import { defineNuxtModule } from '@nuxt/kit'
import { resolveComponents } from './composables/useComponents'
import { resolveImports } from './composables/useImports'
import { allComponents, allPlugins, libraryName } from './composables/useTDesign'
import { allIcons, resolveIcons } from './composables/useTDesignIcons'


// Module options TypeScript interface definition
export interface ModuleOptions {
  components: string[]
  plugins: string[]
  icons: string[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: libraryName,
    configKey: 'TDesign'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    components: allComponents,
    plugins: allPlugins,
    icons: allIcons
  },
  setup(options, nuxt) {
    nuxt.options.build.transpile.push(libraryName+'/es')

    nuxt.options.imports.autoImport !== false && resolveImports(options.plugins)
    if (nuxt.options.components !== false) {
      resolveComponents(options.components)
      resolveIcons(options.icons)
    }


    // const resolver = createResolver(import.meta.url)
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
