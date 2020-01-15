import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorChartPage } from './doctor-chart.page';

describe('DoctorChartPage', () => {
  let component: DoctorChartPage;
  let fixture: ComponentFixture<DoctorChartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorChartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
