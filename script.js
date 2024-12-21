
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then( () => {
    console.log('Service Worker Registered')
})
})
}
        
        function fetchFoxImage() {
            const imgElement = document.getElementById('foxImage');
            imgElement.style.display = 'none'; 

            fetch('https://randomfox.ca/floof/') 
                .then(response => response.json())   
                .then(data => {
                    const imageUrl = data.image;
                    imgElement.src = imageUrl; 
                    imgElement.style.display = 'block'; 
                })
                .catch(error => {
                    console.error('Error fetching the fox image:', error);
                });
        }
  
