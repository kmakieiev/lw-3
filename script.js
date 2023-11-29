// Function to move the selected image up or down
function moveImage(direction) {
    const gallery = document.getElementById('gallery');
    const imageSelector = document.getElementById('imageSelector');
    const selectedIndex = imageSelector.selectedIndex;
  
    if ((direction === 'up' && selectedIndex > 0) || (direction === 'down' && selectedIndex < imageSelector.options.length - 1)) {
      const selectedImage = gallery.removeChild(gallery.children[selectedIndex]);
      if (direction === 'up') {
        gallery.insertBefore(selectedImage, gallery.children[selectedIndex - 1]);
        imageSelector.selectedIndex = selectedIndex - 1;
      } else {
        gallery.insertBefore(selectedImage, gallery.children[selectedIndex + 1]);
        imageSelector.selectedIndex = selectedIndex + 1;
      }
    }
  }
  
  // Function to apply changes to the selected image
  function applyChanges() {
    const imageSelector = document.getElementById('imageSelector');
    const selectedImageIndex = imageSelector.selectedIndex;
  
    const imageWidth = document.getElementById('imageWidth').value;
    const imageHeight = document.getElementById('imageHeight').value;
    const frameThickness = document.getElementById('frameThickness').value;
    const altText = document.getElementById('altText').value;
  
    const selectedImage = document.getElementById('gallery').children[selectedImageIndex];
  
    selectedImage.width = imageWidth;
    selectedImage.height = imageHeight;
    selectedImage.style.border = `${frameThickness}px solid black`;
    selectedImage.alt = altText;
  }
  