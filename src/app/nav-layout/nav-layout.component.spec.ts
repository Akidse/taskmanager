
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavLayoutComponent } from './nav-layout.component';

describe('NavLayoutComponent', () => {
  let component: NavLayoutComponent;
  let fixture: ComponentFixture<NavLayoutComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [NavLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
