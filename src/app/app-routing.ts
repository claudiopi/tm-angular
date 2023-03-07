import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './kanban-view/kanban-view';
import './list-view/list-view';

export const routes: Route[] = [
  { path: '', component: 'app-kanban-view', name: 'Kanban View' },
  { path: 'kanban-view', component: 'app-kanban-view', name: 'Kanban View' },
  { path: 'list-view', component: 'app-list-view', name: 'List View' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
