const courses = [
    {
        "name": "Complete WEB Development Tutorial",
        "thumbnail": "images/course_3.jpg",
        "tutorName": "Sam Smith",
        "tutorImage": "images/pic_8.jpg",
        "date": "22-01-2024",
        "duration": "0:54:23 Minutes",
        "parts": "3 Parts",
        "videosCount": "4 videos",
        "link": "StudentViewCourse.html"
    },
    {
        "name": "Complete Cloud Computing Tutorial",
        "thumbnail": "images/course_8.png",
        "tutorName": "Daved Sam",
        "tutorImage": "images/pic_9.png",
        "date": "21-12-2023",
        "duration": "2:34:23 Minutes",
        "parts": "7 Parts",
        "videosCount": "7 videos",
        "link": "StudentViewCourse.html"
    },
    {
        "name": "Complete C++ Tutorial",
        "thumbnail": "images/course_6.jpg",
        "tutorName": "Sari Kol",
        "tutorImage": "images/pic_10.png",
        "date": "02-02-2024",
        "duration": "1:14:23 Minutes",
        "parts": "3 Parts",
        "videosCount": "5 videos",
        "link": "StudentViewCourse.html"
    },
    {
        "name": "Complete Python Tutorial",
        "thumbnail": "images/course_3.jpg",
        "tutorName": "Mery John",
        "tutorImage": "images/pic_11.png",
        "date": "12-09-2023",
        "duration": "4:54:23 Minutes",
        "parts": "9 Parts",
        "videosCount": "5 videos",
        "link": "StudentViewCourse.html"
    },
    {
        "name": "Complete Mathematics Tutorial",
        "thumbnail": "images/course_2.png",
        "tutorName": "Lara Nol",
        "tutorImage": "images/pic_12.jpg",
        "date": "30-12-2023",
        "duration": "1:54:23 Minutes",
        "parts": "5 Parts",
        "videosCount": "10 videos",
        "link": "StudentViewCourse.html"
    },
    {
        "name": "Complete MySQL Tutorial",
        "thumbnail": "images/course_1.png",
        "tutorName": "Yosef mo",
        "tutorImage": "images/pic_13.png",
        "date": "08-02-2024",
        "duration": "4:54:23 Minutes",
        "parts": "9 Parts",
        "videosCount": "10 videos",
        "link": "StudentViewCourse.html"
    }
    // Add more course objects as needed
];

// Function to generate HTML for a single course card
function generateCourseCard(course) {
    return `
        <div class="w-full max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div class="tutor flex items-center gap-4 mb-6">
                <img src="${course.tutorImage}" alt="Tutor Image" class="h-20 w-20 rounded-full object-cover">
                <div class="info">
                    <h3 class="text-xl text-blue-500">${course.tutorName}</h3>
                    <span class="text-gray-500">${course.date}</span>
                </div>
            </div>
            <div class="relative">
                <img src="${course.thumbnail}" alt="Course Thumbnail" class="w-full h-48 object-cover rounded-md">
                <span class="absolute top-4 left-4 bg-blue-500 text-white rounded-md p-2">${course.videosCount}</span>
            </div>
            <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">${course.name}</h1>
            <div class="my-4">
                <div class="flex space-x-1 items-center">
                    <span>
                        <!-- Duration Icon -->
                    </span>
                    <p>${course.duration}</p>
                </div>
                <div class="flex space-x-1 items-center">
                    <span>
                        <!-- Parts Icon -->
                    </span>
                    <p>${course.parts}</p>
                </div>
                <a href="${course.link}"
                    class="mt-4 text-xl w-full text-white bg-blue-500 py-2 rounded-xl shadow-lg block text-center">
                    View Playlist
                </a>
            </div>
        </div>
    `;
}

// Function to render course cards
function renderCoursesCards() {
    const cardContainer = document.getElementById('StudentHomeCoursesCard');
    cardContainer.innerHTML = ''; // Clear existing content

    courses.forEach(course => {
        const cardHTML = generateCourseCard(course);
        cardContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Call renderCoursesCards function to generate cards on page load
document.addEventListener('DOMContentLoaded', renderCoursesCards);
