import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input()
  options: {name: string, link: string}[] = [];
  showDropdown = false;
  @Input() selectedValue: string = ''

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectOption(option: {name: string, link: string}) {
    this.selectedValue = option.name;
    this.showDropdown = false;
  }
}
