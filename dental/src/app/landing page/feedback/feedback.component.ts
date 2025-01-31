import { NgFor } from '@angular/common';
import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-feedback',
  imports: [MatCardModule, NgFor],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef<HTMLElement>;

  feedbacks = [
    {
      image: 'image/happy1.jpg',
      message:
        'Professional staff made me feel relaxed and at ease during my visit.',
      name: 'Emma',
      role: 'Sales Director, GreenTech',
    },
    {
      image: 'image/happy2.jpg',
      message:
        'I had a painless experience, thanks to the gentle care provided by the dentist.',
      name: 'Olivia',
      role: 'Manager, Bright Horizons',
    },
    {
      image: 'image/happy3.jpg',
      message:
        'Exceptionally clean and hygienic surroundings made my dental visit reassuring.',
      name: 'Charlotte',
      role: 'HR Manager, Apex Innovations',
    },
    {
      image: 'image/happy4.jpg',
      message:
        'The dental procedure was quick, and the overall service was very efficient.',
      name: 'Lily',
      role: 'Manager, BlueWave',
    },
    {
      image: 'image/happy5.jpg',
      message:
        'The treatment was swift, and the service exceeded all expectations.',
      name: 'Sophie',
      role: 'Customer Support Lead, Stellar',
    },
    {
      image: 'image/happy6.jpg',
      message:
        'The dentist was knowledgeable and took the time to explain everything clearly.',
      name: 'Robert Johnson',
      role: 'Finance Analyst, Global ltd',
    },
    {
      image: 'image/happy7.jpg',
      message:
        'I felt at ease throughout my treatment, thanks to the comfortable atmosphere in the clinic.',
      name: 'Amelia',
      role: 'IT Specialist, TechSavvy Solutions',
    },
  ];

  currentIndex = 0;
  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  get dotCount(): number {
    return Math.ceil(this.feedbacks.length / 3);
  }

  ngAfterViewInit() {
    if (this.carousel) {
      this.updateCurrentIndex(this.carousel.nativeElement);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.updateCurrentIndex(this.carousel.nativeElement);
  }

  onPointerDown(event: PointerEvent, container: HTMLElement) {
    this.isDragging = true;
    this.startX = event.pageX - container.offsetLeft;
    this.scrollLeft = container.scrollLeft;
    container.classList.add('dragging');
  }

  onPointerMove(event: PointerEvent, container: HTMLElement) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.pageX - container.offsetLeft;
    const walk = (x - this.startX) * 1.5;
    container.scrollLeft = this.scrollLeft - walk;
  }

  onPointerUp(container: HTMLElement) {
    this.isDragging = false;
    container.classList.remove('dragging');
    this.updateCurrentIndex(container);
  }

  onPointerLeave(container: HTMLElement) {
    if (this.isDragging) {
      this.isDragging = false;
      container.classList.remove('dragging');
    }
  }

  onScroll() {
    const container = this.carousel?.nativeElement;
    if (container) {
      this.updateCurrentIndex(container);
    }
  }

  updateCurrentIndex(container: HTMLElement) {
    const carouselWidth = container.clientWidth;
    const cardWidth =
      container.querySelector('.card-container')?.clientWidth || 0;
    this.currentIndex = Math.floor(container.scrollLeft / (cardWidth * 3));
  }

  scrollToFeedback(index: number, container: HTMLElement) {
    this.currentIndex = index;
    const scrollAmount = index * 960;
    container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }
}
