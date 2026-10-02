// =====================================================
//              CONSULTING WEBSITE
//              CUSTOM JAVASCRIPT
// =====================================================


document.addEventListener("DOMContentLoaded", function () {


    // =================================================
    // NAVBAR ACTIVE LINK
    // =================================================

    const navLinks =
        document.querySelectorAll(".navbar-nav .nav-link");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {

                item.classList.remove("active");

            });

            this.classList.add("active");

        });

    });



    // =================================================
    // TEAM SIDEBAR
    // =================================================


    const teamSidebar =
        document.getElementById("teamSidebar");

    const teamOverlay =
        document.querySelector(".team-overlay");

    const sidebarClose =
        document.getElementById("sidebarClose");


    const sidebarImage =
        document.getElementById("sidebarImage");

    const sidebarName =
        document.getElementById("sidebarName");

    const sidebarRole =
        document.getElementById("sidebarRole");

    const sidebarBio =
        document.getElementById("sidebarBio");

    const sidebarExpertise =
        document.getElementById("sidebarExpertise");

    const sidebarExperience =
        document.getElementById("sidebarExperience");

    const sidebarEmail =
        document.getElementById("sidebarEmail");



    // =================================================
    // TEAM MEMBER DATA
    // =================================================

    const teamMembers = {

        liza: {

            name: "Liza Anderson",

            role: "Senior Business Consultant",

            image: "image/consultant1.jpg",

            bio:
                "Liza helps organizations identify growth opportunities, improve business performance and build practical strategies for long-term success.",

            expertise: [
                "Business Strategy",
                "Growth Planning",
                "Market Analysis",
                "Organizational Development"
            ],

            experience: "10+ Years",

            email: "liza@insight.com"

        },


        david: {

            name: "David Miller",

            role: "Financial Consultant",

            image: "image/consultant2.jpg",

            bio:
                "David specializes in financial planning and performance analysis, helping businesses make informed decisions with greater clarity and confidence.",

            expertise: [
                "Financial Planning",
                "Business Analysis",
                "Performance Management",
                "Risk Assessment"
            ],

            experience: "8+ Years",

            email: "david@insight.com"

        },


        sarah: {

            name: "Sarah Williams",

            role: "Strategy Consultant",

            image: "image/consultant3.jpg",

            bio:
                "Sarah works with leadership teams to develop clear strategic direction, transform ideas into action and create sustainable business growth.",

            expertise: [
                "Corporate Strategy",
                "Digital Strategy",
                "Innovation",
                "Change Management"
            ],

            experience: "9+ Years",

            email: "sarah@insight.com"

        }

    };



    // =================================================
    // OPEN SIDEBAR
    // =================================================

    function openSidebar(memberID) {


        const member =
            teamMembers[memberID];


        if (!member) return;


        sidebarImage.src =
            member.image;

        sidebarImage.alt =
            member.name;


        sidebarName.textContent =
            member.name;


        sidebarRole.textContent =
            member.role;


        sidebarBio.textContent =
            member.bio;


        sidebarExperience.textContent =
            member.experience;


        sidebarEmail.textContent =
            member.email;



        // Clear previous expertise

        sidebarExpertise.innerHTML = "";


        // Add new expertise

        member.expertise.forEach(function (item) {

            const li =
                document.createElement("li");

            li.textContent =
                item;

            sidebarExpertise.appendChild(li);

        });



        // Show sidebar

        teamSidebar.classList.add("active");

        teamOverlay.classList.add("active");


        // Prevent background scrolling

        document.body.style.overflow = "hidden";

    }



    // =================================================
    // CLOSE SIDEBAR
    // =================================================

    function closeSidebar() {

        teamSidebar.classList.remove("active");

        teamOverlay.classList.remove("active");


        document.body.style.overflow = "";

    }



    // =================================================
    // TEAM CARD CLICK
    // =================================================

    const teamCards =
        document.querySelectorAll(".team-card");


    teamCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const memberID =
                this.dataset.member;

            openSidebar(memberID);

        });


        // Keyboard support

        card.addEventListener("keydown", function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                const memberID =
                    this.dataset.member;

                openSidebar(memberID);

            }

        });

    });



    // =================================================
    // CLOSE BUTTON
    // =================================================

    sidebarClose.addEventListener(
        "click",
        closeSidebar
    );


    // Click outside sidebar

    teamOverlay.addEventListener(
        "click",
        closeSidebar
    );


    // Escape key

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeSidebar();

            }

        }
    );

});