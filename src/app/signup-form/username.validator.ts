import { AbstractControl, ValidationErrors} from "@angular/forms";

export class UsernameValidator {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
                if((control.value as string).indexOf(' ') >= 0)
                    return { cannotContainSpace: true };
                else return null;
        
    }
    static minlength(control: AbstractControl) : ValidationErrors | null {
                if((control.value as string).length < 3){
                    return {
                        minlength: {
                            requiredLength: 3,
                            actualLength: control.value.length
                        }
                    };
                }else return null;
            }
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value == 'Alex94aksv')
                    resolve({ shouldBeUnique: true });
                else reject (null);
            }, 2000);
        });
    }

}