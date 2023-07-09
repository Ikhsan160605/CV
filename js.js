const gallery = document.getElementById('gallery');
    const imageSources = [
        'gambar1.jpg',
        'gambar2.jpg',
        'gambar3.jpg',
        // Tambahkan sumber gambar tambahan di sini
    ];
    
    // Fungsi untuk membuat elemen gambar
    function createImageElement(src) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        
        const image = document.createElement('img');
        image.src = src;
        image.alt = 'Gambar';
        image.width = 200;
        image.height = 200;
        
        imageContainer.appendChild(image);
        gallery.appendChild(imageContainer);
    }
    
    // Loop untuk membuat elemen gambar berdasarkan sumber gambar yang diberikan
    imageSources.forEach(function(src) {
        createImageElement(src);
    });


    const layer = document.querySelector('.layer');

    function hideLayer() {
      layer.style.opacity = 0;
    }
    
    function showLayer() {
      layer.style.opacity = 1;
      setTimeout(hideLayer, 3000); // Menyembunyikan layer setelah 3000 milidetik (3 detik)
    }
    
    function isMobileDevice() {
      return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }
    
    if (isMobileDevice()) {
      layer.classList.add('mobile');
    } else {
      layer.addEventListener('mouseover', showLayer);
      layer.addEventListener('mouseout', hideLayer);
    }
    
