const videos = [
    { name: 'Complete Cloud Computing Tutorial (part 01)', image: 'images/course_5.jpg' },
    { name: 'Complete Cloud Computing Tutorial (part 02)', image: 'images/course_5.jpg' },
    { name: 'Complete Cloud Computing Tutorial (part 03)', image: 'images/course_5.jpg' },
    { name: 'Complete Cloud Computing Tutorial (part 04)', image: 'images/course_5.jpg' },
    { name: 'Complete Cloud Computing Tutorial (part 05)', image: 'images/course_5.jpg' },

    // Add more video objects as needed
];

// Function to generate HTML for a single card
function generateVideoCard(video) {
    return `
        <div class="box relative bg-white rounded-md p-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <button class="absolute top-0 left-0 mt-2 ml-2 text-red-500 text-4xl hover:text-red-600 hover:border-4 border-solid hover:border-red-600 rounded-full">
                <i class="fas fa-times"></i>
            </button>
            <i class="fas fa-play absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32 bg-opacity-30 flex items-center justify-center text-6xl text-gray-300"></i>
            <img src="${video.image}" alt="" class="w-full h-80 object-cover rounded-md">
            <div class="flex justify-between items-end">
                <h3 class="text-3xl text-black">${video.name}</h3>
                <button class="text-blue-500 text-2xl">
                    <i class="fas fa-pen"></i>
                </button>
            </div>
        </div>
    `;
}

// Function to render cards and add the 'Add new video' card
function renderVideosCards() {
    const cardContainer = document.getElementById('VideoContainerCourses');
    cardContainer.innerHTML = ''; // Clear existing content

    videos.forEach(video => {
        const cardHTML = generateVideoCard(video);
        cardContainer.insertAdjacentHTML('beforeend', cardHTML);
    });

    // Add the 'Add new video' card
    const addCardHTML = `
        <div class="box relative bg-white rounded-md p-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg w-full flex items-center justify-center"  >
            <i class="fas fa-plus text-9xl text-gray-300  hover:text-blue-400 cursor-pointer"  onclick="triggerFileUpload()" ></i>
        </div>
    `;
    cardContainer.insertAdjacentHTML('beforeend', addCardHTML);
}

function triggerFileUpload() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'video/*'; // Accept only video files
    fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Handle the file upload or processing here
            alert(`File selected: ${file.name}`);
            // You might want to call a function to process and display the new video
        }
    };
    fileInput.click(); // Trigger the file input dialog
}

document.getElementById('editButton').addEventListener('click', function() {
    let title = document.getElementById('courseTitle');
    let description = document.getElementById('courseDescription');

    if (this.innerText === "Edit") {
        // Replace title with an input box
        let titleInput = `<input type="text" id="titleInput" class="text-2xl text-blue-500 capitalize w-full  bg-gray-200" value="${title.innerText}">`;
        title.innerHTML = titleInput;

        // Replace description with a textarea
        let descTextarea = `<textarea id="descInput" class=" leading-2 text-1.8xl text-light-color w-full bg-gray-200">${description.innerText}</textarea>`;
        description.innerHTML = descTextarea;

        this.innerText = "Save";
    } else {
        // Save the edited values and revert back to text display
        title.innerText = document.getElementById('titleInput').value;
        description.innerText = document.getElementById('descInput').value;

        this.innerText = "Edit";
    }
});



// Call renderVideosCards function to generate cards on page load
document.addEventListener('DOMContentLoaded', renderVideosCards);
