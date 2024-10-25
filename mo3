    function antiParser(escapedString) {
        return escapedString
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'");  // Handle single quotes as well
    }

    function convertEscapedHTML() {
        const input = document.getElementById('inputArea').value; // Get the input HTML
        const output = antiParser(input);  // Convert the escaped HTML
        const outputArea = document.getElementById('outputArea');  // Output area for converted code
        const copyButton = document.getElementById('copyButton');  // Copy button

        outputArea.style.display = 'block';  // Show the output area
        outputArea.value = output;  // Display the converted result in the textarea
        
        copyButton.style.display = 'inline-block';  // Show the copy button
    }

    function copyToClipboard() {
        const outputArea = document.getElementById('outputArea');
        
        // Copy the converted code using the Clipboard API
        navigator.clipboard.writeText(outputArea.value)
            .then(() => {
                alert("Post copied to clipboard! This post generator was created by 'Sy-Equinox' & 'AVM-Themes'.");
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    }
