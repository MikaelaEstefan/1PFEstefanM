import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './users.service';
import { User } from './models/user.interface';
import { UserEditDialogComponent } from './user-edit-dialog/user-edit-dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userForm: FormGroup;
  users: User[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'acciones'];

  constructor(private formBuilder: FormBuilder, private userService: UserService,  private dialog: MatDialog) {
    this.userForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

  
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  guardarUser() {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      this.userService.addUser(newUser).subscribe(() => {
        this.loadUsers();
        this.limpiarFormulario();
      });
    }
  }

  editarUser(user: User) {
    // Abre un diálogo de edición de usuario
    const dialogRef = this.dialog.open(UserEditDialogComponent, {
      data: user, // Pasa el usuario a editar al diálogo
    });

    dialogRef.afterClosed().subscribe((result: User) => {
      if (result) {
        // Si el usuario editado es válido, actualiza la información
        this.userService.updateUser(result).subscribe(() => {
          this.loadUsers();
        });
      }
    });
  }

  eliminarUser(user: User) {
    // Muestra un cuadro de diálogo de confirmación
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: '¿Estás seguro de que deseas eliminar a este usuario?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        // Si el usuario confirmó la eliminación, procede a eliminar el usuario
        this.userService.deleteUser(user.id).subscribe(() => {
          this.loadUsers();
        });
      }
    });
  }

  limpiarFormulario() {
    this.userForm.reset();
  }
}
