//this is how you declare objects in JS
let myYoutubeVideoOne = {
    title: 'Loops in javascript',
    videoLength: 15,
    videoCreator: 'Mubi',
    videoDescription: 'this is a video description and a long one'
}

let myYoutubeVideoTwo = {
    title: 'Functions in javascript',
    videoLength: 10,
    videoCreator: 'Mubi',
    videoDescription: 'this is a video description and a long one'
}
myYoutubeVideoTwo.title = 'Arrays'

// console.log(myYoutubeVideo)

// console.log(`Hey new Video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`)





// let newCourse = {
//     name: 'Javascript',
//     Price: '20$',
//     description: 'this is a new course',
//     by: 'Hitesh'
// }
// console.log(`Hey there is a new course namely ${newCourse.name} at a price of ${newCourse.Price} by ${newCourse.by} `)


let changeVideoLength = function(myObject){
    // console.log(`time of this video is ${myObject.videoLength + 2}`)
    return {
        formatOne: `Time of this video is: ${myObject.videoLength + 2}`,
        formatTwo: `Time of this video is: ${myObject.videoLength + 2}`
    }

}
let addOne = changeVideoLength(myYoutubeVideoTwo)
// changeVideoLength(myYoutubeVideoOne)
console.log(addOne.formatTwo)

























