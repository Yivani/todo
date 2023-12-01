document.getElementById('imageInput').addEventListener('change', handleImage);

function handleImage(e) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        replaceColor(ctx, [255, 0, 0], [0, 0, 255]); // Replace red with blue
    };

    img.src = URL.createObjectURL(e.target.files[0]);
}

function replaceColor(ctx, oldColor, newColor) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        if (data[i] === oldColor[0] && data[i + 1] === oldColor[1] && data[i + 2] === oldColor[2]) {
            data[i] = newColor[0];
            data[i + 1] = newColor[1];
            data[i + 2] = newColor[2];
        }
    }

    ctx.putImageData(imageData, 0, 0);
}