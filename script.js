const message = `Hi Baby,

Before you begin this new chapter of your life...

I wanted to leave you with something.

It's not that perfect okay.

Just something made with love.

Whenever you miss me...

Whenever life feels overwhelming...

Whenever you simply want to feel close to me...

Come back here.

A part of my heart will always be waiting for you.

❤️`;

let i = 0;

function typeWriter() {

    if (i < message.length) {

        document.getElementById("typing").innerHTML +=
            message.charAt(i) === "\n"
                ? "<br>"
                : message.charAt(i);

        i++;

        setTimeout(typeWriter,40);

    }

}

typeWriter();

document.getElementById("enterBtn").onclick = function(){

    window.location.href="letters.html";

};
