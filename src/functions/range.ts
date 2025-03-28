export default function range(start: number, end: number = start)  {
  const returnValue:number[] = [];
  for(let i = start; i < end; i++) {
    returnValue.push(i);
  }
  return returnValue;
}