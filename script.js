document.addEventListener("DOMContentLoaded", () => {
  const options = {
    duration: 800,
    type: 'oneByOne' 
  }
  
  new Vivus('tree', options, () => {
    console.log('done');
  });
});
