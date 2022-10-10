let form = document.getElementById("contactus_form");

let nom = form[0],
    prenom = form[1],
    email = form[2],
    date = form[3],
    message = form[4];

console.log(form);

const sendMail = () => {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "<Winsky>",
        Password: "<sn1-17973>",
        To: 'thadal.winsky@proton.me',
        From: "thadal.winsky@gmail.com",
        Subject: "Test email",
        Body: "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
        message => alert(message)
    );
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMail();
});
//takeFormValue(form);