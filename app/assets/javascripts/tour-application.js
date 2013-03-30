var homeTour = function(){
    var tour = new Tour();

    tour.addStep({
        element: "#register",
        placement: "left",
        title: "Registeration",
        content: "Please Register here."
    });

    tour.addStep({
        element: "#login",
        placement: "top",
        title: "Login",
        content: "To login on website"
    });

    tour.addStep({
        element: ".proposal-section",
        placement: "bottom",
        title: "Proposal Section",
        content: "Some Existing Proposals."
    });

    tour.start();
}

var ideaTour = function(){
    var tour = new Tour();

    tour.addStep({
        element: ".body",
        placement: "right",
        title: "Breif Description",
        content: "Give some Breif description here"
    });

    tour.addStep({
        element: ".summary",
        placement: "top",
        title: "Idea Summary",
        content: "Give Idea detail in summarize form"
    });

    tour.addStep({
        element: ".comments",
        placement: "left",
        title: "Comments.",
        content: "Give any comments related to the idea."
    });

    tour.start();
}