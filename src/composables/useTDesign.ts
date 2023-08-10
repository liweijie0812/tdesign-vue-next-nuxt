import * as AllComponents from 'tdesign-vue-next/cjs/components'
import * as AllPlugins from 'tdesign-vue-next/cjs/plugins'

export const prefix = 'T'
export const libraryName = 'tdesign-vue-next';
export const allPlugins = Object.keys(AllPlugins)
export const allComponents = Object.keys(AllComponents).filter(item => !allPlugins.includes(item))