import { addImportsSources } from "@nuxt/kit"
import { libraryName } from "./useTDesign"

export const resolveImports = (imports: string[]) => {
    addImportsSources({ imports, from: libraryName })
}