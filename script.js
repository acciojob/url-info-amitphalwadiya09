//your JS code here. If required.
cy.visit(baseUrl).then(() => {
    // Get the current URL using cy.url()
    cy.url().then(currentURL => {
        // Calculate the length of the URL
        const urlLength = currentURL.length;

        // Display the length of the URL using alert
        alert(`The length of the URL is: ${urlLength}`);
    });
});