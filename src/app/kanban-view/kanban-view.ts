import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcCardComponent, IgcDialogComponent, IgcIconButtonComponent, IgcIconComponent, IgcInputComponent, IgcRippleComponent, IgcSelectComponent } from 'igniteui-webcomponents';

defineComponents(IgcIconComponent, IgcAvatarComponent, IgcCardComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcDialogComponent, IgcInputComponent, IgcSelectComponent);

@customElement('app-kanban-view')
export default class KanbanView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
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
      flex-shrink: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group_1 {
      background-color: rgba(96, 96, 96, 0.05);
      border-color: rgba(96, 96, 96, 0.15);
      border-width: 0px 3px 0px 0px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 0 0 32px;
      min-width: 280px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_2 {
      background-color: #A249A5;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      margin: 0 0 16px;
      padding: 16px 24px;
      min-width: 280px;
      min-height: 80px;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .card {
      margin: 0 16px 16px;
      height: max-content;
    }
    .group_4 {
      background-color: #19AD87;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      margin: 0 0 16px;
      padding: 16px 24px;
      min-width: 280px;
      min-height: 80px;
    }
    .group_5 {
      background-color: rgba(96, 96, 96, 0.05);
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
    .group_6 {
      background-color: #FE7659;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      margin: 0 0 16px;
      padding: 16px 24px;
      min-width: 280px;
      min-height: 80px;
    }
    .group_7 {
      background-color: #99B34D;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      margin: 0 0 16px;
      padding: 16px 24px;
      min-width: 280px;
      min-height: 80px;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 480px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_9 {
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
    .image {
      height: 100%;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .icon_1 {
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
    .media-content {
      height: 150px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .icon-button::part(base) {
      color: rgba(256, 256, 256, 0.7);
      background-color: rgba(256, 256, 256, 0.07);
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .button {
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
    .button_1 {
      margin: 0 16px 16px 0;
      height: max-content;
      min-width: min-content;
    }
    .button_2 {
      right: 24px;
      bottom: 24.000017284292035px;
      position: absolute;
      width: max-content;
      height: max-content;
    }
    .button_2_1::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: hsla(var(--ig-secondary-500));
    }
  `;

  @query('#new-task-dialog-1')
  public newTaskDialog1?: IgcDialogComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <div class="column-layout group_1">
          <div class="row-layout group_2">
            <div class="row-layout group_3">
              <span class="material-icons icon">
                assignment
              </span>
              <h6 class="h6">
                To do
              </h6>
            </div>
            <igc-avatar initials="3" size="small" shape="circle" class="avatar avatar_1"></igc-avatar>
          </div>
          <igc-card class="card">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/Avatar2.png" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                Create brand guidelines
              </h3>
              <h5 slot="subtitle">
                Deadline: Nov 19, 2021
              </h5>
            </igc-card-header>
            <igc-card-media class="media-content">
              <img src="/src/assets/BrandGuidelines.png" class="image" />
            </igc-card-media>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button">
                COMPLETE
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  attach_file
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  archive
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
          <igc-card class="card">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/Avatar6.png" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                App Preview
              </h3>
              <h5 slot="subtitle">
                Deadline: Nov 24, 2021
              </h5>
            </igc-card-header>
            <igc-card-media class="media-content">
              <img src="/src/assets/AppPreview.png" class="image" />
            </igc-card-media>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button">
                COMPLETE
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  attach_file
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  archive
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
          <igc-card class="card">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/Avatar9.png" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                Cloud Integration
              </h3>
              <h5 slot="subtitle">
                Deadline: Nov 28, 2021
              </h5>
            </igc-card-header>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button">
                COMPLETE
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  attach_file
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  archive
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
        </div>
        <div class="column-layout group_1">
          <div class="row-layout group_4">
            <div class="row-layout group_3">
              <span class="material-icons icon">
                developer_board
              </span>
              <h6 class="h6">
                In Development
              </h6>
            </div>
            <igc-avatar initials="5" size="small" shape="circle" class="avatar avatar_2"></igc-avatar>
          </div>
          <igc-card class="card">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/Avatar6.png" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                Connect to DataSources
              </h3>
              <h5 slot="subtitle">
                Deadline: Oct 28, 2021
              </h5>
            </igc-card-header>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button">
                COMPLETE
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  attach_file
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  archive
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
          <igc-card class="card">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/Avatar3.png" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                Build App
              </h3>
              <h5 slot="subtitle">
                Deadline: Oct 28, 2021
              </h5>
            </igc-card-header>
            <igc-card-media class="media-content">
              <img src="/src/assets/BuildApp.png" class="image" />
            </igc-card-media>
            <igc-card-content class="body-content">
              <p class="typography__body-1 text">
                Body 1
              </p>
            </igc-card-content>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button">
                COMPLETE
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  attach_file
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  archive
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
          <igc-card class="card">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/Avatar5.png" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                Copy-Paste Update
              </h3>
              <h5 slot="subtitle">
                Deadline: Oct 24, 2021
              </h5>
            </igc-card-header>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button">
                COMPLETE
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  attach_file
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  archive
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
          <igc-card class="card">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/Avatar2.png" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                Grid Data-Binding 
              </h3>
              <h5 slot="subtitle">
                Deadline: Oct 26, 2021
              </h5>
            </igc-card-header>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button">
                COMPLETE
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  attach_file
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  archive
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
          <igc-card class="card">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar10.png" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                Main Dashboard Design
              </h3>
              <h5 slot="subtitle">
                Deadline: Oct 20, 2021
              </h5>
            </igc-card-header>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button">
                COMPLETE
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  attach_file
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  archive
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
        </div>
        <div class="column-layout group_5">
          <div class="row-layout group_6">
            <div class="row-layout group_3">
              <span class="material-icons icon">
                assignment_late
              </span>
              <h6 class="h6">
                Validation
              </h6>
            </div>
            <igc-avatar initials="4" size="small" shape="circle" class="avatar avatar_3"></igc-avatar>
          </div>
          <igc-card class="card">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/Avatar7.png" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                Update Samples
              </h3>
              <h5 slot="subtitle">
                Deadline: Oct 15, 2021
              </h5>
            </igc-card-header>
            <igc-card-media class="media-content">
              <img src="/src/assets/Samples.png" class="image" />
            </igc-card-media>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button">
                COMPLETE
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  attach_file
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  archive
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
          <igc-card class="card">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/Avatar6.png" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                Floating Toolbar
              </h3>
              <h5 slot="subtitle">
                Deadline: Oct 14, 2021
              </h5>
            </igc-card-header>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button">
                COMPLETE
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  attach_file
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  archive
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
          <igc-card class="card">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/Avatar9.png" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                Input Update
              </h3>
              <h5 slot="subtitle">
                Deadline: Oct 17, 2021
              </h5>
            </igc-card-header>
            <igc-card-media class="media-content">
              <img src="/src/assets/Inputs.png" class="image" />
            </igc-card-media>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button">
                COMPLETE
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  attach_file
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  archive
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
          <igc-card class="card">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/Avatar3.png" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                App Library
              </h3>
              <h5 slot="subtitle">
                Deadline: Oct 16, 2021
              </h5>
            </igc-card-header>
            <igc-card-media class="media-content">
              <img src="/src/assets/AppLIbrary.png" class="image" />
            </igc-card-media>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button">
                COMPLETE
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  attach_file
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  archive
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
        </div>
        <div class="column-layout group_1">
          <div class="row-layout group_7">
            <div class="row-layout group_3">
              <span class="material-icons icon">
                check_circle
              </span>
              <h6 class="h6">
                Done
              </h6>
            </div>
            <igc-avatar initials="5" size="small" shape="circle" class="avatar avatar_4"></igc-avatar>
          </div>
          <igc-card class="card">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/Avatar8.png" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                Onboarding Experience
              </h3>
              <h5 slot="subtitle">
                October 13, 2021
              </h5>
            </igc-card-header>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button">
                ARCHIVE
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  attach_file
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  archive
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
          <igc-card class="card">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/Avatar2.png" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                Design Specs
              </h3>
              <h5 slot="subtitle">
                October 9, 2021
              </h5>
            </igc-card-header>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button">
                ARCHIVE
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  attach_file
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  archive
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
          <igc-card class="card">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/Avatar10.png" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                File Parser
              </h3>
              <h5 slot="subtitle">
                October 10, 2021
              </h5>
            </igc-card-header>
            <igc-card-media class="media-content">
              <img src="/src/assets/SketchParser.png" class="image" />
            </igc-card-media>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button">
                ARCHIVE
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  attach_file
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  archive
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
          <igc-card class="card">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/Avatar2.png" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                Final Mockups
              </h3>
              <h5 slot="subtitle">
                October 13, 2021
              </h5>
            </igc-card-header>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button">
                ARCHIVE
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  attach_file
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  archive
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
          <igc-card class="card">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/Avatar5.png" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                GitHub Integration
              </h3>
              <h5 slot="subtitle">
                September 30, 2021
              </h5>
            </igc-card-header>
            <igc-card-media class="media-content">
              <img src="/src/assets/Samples.png" class="image" />
            </igc-card-media>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button">
                ARCHIVE
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  attach_file
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  archive
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
        </div>
      </div>
      <igc-dialog ?close-on-outside-click="${true}" ?close-on-escape="${true}" id="new-task-dialog-1">
        <h5 slot="title">
          Add New Task
        </h5>
        <div class="column-layout group_8">
          <igc-input label="Task Title" ?outlined="${false}" class="input"></igc-input>
          <div class="row-layout group_9">
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
          <igc-button @click=${() => this.newTaskDialog1?.toggle()} class="button_1">
            Create Task
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </igc-dialog>
      <igc-button variant="fab" @click=${() => this.newTaskDialog1?.toggle()} class="button_2 button_2_1">
        <span class="material-icons">
          add
        </span>
        <igc-ripple></igc-ripple>
      </igc-button>
    `;
  }
}
