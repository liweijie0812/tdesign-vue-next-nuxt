import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { resolveComponents } from './composables/useComponents'
import { resolveImports } from './composables/useImports'
import { allComponents, allPlugins, libraryName } from './composables/useTDesign'


// Module options TypeScript interface definition
export interface ModuleOptions {
  components: string[]
  imports: string[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: libraryName,
    configKey: 'TDesign'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    components: allComponents,
    imports: allPlugins
  },
  setup(options, nuxt) {
    nuxt.options.build.transpile.push(libraryName)

    nuxt.options.imports.autoImport !== false && resolveImports(options.imports)
    nuxt.options.components !== false && resolveComponents(options.components)


    // const resolver = createResolver(import.meta.url)
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
