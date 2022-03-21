import '@madoc.io/types';
import { poetry } from './project-templates/poetry';
import { eva } from './project-templates/eva';

export function hookRoutes() {
  return [];
}

export function hookComponents() {
  return {};
}

export function hookBlocks() {
  return {};
}

export const projectTemplates = [poetry, eva];

// All themes.
export const themes = [];
