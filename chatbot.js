const chatbotButton = document.getElementById("chatbotButton");
const chatbotBox = document.getElementById("chatbotBox");
const closeChat = document.getElementById("closeChat");

chatbotButton.addEventListener("click", function () {

    chatbotBox.style.display = "flex";

});

closeChat.addEventListener("click", function () {

    chatbotBox.style.display = "none";

});


function addBotMessage(message) {

    const chatBody = document.getElementById("chatbotBody");

    const div = document.createElement("div");

    div.className = "bot-message";

    div.innerHTML = message;

    chatBody.appendChild(div);

    chatBody.scrollTop = chatBody.scrollHeight;

}


function addUserMessage(message) {

    const chatBody = document.getElementById("chatbotBody");

    const div = document.createElement("div");

    div.className = "user-message";

    div.innerText = message;

    chatBody.appendChild(div);

    chatBody.scrollTop = chatBody.scrollHeight;

}


function botReply(type) {

    if (type === "services") {

        addUserMessage("Tell me about your services.");

        setTimeout(() => {

            addBotMessage(
                "We provide bridge rehabilitation, expansion joints, waterproofing, road infrastructure and structural engineering services."
            );

        }, 500);

    }

    else if (type === "projects") {

        addUserMessage("I want to know about your projects.");

        setTimeout(() => {

            addBotMessage(
                "We have successfully completed major infrastructure projects across India and Nepal. Visit our <a href='projects.html'>Projects</a> page to explore them."
            );

        }, 500);

    }

    else if (type === "quote") {

        addUserMessage("I want to request a quote.");

        setTimeout(() => {

            addBotMessage(
                "Sure! You can submit your project details through our <a href='contact.html'>Request Quote</a> form."
            );

        }, 500);

    }

    else if (type === "contact") {

        addUserMessage("I want to contact you.");

        setTimeout(() => {

            addBotMessage(
                "You can contact us at <b>info@manpowerprojects.com</b> or call <b>+91 9312129996</b>."
            );

        }, 500);

    }

}


function sendMessage() {

    const input = document.getElementById("chatInput");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    addUserMessage(message);

    input.value = "";

    setTimeout(() => {

        addBotMessage(
            "Thanks for your message! Please use our Contact or Request Quote form and our team will get back to you."
        );

    }, 600);

}


document.getElementById("chatInput").addEventListener("keypress", function(e) {

    if (e.key === "Enter") {

        sendMessage();

    }

});