document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#bubbleImages img');
    const description = document.getElementById('description');
    let lastAltText = ""; // Stocke le dernier alt text de l'image cliquée

    images.forEach(function(img) {
        img.addEventListener('click', function() {
            const altText = this.alt; // Utilisez l'attribut alt de l'image pour décider du contenu

            // Déterminer le nouveau contenu basé sur l'attribut alt
            let newContent = '';
            switch (altText) {
                case 'html':
                    newContent = 'HTML is the standard markup language used to create and structure web pages and applications, by defining the content and layout of a web page using tags.';
                    break;
                case 'css':
                    newContent = 'CSS (Cascading Style Sheets) plays a crucial role in web development by controlling the presentation, formatting, and layout of HTML elements on a web page.';
                    break;
                case 'javascript':
                    newContent = 'JavaScript (JS) plays a vital role in web development, serving as the scripting language that enables dynamic behavior on web pages.';
                    break;
            }

            
            if (description.style.maxHeight !== "0px" && lastAltText === altText) {
                description.style.maxHeight = "0px";
            } else {
                description.innerHTML = newContent;
                description.style.maxHeight = "200px"; 
            }
            lastAltText = altText;
        });
    });
});

document.querySelectorAll('#htmlImg, #cssImg, #jsImg').forEach(img => {
    img.addEventListener('click', () => {
        img.style.animation = 'none';
        setTimeout(() => { 
            img.style.animation = '';
            img.style.animationName = 'bounce';
            img.style.animationDuration = '0.7s';
            img.style.animationTimingFunction = 'ease-out';
        }, 10);
    });
});

