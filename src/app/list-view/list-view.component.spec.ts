import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxDialogModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule } from '@infragistics/igniteui-angular';
import { ListViewComponent } from './list-view.component';

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxDialogModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
