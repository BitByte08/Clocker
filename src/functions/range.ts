export default function range(start: number, end: number = start, step: number = 1)  {
  const returnValue:number[] = [];
  for(let i = start; i < end*step; i+=step) {
    returnValue.push(i);
  }
  if(step == 0){
    for(let i = start; i < end; i++) {
      returnValue.push(0);
    }
  }
  return returnValue;
}