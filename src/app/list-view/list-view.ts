import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcDialogComponent, IgcIconComponent, IgcInputComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent, IgcSelectComponent } from 'igniteui-webcomponents';

defineComponents(IgcIconComponent, IgcAvatarComponent, IgcListComponent, IgcListItemComponent, IgcDialogComponent, IgcInputComponent, IgcSelectComponent, IgcButtonComponent, IgcRippleComponent);

@customElement('app-list-view')
export default class ListView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      background-color: transparent;
      border-color: rgba(96, 96, 96, 0.15);
      border-width: 0px 3px 0px 0px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 280px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      background-color: #A249A5;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      margin: 0 0 16px;
      padding: 16px 24px;
      min-width: 280px;
      min-height: 80px;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_3 {
      background-color: #19AD87;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      margin: 0 0 16px;
      padding: 16px 24px;
      min-width: 280px;
      min-height: 80px;
    }
    .group_4 {
      background-color: #FE7659;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      margin: 0 0 16px;
      padding: 16px 24px;
      min-width: 280px;
      min-height: 80px;
    }
    .group_5 {
      background-color: #99B34D;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      margin: 0 0 16px;
      padding: 16px 24px;
      min-width: 280px;
      min-height: 80px;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 480px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: hsla(var(--ig-surface-500));
      margin: 0 8px 0 0;
    }
    .h6 {
      color: hsla(var(--ig-surface-500));
      height: max-content;
      min-width: min-content;
    }
    .avatar {
      --background: none;
      --ig-gray-400: transparent;
    }
    .icon_1 {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: rgba(256, 256, 256, 0.7);
    }
    .icon_2 {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .avatar_1::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: rgba(0, 0, 0, 0.1);
    }
    .avatar_2::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: rgba(0, 0, 0, 0.1);
    }
    .avatar_3::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: rgba(0, 0, 0, 0.1);
    }
    .avatar_4::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: rgba(0, 0, 0, 0.1);
    }
    .list {
      margin: 0 16px 16px;
      height: max-content;
      min-width: min-content;
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
    .button_1 {
      right: 24px;
      bottom: 24px;
      position: absolute;
      width: max-content;
      height: max-content;
    }
    .button_1_1::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: hsla(var(--ig-secondary-500));
    }
  `;

  @query('#new-task-dialog-2')
  public newTaskDialog2?: IgcDialogComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="row-layout group_1">
          <div class="row-layout group_2">
            <span class="material-icons icon">
              assignment
            </span>
            <h6 class="h6">
              To do
            </h6>
          </div>
          <igc-avatar initials="3" size="small" shape="circle" class="avatar avatar_1"></igc-avatar>
        </div>
        <igc-list class="list">
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar2.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Create brand guidelines</div>
            <div slot="subtitle">Deadline: Nov 19, 2021</div>
            <div slot="end">
              <span class="material-icons icon_1">
                attach_file
              </span>
            </div>
          </igc-list-item>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar6.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">App Preview</div>
            <div slot="subtitle">Deadline: Nov 24, 2021</div>
            <div slot="end">
              <span class="material-icons icon_1">
                attach_file
              </span>
            </div>
          </igc-list-item>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar9.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Cloud Integration</div>
            <div slot="subtitle">Deadline: Nov 28, 2021</div>
          </igc-list-item>
        </igc-list>
      </div>
      <div class="column-layout group">
        <div class="row-layout group_3">
          <div class="row-layout group_2">
            <span class="material-icons icon">
              developer_board
            </span>
            <h6 class="h6">
              In Development
            </h6>
          </div>
          <igc-avatar initials="5" size="small" shape="circle" class="avatar avatar_2"></igc-avatar>
        </div>
        <igc-list class="list">
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar6.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Connect to DataSources</div>
            <div slot="subtitle">Deadline: Oct 28, 2021</div>
          </igc-list-item>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar3.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Build App</div>
            <div slot="subtitle">Deadline: Oct 28, 2021</div>
            <div slot="end">
              <span class="material-icons icon_1">
                attach_file
              </span>
            </div>
          </igc-list-item>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar5.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Copy-Paste Update</div>
            <div slot="subtitle">Deadline: Oct 24, 2021</div>
          </igc-list-item>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar2.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Grid Data-Binding </div>
            <div slot="subtitle">Deadline: Oct 26, 2021</div>
          </igc-list-item>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar10.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Main Dashboard Design</div>
            <div slot="subtitle">Deadline: Oct 20, 2021</div>
          </igc-list-item>
        </igc-list>
      </div>
      <div class="column-layout group">
        <div class="row-layout group_4">
          <div class="row-layout group_2">
            <span class="material-icons icon">
              assignment_late
            </span>
            <h6 class="h6">
              Validation
            </h6>
          </div>
          <igc-avatar initials="4" size="small" shape="circle" class="avatar avatar_3"></igc-avatar>
        </div>
        <igc-list class="list">
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar7.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Update Samples</div>
            <div slot="subtitle">Deadline: Oct 15, 2021</div>
            <div slot="end">
              <span class="material-icons icon_1">
                attach_file
              </span>
            </div>
          </igc-list-item>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar6.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Floating Toolbar</div>
            <div slot="subtitle">Deadline: Oct 14, 2021</div>
          </igc-list-item>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar9.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Input Update</div>
            <div slot="subtitle">Deadline: Oct 17, 2021</div>
            <div slot="end">
              <span class="material-icons icon_1">
                attach_file
              </span>
            </div>
          </igc-list-item>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar3.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">App Library</div>
            <div slot="subtitle">Deadline: Oct 16, 2021</div>
            <div slot="end">
              <span class="material-icons icon_1">
                attach_file
              </span>
            </div>
          </igc-list-item>
        </igc-list>
      </div>
      <div class="column-layout group">
        <div class="row-layout group_5">
          <div class="row-layout group_2">
            <span class="material-icons icon">
              check_circle
            </span>
            <h6 class="h6">
              Done
            </h6>
          </div>
          <igc-avatar initials="5" size="small" shape="circle" class="avatar avatar_4"></igc-avatar>
        </div>
        <igc-list class="list">
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar8.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Onboarding Experience</div>
            <div slot="subtitle">October 13, 2021</div>
          </igc-list-item>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar2.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Design Specs</div>
            <div slot="subtitle">October 9, 2021</div>
          </igc-list-item>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar10.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">File Parser</div>
            <div slot="subtitle">October 10, 2021</div>
            <div slot="end">
              <span class="material-icons icon_1">
                attach_file
              </span>
            </div>
          </igc-list-item>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar2.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Final Mockups</div>
            <div slot="subtitle">Deadline: Oct 14, 2021</div>
          </igc-list-item>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar5.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">GitHub Integration</div>
            <div slot="subtitle">September 30, 2021</div>
            <div slot="end">
              <span class="material-icons icon_1">
                attach_file
              </span>
            </div>
          </igc-list-item>
        </igc-list>
      </div>
      <igc-dialog ?close-on-outside-click="${true}" ?close-on-escape="${true}" id="new-task-dialog-2">
        <h5 slot="title">
          Add New Task
        </h5>
        <div class="column-layout group_6">
          <igc-input label="Task Title" ?outlined="${false}" class="input"></igc-input>
          <div class="row-layout group_7">
            <igc-select ?outlined="${false}" label="Project" placeholder="Pick a project" class="select">
              <span slot="prefix">
                <span class="material-icons icon_2">
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
                <span class="material-icons icon_2">
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
          <igc-button @click=${() => this.newTaskDialog2?.toggle()} class="button">
            Create Task
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </igc-dialog>
      <igc-button variant="fab" @click=${() => this.newTaskDialog2?.toggle()} class="button_1 button_1_1">
        <span class="material-icons">
          add
        </span>
        <igc-ripple></igc-ripple>
      </igc-button>
    `;
  }
}
