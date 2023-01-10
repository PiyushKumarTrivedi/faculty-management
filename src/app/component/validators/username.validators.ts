import { AbstractControl, ValidationErrors } from "@angular/forms";

export class usernameValidators{

  static CannotContainSpace(control:AbstractControl):ValidationErrors|null{
    if((control.value as string).indexOf(' ')>=0)
    {
      //console.log(control.value.);
      return {CannotContainSpace:true};
    }
    return null;
  }
  static shouldBeUnique(control:AbstractControl):Promise<ValidationErrors|null>
  {
    return new Promise((resolve,reject)=>
    {

      setTimeout( () =>
      {
        if (control.value ==="piyush@gmail.com")
         {
          //console.log('OK');
          return resolve({ shouldBeUnique: true });
         }
         else
        return resolve(null);
      },8000);


    })

  }

}
