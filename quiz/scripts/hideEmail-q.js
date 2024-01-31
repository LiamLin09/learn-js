/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';

    for (const email of emails) {
        if (email.match(/^[a-z0-9_]+@(.+\.)*northeastern.edu$/)) {
            console.log(email);
            const atIndex = email.indexOf('@');
            const maskedUsername = '*'.repeat(atIndex);
            const domain = email.slice(atIndex);
            const listItem = document.createElement('li');
            listItem.textContent = maskedUsername + domain;
            list.appendChild(listItem);
        }
    }
}
