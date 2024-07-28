function copyCode(button) {
    // Get the code element within the same code box as the button
    const h3 = button.parentElement;
    const codeBox = h3.parentElement;
    const code = codeBox.querySelector('pre code').innerText;

    // Create a temporary textarea to copy the code
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);

    // Select and copy the text from the textarea
    textarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Optionally, you can change the button text to indicate success
    button.textContent = 'Copied!';
    setTimeout(() => {
        button.textContent = 'Copy';
    }, 500);
}
