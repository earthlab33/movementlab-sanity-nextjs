import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: '4xudl8md',
    dataset: "production",
    title: "MovementLab",
    apiVersion: '2023-07-09',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types: schemas}
});

// Path: sanity.d.ts

export default config;