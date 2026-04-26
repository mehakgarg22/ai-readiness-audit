function runAudit() {
    const url = document.getElementById('urlInput').value;
    if (!url) return alert("Please enter a URL");

    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');

    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('result').classList.remove('hidden');
        
        document.getElementById('scoreValue').innerText = "64";
        
        const issues = [
            "Missing JSON-LD structured data (hard for AI to parse products).",
            "Non-semantic HTML tags used in navigation.",
            "Lack of a /robots.txt entry for AI crawler permissions.",
            "Weak heading hierarchy (H1-H3 sequence is broken).",
            "No FAQ section (reduces chances for LLM 'Answer Box' placement)."
        ];
        
        const list = document.getElementById('issuesList');
        list.innerHTML = "";
        issues.forEach(issue => {
            let li = document.createElement('li');
            li.innerText = issue;
            list.appendChild(li);
        });
    }, 1500);
}
