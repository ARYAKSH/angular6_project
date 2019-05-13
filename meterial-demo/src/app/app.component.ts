import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatButtonModule, MatButtonToggleModule, MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatListModule, MatDividerModule, MatGridListModule, MatExpansionModule, MatCardModule, MatTabsModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'meterial-demo';
  options:string[] = ['angular','vue','react','java','python','css','html','scala','c++','c#'];
  datas=[
    {name:'Arya',id:15},
    {name:'Arya',id:15},
    {name:'Arya',id:15},
    {name:'Arya',id:15},
    {name:'Arya',id:15}
  ]

  myControl = new FormControl();
  filteredOption: Observable<string[]>;

  ngOnInit(){
    this.filteredOption = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value:string):string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
      );
  }

  displayFn(subject){
    return subject ? subject.name : undefined;
  }

}
