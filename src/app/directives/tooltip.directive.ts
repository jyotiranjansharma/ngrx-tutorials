import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appTooltip]'
})
export class TooltipDirective {
    @Input('appTooltip') tooltipTitle: string = ''
    tooltip: HTMLElement | null = null;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseenter') onMouseEnter() {
        if(!this.tooltip) {
            this.showTooltip()
        }
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.hideTooltip()
    }

    showTooltip() {
        this.tooltip = this.renderer.createElement('span');
        this.renderer.appendChild(
            this.tooltip,
            this.renderer.createText(this.tooltipTitle)
        );
        this.renderer.appendChild(this.el.nativeElement, this.tooltip)
        this.renderer.setStyle(this.tooltip, 'position', 'absolute')
        this.renderer.setStyle(this.tooltip, 'backgroundColor', 'transparent')
        this.renderer.setStyle(this.tooltip, 'color', '#000')
        this.renderer.setStyle(this.tooltip, 'padding', '5px 10px')
        this.renderer.setStyle(this.tooltip, 'border-radius', '4px')
        this.renderer.setStyle(this.tooltip, 'font-size', '10px')
        // this.renderer.setStyle(this.tooltip, 'top', `${(this.el.nativeElement.offsetTop - this.el.nativeElement.offsetHeight) || 60}px`)
        
    }

    hideTooltip() {
        if(this.tooltip) {
            this.renderer.removeChild(this.el.nativeElement, this.tooltip)
            this.tooltip = null
        }
    }

}
