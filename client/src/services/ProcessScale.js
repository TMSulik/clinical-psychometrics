// export const tallyScaleItem = (item, traits) => {
//   let result = 0;
//   for(let i = 0; i < traits.length; i++) {
//     if(item.indicative.includes(traits[i])) {
//       result++;  
//     } 
//     if(item.contraindicative.includes(traits[i])) {
//       result--;  
//     }
//   }
//   return result + item.contraindicative.length / item.contraindicative.length + item.indicative.length; 
// }

export const tallyScaleItem = (item, traits) => {
  // Get the personal traits the user has checked
  // const traits = this.state.personalTraits;
  const indic = traits.filter(value => item.indicative.includes(value)).length;
  const contra = traits.filter(value => item.contraindicative.includes(value)).length;
  // Get the maximum absolute number of relevant traits
  const pos = item.indicative.length;
  const neg = item.contraindicative.length;
  let result = neg;
  // If no relevant traits are checked, default to 50% (equivocal)
  if(indic + contra === 0) {
    return (neg + pos) / 2;
  }
  // Otherwise, return the proportion of indicative to contraindicative
  return result - contra + indic;
}

