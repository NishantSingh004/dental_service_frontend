import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ContactService } from '../../services/contact.service';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    NgIf,
    MatButtonModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  private contactService = inject(ContactService);

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  contacts() {
    if (this.contactForm.valid) {
      this.contactService.contact(this.contactForm.value).subscribe({
        next: (response) => {
          Swal.fire({
            title: 'Notification',
            text: 'Your message has been sent successfully!',
            icon: 'info',
            iconColor: 'rgb(3, 108, 95)',
            confirmButtonText: 'Close',
            confirmButtonColor: 'rgb(252, 151, 114)',
            scrollbarPadding: false,
          });
          this.contactForm.reset();
          Object.keys(this.contactForm.controls).forEach((key) => {
            const control = this.contactForm.get(key);
            control?.setErrors(null);
            control?.markAsPristine();
            control?.markAsUntouched();
          });
        },
        error: (error) => {
          Swal.fire({
            title: 'Notification',
            text: 'There was an error sending your message. Please try again!',
            icon: 'info',
            iconColor: 'rgb(3, 108, 95)',
            confirmButtonText: 'Close',
            confirmButtonColor: 'rgb(252, 151, 114)',
            scrollbarPadding: false,
          });
        },
      });
    } else {
      Swal.fire({
        title: 'Notification',
        text: 'Please fill in all the required fields correctly!',
        icon: 'info',
        iconColor: 'rgb(3, 108, 95)',
        confirmButtonText: 'Close',
        confirmButtonColor: 'rgb(252, 151, 114)',
        scrollbarPadding: false,
      });
    }
  }
}
