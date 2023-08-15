import { defineNuxtModule } from '@nuxt/kit'
import { allComponents, allPlugins, libraryName, resolveComponents, resolvePlugins } from './core/tdesign'
import { allIcons, resolveIcons } from './core/tdesign-icons'

// Module options TypeScript interface definition
export interface ModuleOptions {
  components: string[]
  plugins: string[]
  icons: string[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: libraryName,
    configKey: 'TDesign',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    components: allComponents,
    plugins: allPlugins,
    icons: allIcons,
  },
  setup(options, nuxt) {
    nuxt.options.css = nuxt.options.css ?? []
    nuxt.options.css.push(`${libraryName}/es/style/index.css`)

    if (nuxt.options.imports.autoImport !== false)
      resolvePlugins(options.plugins)

    if (nuxt.options.components !== false) {
      resolveComponents(options.components)
      resolveIcons(options.icons)
    }

    // const resolver = createResolver(import.meta.url)
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
