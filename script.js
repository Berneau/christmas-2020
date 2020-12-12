function startDrawing() {
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('tree').classList.remove('hidden');
  
  const options = {
    duration: 800,
    type: 'oneByOne' 
  }
  
  new Vivus('tree', options, () => {
    console.log('done');
  });
}
