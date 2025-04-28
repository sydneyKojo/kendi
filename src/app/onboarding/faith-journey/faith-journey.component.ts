import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from "../../components/button/button.component";
import { ContainerComponent } from "../../components/container/container.component";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-faith-journey',
  imports: [ButtonComponent, ContainerComponent],
  templateUrl: './faith-journey.component.html',
  styleUrl: './faith-journey.component.css'
})
export class FaithJourneyComponent {
  auth = inject(AuthService)
  router = inject(Router)
  faithPreferences: string[] = []

  togglePrefernceItem (item: string) {
    if(this.faithPreferences.includes(item)) {
      this.faithPreferences = this.faithPreferences.filter(_item => _item !== item)
    } else {
      this.faithPreferences.push(item)
    }
  }

  updateProfile () {
    this.auth.updateProfile('faith', this.faithPreferences).subscribe(() => {
      this.router.navigateByUrl('/onboarding/add-contacts')
    })
  }
}
