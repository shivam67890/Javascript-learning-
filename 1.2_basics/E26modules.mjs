// in module we can access some value ,function from different file through export and can import
export const pi=3.14159;
export function getcicumference(radius){
    return 2* pi *radius;
}
export function getarea(radius){
    return pi*radius*radius;
}
export function getvolume(radius){
    return 4*pi*radius*radius;
}
