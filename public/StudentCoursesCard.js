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
    },
    {
        "name": "Complete Bootstrap Tutorial",
        "thumbnail": "images/course_3.jpg",
        "tutorName": "Mery Kol",
        "tutorImage": "images/pic_16.png",
        "date": "11-11-2023",
        "duration": "4:54:23 Minutes",
        "parts": "15 Parts",
        "videosCount": "17 videos",
        "link": "StudentViewCourse.html"
    },
    {
        "name": "Complete CSS Tutorial",
        "thumbnail": "images/course_8.png",
        "tutorName": "John Levi",
        "tutorImage": "images/pic_14.png",
        "date": "01-01-2023",
        "duration": "2:34:23 Minutes",
        "parts": "7 Parts",
        "videosCount": "7 videos",
        "link": "StudentViewCourse.html"
    },
    {
        "name": "Complete HTML Tutorial",
        "thumbnail": "images/course_9.png",
        "tutorName": "Dev Dev",
        "tutorImage": "images/pic_15.jpg",
        "date": "11-02-2024",
        "duration": "5:14:23 Minutes",
        "parts": "13 Parts",
        "videosCount": "17 videos",
        "link": "StudentViewCourse.html"
    }
    // Add more course objects as needed
];


const coursesEnrolled = [
    {
        name: 'Complete C# Tutorial',
        thumbnail: 'images/course_10.jpg',
        tutorName: 'Alona Deo',
        tutorImage: 'images/pic_2.jpg',
        date: '19-12-2023',
        duration: '2:14:23 Minutes',
        parts: '4 Parts',
        price: '$55',
        discount: '%20 Discount',
        placesLeft: '6 places left',
        link: 'Buy Lesson'
    },
    {
        "name": "Learning to write code in Java from the basics",
        "thumbnail": "images/course_11.jpg",
        "tutorName": "Mariam Sam",
        "tutorImage": "images/pic_3.jpg",
        "date": "21-10-2023",
        "duration": "7:14:23 Minutes",
        "parts": "6 Parts",
        "price": "$70",
        "discount": "",
        "placesLeft": "9 places left",
        "link": "Start Watching Now"
    },
    {
        "name": "Complete JavaScript Tutorial",
        "thumbnail": "images/course_12.png",
        "tutorName": "Mariam Sam",
        "tutorImage": "images/pic_3.jpg",
        "date": "18-02-2024",
        "duration": "2:514:13 Minutes",
        "parts": "3 Parts",
        "price": "$100",
        "discount": "%50 Discount",
        "placesLeft": "22 places left",
        "link": "Buy Lesson"
    },
    {
        "name": "Complete Node.js Tutorial",
        "thumbnail": "images/course_13.jpg",
        "tutorName": "John Deo",
        "tutorImage": "images/pic_4.png",
        "date": "21-01-2024",
        "duration": "2:14:23 Minutes",
        "parts": "4 Parts",
        "price": "$30",
        "discount": "",
        "placesLeft": "9 places left",
        "link": "Buy Lesson"
    },
    {
        "name": "Learning to write code in PHP what",
        "thumbnail": "images/course_14.jpg",
        "tutorName": "Omar Or",
        "tutorImage": "images/pic_5.jpg",
        "date": "02-02-2024",
        "duration": "2:22:53 Minutes",
        "parts": "5 Parts",
        "price": "$44",
        "discount": "%40 Discount",
        "placesLeft": "12 places left",
        "link": "Start Watching Now"
    },
    {
        "name": "Complete VS Code Tutorial",
        "thumbnail": "images/course_15.png",
        "tutorName": "beni beni",
        "tutorImage": "images/pic_6.png",
        "date": "21-10-2022",
        "duration": "4:54:23 Minutes",
        "parts": "9 Parts",
        "price": "$50",
        "discount": "",
        "placesLeft": "3 places left",
        "link": "Buy Lesson"
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


function generateCourseEnrolledCard(coursesEnrolled) {
    return `
        <div class="w-full max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div class="tutor flex items-center gap-4 mb-5">
                <img src="${coursesEnrolled.tutorImage}" alt="Tutor Image" class="h-20 w-20 rounded-full object-cover">
                <div class="info">
                    <h3 class="text-xl text-blue-500">${coursesEnrolled.tutorName}</h3>
                    <span class="text-gray-500">${coursesEnrolled.date}</span>
                </div>
            </div>
            <div class="relative">
                <img src="${coursesEnrolled.thumbnail}" alt="Course Thumbnail" class="w-full h-48 object-cover rounded-md">
                <p class="absolute top-0 bg-blue-500 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">${coursesEnrolled.price}</p>
                <p class="absolute top-0 right-0 bg-blue-500 text-white font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">${coursesEnrolled.discount}</p>
            </div>
            <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">${coursesEnrolled.name}</h1>
            <div class="my-4">
                <div class="flex space-x-1 items-center">
                    <span>
                        <!-- Duration Icon -->
                    </span>
                    <p>${coursesEnrolled.duration}</p>
                </div>
                <div class="flex space-x-1 items-center">
                    <span>
                        <!-- Parts Icon -->
                    </span>
                    <p>${coursesEnrolled.parts}</p>
                </div>
                <div class="flex space-x-1 items-center">
                    <span>
                        <!-- User Icon -->
                    </span>
                    <p>${coursesEnrolled.placesLeft}</p>
                </div>
                <button class="mt-4 text-xl w-full text-white bg-blue-500 py-2 rounded-xl shadow-lg">${coursesEnrolled.link}</button>
            </div>
        </div>
    `;
}

// Function to render course cards
function renderCoursesEnrolledCards() {
    const cardContainer = document.getElementById('StudentCoursesEnrolledCard'); // Adjust the ID as necessary
    cardContainer.innerHTML = ''; // Clear existing content

    coursesEnrolled.forEach(coursesEnrolled => {
        const cardHTML = generateCourseEnrolledCard(coursesEnrolled);
        cardContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
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

// Call renderCoursesCards function to generate cards on page load
document.addEventListener('DOMContentLoaded', renderCoursesEnrolledCards);