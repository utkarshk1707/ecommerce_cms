import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'ecommerce',

  projectId: 'f2hpucv2',
  dataset: 'production2',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
