import { TooltipDirective } from './tooltip.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
    template: `<div appTooltip="Test Tooltip"></div>`
})
class TestComponent {}

fdescribe('TooltipDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let directive: TooltipDirective;
    let elementRef: ElementRef;
    let renderer: Renderer2;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TooltipDirective, TestComponent]
        });

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        directive = new TooltipDirective(new ElementRef(fixture.nativeElement.querySelector('div')), jasmine.createSpyObj('Renderer2', ['createElement', 'appendChild', 'createText', 'setStyle', 'removeChild']));
        elementRef = new ElementRef(fixture.nativeElement.querySelector('div'));
        renderer = directive['renderer'];
    });

    it('should create the directive', () => {
        expect(directive).toBeTruthy();
    });

    it('should show tooltip on mouse enter', () => {
        spyOn(directive, 'showTooltip').and.callThrough();
        directive.onMouseEnter();
        expect(directive.showTooltip).toHaveBeenCalled();
    });

    it('should hide tooltip on mouse leave', () => {
        directive.tooltip = document.createElement('span'); // Simulate tooltip existing
        spyOn(directive, 'hideTooltip').and.callThrough();
        directive.onMouseLeave();
        expect(directive.hideTooltip).toHaveBeenCalled();
    });

    it('should create tooltip element when showTooltip is called', () => {
        directive.tooltipTitle = 'Test Tooltip';
        directive.showTooltip();
        expect(directive.tooltip).toBeTruthy();
        expect(renderer.createElement).toHaveBeenCalledWith('span');
        expect(renderer.createText).toHaveBeenCalledWith('Test Tooltip');
        expect(renderer.appendChild).toHaveBeenCalled();
        expect(renderer.setStyle).toHaveBeenCalledWith(jasmine.anything(), 'position', 'absolute');
    });

    it('should remove tooltip element when hideTooltip is called', () => {
        directive.tooltip = document.createElement('span');
        spyOn(renderer, 'removeChild');
        directive.hideTooltip();
        expect(renderer.removeChild).toHaveBeenCalled();
        expect(directive.tooltip).toBeNull();
    });
});