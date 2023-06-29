import { FormGroup } from '@angular/forms';

export function comparePass(control1: string, control2: string) {
  return (formGroup: FormGroup) => {
    const field1 = formGroup.get(control1);
    const field2 = formGroup.get(control2);

    //  Control Error
    if (field2?.errors && !field2.errors?.['mustMatch']) {
      return;
    }

    // Set Error
    if (field1?.value !== field2?.value) {
      field2?.setErrors({ mustMatch: true });
    } else {
      field2?.setErrors(null);
    }
  };
}
