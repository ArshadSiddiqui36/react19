// https://placebeard.it/250/250
// export function getImageUrl(size) {
//     return "https://placebeard.it/" + size + ".jpg";
// }

//  OR

// https://i.pravatar.cc/150
// https://i.pravatar.cc/150?img=1
export function getImageUrl(person, size = "100") {
    // return "https://i.pravatar.cc/" + size;
    return "https://i.pravatar.cc/" + size + "?img=" + person.imageId;
}
