import { Directive, ElementRef, HostListener, inject, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input() appHighlight = ''   

    el = inject(ElementRef)
    
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.appHighlight || '#eee')
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('')
    }

    highlight(color: string) {
        // this.renderer.setStyle(this.highlight, 'backgroundColor', color)
        this.el.nativeElement.style.backgroundColor = color
    }
}
