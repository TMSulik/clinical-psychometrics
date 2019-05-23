export const tallyScaleItem = (item, traits) => {
  let result = 0;
  for(let i = 0; i < traits.length; i++) {
    if(item.indicative.includes(traits[i])) {
      result++;  
    } 
    if(item.contraindicative.includes(traits[i])) {
      result--;  
    }
  }
  return result + item.contraindicative.length / item.contraindicative.length + item.indicative.length; 
}

