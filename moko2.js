    function antiParser(escapedString) {
        return escapedString
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'");  // Handle single quotes as well
    }

    function convertEscapedHTML() {
        const input = document.getElementById('inputArea').value;
        const output = antiParser(input);
        const outputArea = document.getElementById('outputArea');
        outputArea.value = output;  // Display result in textarea
        outputArea.select();  // Automatically select the text in the textarea
        document.execCommand('copy');  // Automatically copy the text
        alert("Post copied to clipboard! This post generator was created by 'Sy-Equinox' & 'AVM-Themes'.");
    }
