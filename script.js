// ================= DATA VIDEO (FULL MASHA + AMAN) =================
const videos = [
    { id: "7w-TR9p0sKo", title: "Masha and the Bear 2026 🍰🍗 Something Yummy and more popular episodes 🐝 🍯 Best episodes collection 🎬" },
    { id: "OpBo4trl-pU", title: "Masha and the Bear 2026 🌈🗻 Why Should We Protect Planet Earth? 🥾🌍 Best episodes collection 🎬" },
    { id: "Q6lnNIfIYSg", title: "Masha and the Bear 2026 🎬 NEW EPISODE! 🥳 April Fool's Day 🤪👋 Best cartoon collection" },
    { id: "egd7kpfY7z0", title: "Masha and the Bear 2026 🐰🌼 Sunday TV 🐣🌸 Happy Easter! 🐑🥰 Best episodes cartoon collection 🎬" },
    { id: "c-eGXcu-9aI", title: "🤬🐯 Did You Miss Me? 🏡🐰 Welcome Out of Here & Hokus-Pokus 🎩 Best Episodes 🎬 Masha and the Bear 2026" },
    { id: "dGoA6fwOLTg", title: "Masha and the Bear 2026 🎬 SPECIAL EPISODE 🎡🤹‍♀️ Masha and the Bear: Wonder Park🎢🎠 Best cartoons" },
    { id: "taAU0ZJ4IBY", title: "Masha and the Bear 🎉 NEW EPISODE 2026 🥳 April Fool's Day 🤪👋 (Episode 143)" },
    { id: "88HS1vpQnVM", title: "Masha and the Bear 2026 🤣❓ Why Do We Laugh? 🥳 April Fool's Day 🤪👋 Coming on March 27!" },
    { id: "s-VWtHpRJxQ", title: "🤒🎈 Best Medicine 🆎 Get well soon! 👩‍⚕️🍒 Mega Battle 🏆🆎💪 Best collection 🎬 Masha and the Bear" },
    { id: "VS8BHQAmNeI", title: "Masha and the Bear 2026 🤔 Guess the Food❓Best episodes cartoon collection 🎬" },
    { id: "7rlAStHRsJ0", title: "Masha and the Bear 2026 🛏️🧖‍♀️ Why Should We Take a Bath? 🧴👩‍🦱 Best episodes cartoon collection 🎬" },
    { id: "9NvGH6xrHRw", title: "Masha and the Bear 2026 🎬 NEW EPISODE! 🌼 Blown Away 🌪️💨 Best cartoon collection" },
    { id: "FmZBTBAQXEA", title: "Masha and the Bear 2026 🏠🌻 Sunday TV 🥳🎁 Best episodes cartoon collection 🎬" },
    { id: "kKuJaR6MIGE", title: "Masha and the Bear 2026 🐺🚕 Best episodes cartoon collection 🎬 Watch Right Now! 📺🏖️" },
    { id: "1LSqPOonySY", title: "Masha and the Bear 2026 🐻👋 The Finger Family 🙏👧 Best episodes cartoon collection 🎬" },
    { id: "H1frvZXKbso", title: "🤝🌸 Let's Share! 🧑‍🌾🍒 Jam Day & Bon Appétit 👩‍🍳🥒 Best episodes collection 🎬 Masha and the Bear 2026" },
    { id: "Io5oEGcMTCc", title: "Masha and the Bear 2026 🐻🤝 Is PANDA a real BEAR? 🐼😤 Best episodes cartoon collection 🎬" },
    { id: "jGaaHVuUcaU", title: "Masha and the Bear 🎉 NEW EPISODE 2026 🌼 Blown Away 🌪️💨 (Episode 116)" },
    { id: "hAER3XEznEk", title: "Masha and the Bear 2026 🌸👩‍🦱👋 Spring Wears Pink! 🌼 Blown Away 🌪️💨 Coming on March 6!" },
    { id: "YkE64C4LvMM", title: "Masha and the Bear 2026 🧣🐻 Why Should We Put On the Warm Clothes? 🧤🤏 Best episodes collection 🎬" },
    { id: "OHqQwRjK8kw", title: "Masha and the Bear 2026 🎬 NEW SPECIAL EPISODE 🎡🤹‍♀️ Masha and the Bear: Wonder Park🎢🎠 Best cartoons" },
    { id: "rKO-CEBUhPQ", title: "👍 Like or Dislike? 👎 Do You Like Spring? 🌿☀️ Best episodes cartoon collection 🎬 Masha and the Bear" },
    { id: "KCkc9siATIA", title: "Masha and the Bear 2026 🤔 Guess the Food❓Best episodes cartoon collection 🎬" },
    { id: "zHRGit5jPp4", title: "🎬💥 SPECIAL EPISODE 🎡🤹‍♀️ Masha and the Bear: Wonder Park 🎢🎠 Watch On Our Channel Right Now! 📺🏖️" }
];

// ================= ELEMENT =================
const grid = document.getElementById("videoGrid");
const mainVideo = document.getElementById("mainVideo");
const title = document.getElementById("videoTitle");
const nextList = document.getElementById("nextList");
const playerSection = document.getElementById("playerSection");
const welcomeOverlay = document.getElementById("welcomeOverlay");
const header = document.querySelector("header");

let currentVideoIndex = -1;

// ================= WELCOME ANIMATION =================
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        if (welcomeOverlay) {
            welcomeOverlay.classList.add("fade-out");
        }
    }, 2500);

    loadGrid();
});

// ================= SCROLL DETECTION (STICKY NAVBAR) =================
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ================= LOAD GRID =================
function loadGrid() {
    if (!grid) return;

    grid.innerHTML = "";

    videos.forEach((v, index) => {
        const card = document.createElement("div");
        card.className = "video-card";

        card.addEventListener("click", () => playVideo(index));

        card.innerHTML = `
            <img src="https://img.youtube.com/vi/${v.id}/mqdefault.jpg" alt="${v.title}">
            <div class="card-info">
                <h4>${v.title}</h4>
            </div>
        `;

        grid.appendChild(card);
    });
}

// ================= PLAY VIDEO =================
function playVideo(index) {
    console.log("playVideo called:", index); // Debug
    
    if (index < 0 || index >= videos.length) {
        console.error("Invalid index:", index);
        return;
    }
    
    currentVideoIndex = index;
    const v = videos[index];

    if (playerSection) {
        playerSection.classList.remove("hidden");
        playerSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    
    if (title) {
        title.innerText = v.title;
    }

    if (mainVideo) {
        // Force reload dengan reset src dulu
        mainVideo.src = "";
        setTimeout(() => {
            mainVideo.src = `https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1`;
        }, 50);
    }

    loadNext(index);
}

// ================= RETRY VIDEO =================
function retryVideo() {
    if (currentVideoIndex !== -1) {
        const v = videos[currentVideoIndex];
        if (mainVideo) {
            mainVideo.src = `https://www.youtube.com/embed/${v.id}?autoplay=1&t=${new Date().getTime()}`;
        }
    }
}

// ================= NEXT VIDEO =================
function loadNext(current) {
    if (!nextList) return;

    nextList.innerHTML = "";

    videos.forEach((v, i) => {
        if (i !== current) {
            const item = document.createElement("div");
            item.className = "next-item";
            item.setAttribute("data-index", i);

            // Gunakan addEventListener dengan preventDefault
            item.addEventListener("click", function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log("Next video clicked:", i, v.title); // Debug
                playVideo(i);
            });

            item.innerHTML = `
                <img src="https://img.youtube.com/vi/${v.id}/mqdefault.jpg" alt="${v.title}">
                <div>
                    <h5>${v.title}</h5>
                </div>
            `;

            nextList.appendChild(item);
        }
    });
}