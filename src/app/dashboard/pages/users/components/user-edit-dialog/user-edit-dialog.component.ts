import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.css']
})
export class UserEditDialogComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UserEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.userForm = this.formBuilder.group({
      nombre: [data.nombre, Validators.required],
      apellido: [data.apellido, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}

  guardarCambios() {
    if (this.userForm.valid) {
      const datosModificados = this.userForm.value;
      this.dialogRef.close(this.userForm.value);
    }
  }
}
