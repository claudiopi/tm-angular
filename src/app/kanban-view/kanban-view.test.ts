import { expect } from '@open-wc/testing';
import KanbanView from './kanban-view.js';

describe('KanbanView', () => {
  it('<app-kanban-view> is an instance of KanbanView', async () => {
    const element = document.createElement('app-kanban-view');
    expect(element).to.be.instanceOf(KanbanView);
  });
});
