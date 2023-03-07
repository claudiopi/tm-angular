import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcDialogComponent, IgcDropdownComponent, IgcIconButtonComponent, IgcIconComponent, IgcInputComponent, IgcNavbarComponent, IgcRippleComponent, IgcSelectComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent, IgcAvatarComponent, IgcDropdownComponent, IgcDialogComponent, IgcInputComponent, IgcSelectComponent, IgcButtonComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: hidden;
    }
    .app-bar {
      background-color: #3F51B5;
      color: white;
      height: max-content;
      min-width: min-content;
    }
    .view-container {
      overflow: auto;
      display: block;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .icon-button::part(base) {
      color: white;
    }
    .icon-button_1::part(base) {
      color: white;
    }
    .icon-button_2::part(base) {
      color: white;
    }
    .icon-button_3::part(base) {
      color: white;
    }
    .icon-button_4::part(base) {
      color: white;
    }
    .icon-button_5::part(base) {
      color: white;
    }
    .avatar {
      --background: none;
      --ig-gray-400: transparent;
      margin: 0 8px 0 0;
    }
    .h6 {
      margin: 0 8px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: hsla(var(--ig-gray-900));
    }
    .avatar_1 {
      --background: none;
      --ig-gray-400: transparent;
    }
    .icon_1 {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .avatar_2::part(base) {
      color: rgba(256, 256, 256, 0.8);
      background-color: #FE7659;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: hidden;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_2 {
      background-color: hsla(var(--ig-surface-500));
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 16px;
      min-width: 50px;
      min-height: 80px;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_4 {
      background-color: rgba(256, 256, 256, 0.07);
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 24px 16px 16px;
      height: 100%;
      min-width: 80px;
      min-height: 50px;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 480px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .dropdown {
      left: 0;
      top: 0;
      position: absolute;
      min-width: min-content;
    }
    .button-group {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .input {
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .select {
      margin: 0 16px 0 0;
      height: max-content;
      min-width: min-content;
      flex-grow: 1;
      flex-basis: 0;
    }
    .select_1 {
      height: max-content;
      min-width: min-content;
      flex-grow: 1;
      flex-basis: 0;
    }
    .button {
      margin: 0 16px 16px 0;
      height: max-content;
      min-width: min-content;
    }
    .dropdown::part(base) {
      height: max-content;
    }
  `;

  @query('#icon-button')
  public iconButton?: IgcIconButtonComponent;

  @query('#dropdown')
  public dropdown?: IgcDropdownComponent;

  @query('#new-task-dialog')
  public newTaskDialog?: IgcDialogComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-navbar class="app-bar">
        <h6>Task Management</h6>
        <div slot="start">
          <igc-icon-button variant="flat" class="icon-button">
            <span class="material-icons">
              dashboard
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
        </div>
        <div slot="end">
          <igc-icon-button variant="flat" @click=${() => this.newTaskDialog?.toggle()} class="icon-button_1">
            <span class="material-icons">
              add_circle
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <igc-icon-button variant="flat" class="icon-button_2">
            <span class="material-icons">
              share
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <igc-icon-button variant="flat" class="icon-button_3">
            <span class="material-icons">
              notifications
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <igc-icon-button variant="flat" class="icon-button_4">
            <span class="material-icons">
              search
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <igc-icon-button variant="flat" class="icon-button_5">
            <span class="material-icons">
              account_circle
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
        </div>
      </igc-navbar>
      <div class="row-layout group">
        <div class="column-layout group_1">
          <div class="row-layout group_2">
            <div class="row-layout group_3">
              <igc-avatar initials="FP" size="small" shape="circle" class="avatar avatar_2"></igc-avatar>
              <h6 class="h6">
                Fintech Project
              </h6>
              <igc-icon-button variant="flat" @click=${() => this.dropdown?.toggle(this.iconButton)} id="icon-button">
                <span class="material-icons">
                  keyboard_arrow_down
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-dropdown id="dropdown" class="dropdown">
                <igc-dropdown-header>
                  Projects
                </igc-dropdown-header>
                <igc-dropdown-item>
                  Fintech Project
                </igc-dropdown-item>
                <igc-dropdown-item>
                  Project Name 1
                </igc-dropdown-item>
                <igc-dropdown-item>
                  Project Name 2
                </igc-dropdown-item>
                <igc-dropdown-item>
                  Project Name 3
                </igc-dropdown-item>
              </igc-dropdown>
            </div>
            <span class="button-group">ButtonGroup not yet available in WebComponents</span>
          </div>
          <router-outlet class="view-container"></router-outlet>
        </div>
        <div class="column-layout group_4">
          <span class="material-icons icon">
            group_add
          </span>
          <igc-avatar src="/src/assets/Avatar2.png" size="small" shape="circle" class="avatar_1"></igc-avatar>
          <igc-avatar src="/src/assets/Avatar6.png" size="small" shape="circle" class="avatar_1"></igc-avatar>
          <igc-avatar src="/src/assets/Avatar5.png" size="small" shape="circle" class="avatar_1"></igc-avatar>
          <igc-avatar src="/src/assets/Avatar3.png" size="small" shape="circle" class="avatar_1"></igc-avatar>
          <igc-avatar src="/src/assets/Avatar7.png" size="small" shape="circle" class="avatar_1"></igc-avatar>
          <igc-avatar src="/src/assets/Avatar8.png" size="small" shape="circle" class="avatar_1"></igc-avatar>
          <igc-avatar src="/src/assets/Avatar9.png" size="small" shape="circle" class="avatar_1"></igc-avatar>
          <igc-avatar src="/src/assets/Avatar10.png" size="small" shape="circle" class="avatar_1"></igc-avatar>
        </div>
      </div>
      <igc-dialog ?close-on-outside-click="${true}" ?close-on-escape="${true}" id="new-task-dialog">
        <h5 slot="title">
          Add New Task
        </h5>
        <div class="column-layout group_5">
          <igc-input label="Task Title" ?outlined="${false}" class="input"></igc-input>
          <div class="row-layout group_6">
            <igc-select ?outlined="${false}" label="Project" placeholder="Pick a project" class="select">
              <span slot="prefix">
                <span class="material-icons icon_1">
                  assignment
                </span>
              </span>
              <igc-select-item value="Option">
                Fintech Project
              </igc-select-item>
              <igc-select-item value="Option">
                DataViz Project
              </igc-select-item>
              <igc-select-item value="Option">
                Onboarding Project
              </igc-select-item>
              <igc-select-item value="Option">
                AppBuilder Project
              </igc-select-item>
            </igc-select>
            <igc-select ?outlined="${false}" label="Status" placeholder="Set Status" class="select_1">
              <span slot="prefix">
                <span class="material-icons icon_1">
                  schedule
                </span>
              </span>
              <igc-select-item value="Option">
                To Do
              </igc-select-item>
              <igc-select-item value="Option">
                In Development
              </igc-select-item>
              <igc-select-item value="Option">
                Validation
              </igc-select-item>
              <igc-select-item value="Option">
                Done
              </igc-select-item>
            </igc-select>
          </div>
        </div>
        <div slot="footer">
          <igc-button @click=${() => this.newTaskDialog?.toggle()} class="button">
            Create Task
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </igc-dialog>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
