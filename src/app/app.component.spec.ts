import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
    beforeEach(async(() =>{
        TestBed.configureTestingModule({
            imports:[RouterTestingModule],
            declarations:[AppComponent],
        }).compileComponents();
    }));

    it('should create the app', () =>{
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should have as title testing', () =>{
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('mega-front');
    });

    it('should have a changes', () =>{
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.detectChanges;
        expect(app);
    });

    it('should have a location', () =>{
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentRef;
        expect(app.location);
    });

    it('should render testing', () =>{
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled);
    });

    it('should app is stable', () =>{
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.isStable;
        expect(compiled);
    });

    it('should app have a debug element', () =>{
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement;
        expect(compiled);
    });

    it('should app ngZone Test', () =>{
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.ngZone;
        expect(compiled);
    });
});