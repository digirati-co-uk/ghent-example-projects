import { ProjectTemplate } from '@madoc.io/types/dist/extensions/projects/types';

export const poetry: ProjectTemplate = {
  type: 'template-34-poetry',
  metadata: {
    label: 'Project 34 export',
    description: 'An export of project poetry',
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
      miradorCanvasPage: true,
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
        nonLatinFulltext: true,
        searchMultipleFields: true,
        onlyShowManifests: false,
      },
      activityStreams: {
        manifest: true,
        canvas: false,
        curated: true,
        published: false,
      },
      metadataSuggestions: {
        collection: true,
        manifest: true,
        canvas: true,
      },
    },
  },
  captureModel: {
    document: {
      id: '6a4ec531-e840-4f00-9772-fa1ccb2a58bf',
      type: 'entity',
      label: 'Poetry',
      properties: {
        Poetry: [
          {
            id: '049d11fb-e26f-456a-8cd7-3fcd611fdee7',
            type: 'entity',
            label: 'Poetry',
            description: 'Select the poem, identify the title and the author',
            allowMultiple: true,
            properties: {
              Author: [
                {
                  id: 'b3511f7a-e52c-4742-a8f0-d4890677475c',
                  type: 'entity',
                  label: 'Auteur',
                  allowMultiple: true,
                  properties: {
                    Achternaam: [
                      {
                        id: '068dc9b0-4f35-4cc6-bd98-13165764cdc8',
                        type: 'text-field',
                        label: 'Achternaam',
                        value: '',
                      },
                    ],
                    Voornaam: [
                      {
                        id: '25d98a30-95da-4cc7-bac3-f35bc1dc0eb3',
                        type: 'text-field',
                        label: 'Voornaam',
                        value: '',
                      },
                    ],
                  },
                  selector: {
                    id: 'bc139a0b-ab40-4d8c-8f46-a0931f74bce0',
                    type: 'box-selector',
                    state: null,
                  },
                },
              ],
              Titel: [
                {
                  id: '166fd9ff-70ce-43c6-ab11-801e0358eeee',
                  type: 'text-field',
                  label: 'Titel',
                  value: '',
                  selector: {
                    id: '4e9ac228-4b26-4081-95c6-6f8ad17c8fd2',
                    type: 'box-selector',
                    state: null,
                  },
                  multiline: false,
                },
              ],
            },
            selector: {
              id: '32b01e3d-b8bb-4071-9f01-28e786ac1955',
              type: 'box-selector',
              state: null,
            },
          },
        ],
      },
    },
  },
};
