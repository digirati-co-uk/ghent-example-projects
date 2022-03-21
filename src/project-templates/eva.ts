import { ProjectTemplate } from '@madoc.io/types/dist/extensions/projects/types';

export const eva: ProjectTemplate = {
  type: 'template-30-Eva',
  metadata: {
    label: 'Project 30 export',
    description: 'An export of project Eva',
    version: '1.0.0',
  },
  configuration: {
    activity: {},
    defaults: {
      allowCollectionNavigation: true,
      allowManifestNavigation: true,
      allowCanvasNavigation: true,
      randomlyAssignCanvas: false,
      priorityRandomness: true,
      claimGranularity: 'canvas',
      maxContributionsPerResource: false,
      allowSubmissionsWhenCanvasComplete: false,
      randomlyAssignReviewer: false,
      manuallyAssignedReviewer: null,
      adminsAreReviewers: true,
      hideCompletedResources: false,
      revisionApprovalsRequired: 20,
      contributionWarningTime: false,
      skipAutomaticOCRImport: false,
      allowPersonalNotes: false,
      defaultEditorOrientation: 'horizontal',
      skipManifestListingPage: false,
      hideStatistics: false,
      hideProjectCollectionNavigation: false,
      hideProjectManifestNavigation: false,
      searchStrategy: 'websearch' as any,
      hideManifestMetadataOnCanvas: false,
      hideCanvasThumbnailNavigation: false,
      showSearchFacetCount: false,
      miradorCanvasPage: false,
      universalViewerCanvasPage: false,
      contributionMode: 'annotation',
      shortExpiryTime: '10',
      longExpiryTime: '1440',
      modelPageOptions: {
        fixedTranscriptionBar: false,
        preventContributionAfterRejection: false,
        preventContributionAfterSubmission: false,
        preventMultipleUserSubmissionsPerResource: false,
        preventContributionAfterManifestUnassign: false,
        hideViewerControls: false,
      },
      projectPageOptions: {
        hideStartContributing: false,
        hideSearchButton: false,
        hideRandomManifest: false,
        hideRandomCanvas: false,
      },
      manifestPageOptions: {
        hideStartContributing: false,
        hideOpenInMirador: false,
        hideSearchButton: false,
        hideRandomCanvas: false,
        hideFilterImages: false,
        directModelPage: false,
        showIIIFLogo: true,
      },
      headerOptions: {
        hideSiteTitle: false,
        hideProjectsLink: false,
        hideCollectionsLink: false,
        hideDashboardLink: false,
        hidePageNavLinks: false,
        hideSearchBar: false,
      },
      searchOptions: {
        nonLatinFulltext: false,
        searchMultipleFields: false,
        onlyShowManifests: false,
      },
      activityStreams: {
        manifest: true,
        canvas: false,
        curated: true,
        published: false,
      },
      metadataSuggestions: {
        collection: false,
        manifest: false,
        canvas: false,
      },
    },
  },
  captureModel: {
    document: {
      id: '072e96f4-30c2-47e5-8831-919dec32e003',
      type: 'entity',
      label: 'Eva',
      properties: {
        'Algemene informatie (Gedicht)': [
          {
            id: 'f976df07-36ab-48e5-ae21-fd8e32424173',
            type: 'entity',
            label: 'Algemene informatie (Gedicht)',
            properties: {
              Auteur: [
                {
                  id: '466a943d-3021-4b92-adce-b5c873a0591b',
                  type: 'entity',
                  label: 'Auteur',
                  labelledBy: 'Achternaam',
                  properties: {
                    Achternaam: [
                      {
                        id: 'fd9d3d4a-7138-4b1f-9c47-8b79644116c8',
                        type: 'text-field',
                        label: 'Achternaam',
                        value: '',
                      },
                    ],
                    Voornaam: [
                      {
                        id: 'c1bbbad2-dd5c-488d-9cf4-5a4181174f2b',
                        type: 'text-field',
                        label: 'Voornaam',
                        value: '',
                      },
                    ],
                    'Geboorte- en sterfdatum': [
                      {
                        id: '614ad6fb-4607-44c4-a330-621b61534c04',
                        type: 'text-field',
                        label: 'Geboorte- en sterfdatum',
                        value: '',
                      },
                    ],
                    Nationaliteit: [
                      {
                        id: '515248ad-13f7-487a-aa2f-da01a3670dc5',
                        type: 'text-field',
                        label: 'Nationaliteit',
                        value: '',
                      },
                    ],
                  },
                },
              ],
              'Vertaling?': [
                {
                  id: '9fa12fb7-5185-4956-b6db-448e9f8f3daf',
                  type: 'entity',
                  label: 'Origineel',
                  properties: {
                    Vertaling: [
                      {
                        id: 'a9898dcd-5bc7-40cf-a993-37008ec933ce',
                        type: 'entity',
                        label: 'Vertaling',
                        properties: {
                          'Vertaald vanuit': [
                            {
                              id: '2b31175f-479b-4be2-9363-8e16441c4ed7',
                              type: 'text-field',
                              label: 'Vertaald vanuit',
                              value: '',
                            },
                          ],
                          'Vertaald door': [
                            {
                              id: 'f1085faf-8744-45cb-9e57-a2330af4494c',
                              type: 'text-field',
                              label: 'Vertaald door',
                              value: '',
                            },
                          ],
                        },
                        selector: {
                          id: '1c1a4262-5afd-4c34-8df5-533eb57617aa',
                          type: 'box-selector',
                          state: null,
                        },
                      },
                    ],
                    'Verhouding met origineel': [
                      {
                        id: 'a38ec93e-1f1d-47bf-916e-767ab3bd6757',
                        type: 'entity',
                        label: 'Verhouding met origineel',
                        properties: {
                          Lengte: [
                            {
                              id: 'eeab41b6-074c-4137-ae13-5eea3cc90c9b',
                              type: 'text-field',
                              label: 'Lengte',
                              value: '',
                            },
                          ],
                          Stilistisch: [
                            {
                              id: '6b9c8c42-a822-43ad-826f-7b648bcaaee4',
                              type: 'text-field',
                              label: 'Stilistisch',
                              value: '',
                            },
                          ],
                          'Vergelijking context origineel vs. in De Vrouw': [
                            {
                              id: 'b8619ace-3225-4a07-90ac-8efa16086ff5',
                              type: 'text-field',
                              label: 'Vergelijking context origineel vs. in De Vrouw',
                              value: '',
                            },
                          ],
                        },
                      },
                    ],
                    'URL Origineel': [
                      {
                        id: '8f06ab8e-b954-4b0a-9f55-c3f01c08835a',
                        type: 'text-field',
                        label: 'URL Origineel',
                        value: '',
                      },
                    ],
                  },
                  selector: {
                    id: 'e4a81077-7a6b-4027-a6e5-2aa36702d38e',
                    type: 'box-selector',
                    state: null,
                  },
                },
              ],
              Titel: [
                {
                  id: '79ede668-08e4-4ee9-9568-781711588eb1',
                  type: 'text-field',
                  label: 'Titel',
                  value: '',
                },
              ],
            },
            selector: {
              id: '730ed75f-6153-4bc3-b7f7-f1cb1328fcaf',
              type: 'box-selector',
              state: null,
            },
          },
        ],
        'PoÎtische eigenschappen': [
          {
            id: '0f2f100c-4c59-4f5e-aedc-e89a81487b1c',
            type: 'entity',
            label: 'PoÎtische eigenschappen',
            properties: {
              'Analyse vorm en inhoud gedicht': [
                {
                  id: 'b65b2383-1369-4fd1-974f-c2cc630e71ab',
                  type: 'text-field',
                  label: 'Analyse vorm en inhoud gedicht',
                  value: '',
                },
              ],
              Rijmschema: [
                {
                  id: 'd176c663-d070-44c0-b0a4-bf6b79538269',
                  type: 'text-field',
                  label: 'Rijmschema',
                  value: '',
                },
              ],
              'Aantal strofes': [
                {
                  id: '8a987e7b-5128-4833-b0b9-75c42faf0f0f',
                  type: 'text-field',
                  label: 'Aantal strofes',
                  value: '',
                },
              ],
              'Aantal versregels': [
                {
                  id: '6367d247-657b-4fd0-bda2-b056255e24ab',
                  type: 'text-field',
                  label: 'Aantal versregels',
                  value: '',
                },
              ],
            },
          },
        ],
        'Relatie tussen gedicht en De Vrouw': [
          {
            id: '087f89a9-da06-45af-9236-f925947056fc',
            type: 'entity',
            label: 'Relatie tussen gedicht en De Vrouw',
            properties: {
              'Omliggend artikel': [
                {
                  id: '035f82d4-3fbc-43ef-8901-5db65efaa3e5',
                  type: 'entity',
                  label: 'Omliggend artikel',
                  allowMultiple: true,
                  properties: {
                    Titel: [
                      {
                        id: '959a92e5-5d21-4ca8-ab49-7ad9b6c35d0c',
                        type: 'text-field',
                        label: 'Titel',
                        value: '',
                      },
                    ],
                    Auteur: [
                      {
                        id: '04a8319c-3af6-4d9b-bece-5d49ae07a2d3',
                        type: 'text-field',
                        label: 'Auteur',
                        value: '',
                      },
                    ],
                    Pagina: [
                      {
                        id: '71c8d1a7-95e8-44ab-a6a0-2ab33ad1de32',
                        type: 'text-field',
                        label: 'Pagina',
                        value: '',
                      },
                    ],
                  },
                },
              ],
              'Effect van inbedding': [
                {
                  id: '5601f778-8f86-4b93-957e-b1d379f22ee5',
                  type: 'entity',
                  label: 'Effect van inbedding',
                  properties: {
                    'Waarde van het gedicht in context': [
                      {
                        id: 'b46d45e6-8286-401f-9854-bc4ab04bc262',
                        type: 'text-field',
                        label: 'Waarde van het gedicht in context',
                        value: '',
                      },
                    ],
                    'Aansluiting bij inhoud artikels': [
                      {
                        id: 'c9be9b00-78c3-4a42-af10-5a0204ba3760',
                        type: 'text-field',
                        label: 'Aansluiting bij inhoud artikels',
                        value: '',
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        "Verhouding tot tentoonstelling 'Vrouwenarbeid' 1898": [
          {
            id: '33bc32f6-1f97-4fde-bdd0-78368bc037f4',
            type: 'text-field',
            label: "Verhouding tot tentoonstelling 'Vrouwenarbeid' 1898",
            value: '',
          },
        ],
      },
    },
  },
};
