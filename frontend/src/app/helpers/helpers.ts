import {AbstractControl} from "@angular/forms";

const EMAIL_REGEX = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;

export function validateEmail(control: AbstractControl): {email: true} | null {
  if (!control.value.match(EMAIL_REGEX)) {
    return {email: true};
  }
  return null;
}
