import { _PORT } from './utils'

new _PORT({
  name: 'background',
  type: 'background',
  postponeConnection: true,
  events: {
    ONEOFF: [
      'started:app',
      'toggled:addon',
      'toggled:sync',
      'toggled:sync-settings',
      'synced:entry',
      'updated:settings',
      'updated:history',
      'updated:history-on-restoration',
      'updated:logs',
      'updated:ctm-settings',
      'updated:misc-settings',
      'updated:naming-settings',
      'updated:bg-color-settings',
      'updated:custom-search-settings',
      'updated:saveopt-settings',
      'saved:entry',
      'deleted:entry',
      'deleted:entries',
      'imported:settings',
      'imported:history',
      'ctx:m',
      'ctx:d',
      'ctx:b',
      'ctx:-b',
      'ctx:n',
      'sidebar:highlight',
      'sidebar:delete-highlight',
      'sidebar:bookmark',
      'sidebar:delete-bookmark',
      'sidebar:note',
      'sidebar:save-changes',
      'sidebar:undo',
      'sidebar:redo',
      'sidebar:scroll-to-bookmark',
      'sidebar:toggle-notes',
      'sidebar:next-mark',
      'sidebar:retry-restoration',
      'opened:sidebar'
    ],
    CONNECTION: [
      'started:app',
      'toggled:addon',
      'updated:settings',
      'updated:entry',
      'saved:entry',
      'toggled:sync-settings',
      'changed:selection',
      'unsaved-changes',
      'clicked:mark',
      'added:bookmark',
      'removed:bookmark',
      'added:note',
      'removed:last-note',
      'page-state',
      'notes-state',
      'entry:found',
      'entry:found-for-tab'
    ]
  }
});
