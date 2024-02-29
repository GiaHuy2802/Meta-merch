const dotLinks = document.querySelectorAll(".dot a");

        function swapImage(imageSrc) {
          const displayedImage = document.getElementById("displayedImage");
          displayedImage.src = imageSrc;
        }
        dotLinks.forEach(link => {
          link.addEventListener("click", (event) => {
            event.preventDefault();
            const imageSrc = link.querySelector("img").src;
            swapImage(imageSrc);
          });
        });