import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardEnfantListComponent} from './card-enfant-list.component';

describe('CardEnfantListComponent', () => {
  let component: CardEnfantListComponent;
  let fixture: ComponentFixture<CardEnfantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEnfantListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardEnfantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
